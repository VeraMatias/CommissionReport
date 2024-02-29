import { getFirestore, collection, addDoc, getDocs, doc, updateDoc, getDoc, query, where} from "firebase/firestore"
import { useGeneral } from "./useGeneral"

export const useFirestore = () =>{

    const { getCurrentTimeStamp } = useGeneral()

    const sendDocument = (nameCollection, data) => {
        const document = { ...data };
        const db = getFirestore();
        const collectionFirestore = collection(db, nameCollection);
        
        return addDoc(collectionFirestore, document)
            .then((response) => response.id) 
            .catch((error) => {
                throw error; 
            });
    };

    const updatePaidOrder = (idDoc, value, setOrderCard) => {
        const db = getFirestore();
        const orderDoc = doc(db, 'orders', idDoc)
        updateDoc(orderDoc, { paid: value })

        value ? updateDoc(orderDoc, { paid_date: getCurrentTimeStamp()}) : updateDoc(orderDoc, { paid_date: null})

        getDoc(orderDoc).then((snapshot) =>{ 
            setOrderCard({id: snapshot.id, ...snapshot.data()}) })
    }

    const updateCommissionedOrder = (idDoc, value, setOrderCard) => {
        const db = getFirestore();
        const orderDoc = doc(db, 'orders', idDoc)
        updateDoc(orderDoc, { commissioned: value })

        value ? updateDoc(orderDoc, { commissioned_date: getCurrentTimeStamp()}) : updateDoc(orderDoc, { commissioned_date: null})

        getDoc(orderDoc).then((snapshot) =>{ 
            setOrderCard({id: snapshot.id, ...snapshot.data()}) })
    }

    const updateCreatedDateOrder = (idDoc, setOrderCard) => {
        const db = getFirestore();
        const orderDoc = doc(db, 'orders', idDoc)
        updateDoc(orderDoc, { created_date: getCurrentTimeStamp()}) 

        getDoc(orderDoc).then((snapshot) =>{ 
            setOrderCard({id: snapshot.id, ...snapshot.data()}) })
    }

    const getCollection = (nameCollection, setItems) =>{
        const db = getFirestore();
        const itemsCollection = collection(db,nameCollection);
        getDocs(itemsCollection).then((snapshot) =>{
            snapshot === 0 ?
                setItems({})
            :
                setItems(snapshot.docs.map((doc) => (
                {id: doc.id, ...doc.data()})))
        })
    }

    const getDocument = (nameCollection, idDoc, setDataForm) =>{
        const db = getFirestore();
        const orderDoc = doc(db, nameCollection, idDoc)

        getDoc(orderDoc).then((snapshot) =>{ 
            setDataForm({id: snapshot.id, ...snapshot.data()}) })
    }

    const updateDocument = (nameCollection, itemID, dataForm) => {
        const db = getFirestore();
        const orderDoc = doc(db, nameCollection, itemID)
        updateDoc(orderDoc, dataForm ) 
    }

    const getOverview = async (setData) =>{
        try {
            const db = getFirestore();

            // Consulta documentos donde el campo "paid" sea verdadero, falso o no esté definido
            const orderQuery = query(collection(db, "orders"));
    
            const orderSnapshot = await getDocs(orderQuery);
            const orderDocs = orderSnapshot.docs.map(doc => doc.data());
    
            // Filtra los documentos según el valor de la propiedad "paid"
            const ordersPaid = orderDocs.filter(doc => doc.paid === true);
            const ordersNotPaid = orderDocs.filter(doc => doc.paid === false);
            const ordersWithoutPaid = orderDocs.filter(doc => !doc.hasOwnProperty('paid'));
        
            const totalCommissionPaid = ordersPaid.reduce((total, order) => total + ((order.amount/(order.IVA/100+1))*order.commission/100), parseInt(process.env.REACT_APP_INITIAL_VALUE));
            const totalCommissionNotPaid = ordersNotPaid.reduce((total, order) => total + ((order.amount/(order.IVA/100+1))*order.commission/100), 0);
            const totalCommissionWithoutPaid = ordersWithoutPaid.reduce((total, order) => total + ((order.amount/(order.IVA/100+1))*order.commission/100), 0);
            const totalAmountSales = ordersPaid
                                    .concat(ordersNotPaid, ordersWithoutPaid)
                                    .reduce((total, order) => total + order.amount, 0);

            // Consulta documentos en la colección "paycheck"
            const paycheckQuery = query(collection(db, "paycheck"));

            const paycheckSnapshot = await getDocs(paycheckQuery);
            const paycheckDocs = paycheckSnapshot.docs.map(doc => doc.data());

            // Calcula la suma de los valores de "amount" en los documentos de "paycheck"
            const totalAmountPaycheck = paycheckDocs.reduce((total, paycheck) => total + paycheck.amount, 0);

            // Guarda los valores en el estado
            setData({
                balance: totalCommissionPaid -totalAmountPaycheck,
                pending: totalCommissionNotPaid + totalCommissionWithoutPaid,
                sales: totalAmountSales
            });
    } catch (error) {
        console.error('Error al obtener datos de pedidos:', error);
    }
};


const getStatistics = async (setDataKPIs, setDataLine) => {
    try {
        const db = getFirestore();

        // Obtener la fecha actual y la fecha hace 12 meses
        const currentDate = new Date();
        const twelveMonthsAgo = new Date(currentDate);
        twelveMonthsAgo.setMonth(twelveMonthsAgo.getMonth() - 12);

        // Consulta documentos en la colección "orders"
        const orderQuery = query(
            collection(db, "orders"),
            where("created_date", ">=", twelveMonthsAgo)
        );
        const orderSnapshot = await getDocs(orderQuery);
        const orderDocs = orderSnapshot.docs.map(doc => doc.data());

        // Consulta documentos en la colección "paycheck"
        const paycheckQuery = query(
            collection(db, "paycheck"),
            where("date", ">=", twelveMonthsAgo)
        );
        const paycheckSnapshot = await getDocs(paycheckQuery);
        const paycheckDocs = paycheckSnapshot.docs.map(doc => doc.data());

        // Obtencion de Valores KPIs
        const totalSales = orderDocs.reduce((total, order) => total + order.amount, 0);
        const totalPaycheck = paycheckDocs.reduce((total, paycheck) => total + paycheck.amount, 0);
        const countSales = orderDocs.length;

        // Guarda los valores en el estado
        setDataKPIs({
            totalSales,
            totalPaycheck,
            countSales
        });

        //Datos para Grafico de Lineas de Monto de Ventas
        const salesByMonth = {};
        orderDocs.forEach(order => {
            const createdDate = order.created_date.toDate();
            const month = createdDate.getMonth() + 1; 
            const year = createdDate.getFullYear();
            const key = `${month}-${year}`;
            if (!salesByMonth[key]) {
                salesByMonth[key] = 0;
            }
            salesByMonth[key] += order.amount;
        });

        // Crear un objeto para almacenar la cantidad de órdenes por mes
        const countOrdersByMonth = {};
        orderDocs.forEach(order => {
            const createdDate = order.created_date.toDate();
            const month = createdDate.getMonth() + 1; 
            const year = createdDate.getFullYear(); // 
            const key = `${month}-${year}`; 
            if (!countOrdersByMonth[key]) {
            countOrdersByMonth[key] = 0; 
            }
            countOrdersByMonth[key]++; 
        });

        //Datos para Grafico de Lineas de Paychecks
        const paychecksByMonth = {};
        paycheckDocs.forEach(paycheck => {
            const createdDate = paycheck.date.toDate();
            const month = createdDate.getMonth() + 1; 
            const year = createdDate.getFullYear();
            const key = `${month}-${year}`;
            if (!paychecksByMonth[key]) {
                paychecksByMonth[key] = 0;
            }
            paychecksByMonth[key] += paycheck.amount;
        });

        // Ordenar los meses por año y mes
        const labels = Object.keys(paychecksByMonth).sort();
        const ordersValues = labels.map(key => salesByMonth[key] ? salesByMonth[key] : 0)
        const ordersCountValues = labels.map(key => countOrdersByMonth[key] ? countOrdersByMonth[key] : 0)
        const paychecksValues = labels.map(key => paychecksByMonth[key] ? paychecksByMonth[key] : 0)

        // Guarda los valores en el estado
        setDataLine({labels, ordersValues, ordersCountValues, paychecksValues});
    } catch (error) {
        console.error('Error al obtener datos:', error);
    }
};

    return {sendDocument, getCollection, getDocument, updatePaidOrder, updateCommissionedOrder, updateCreatedDateOrder, updateDocument, getOverview, getStatistics}
}