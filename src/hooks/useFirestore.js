import { getFirestore, collection, addDoc, getDocs, doc, updateDoc, getDoc, query} from "firebase/firestore"
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
        
            const totalCommissionPaid = ordersPaid.reduce((total, order) => total + ((order.amount/(order.IVA/100+1))*order.commission/100), 700000);
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

    return {sendDocument, getCollection, getDocument, updatePaidOrder, updateCommissionedOrder, updateCreatedDateOrder, updateDocument, getOverview}
}