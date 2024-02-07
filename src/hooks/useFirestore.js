import { getFirestore, collection, addDoc, getDocs, doc, updateDoc, getDoc} from "firebase/firestore"
import { useGeneral } from "./useGeneral"

export const useFirestore = () =>{

    const { getCurrentTimeStamp } = useGeneral()

    const sendDocument = (nameCollection, data) => {
        const document = {
            ...data
        }

        const db = getFirestore();
        const collectionFirestore = collection(db, nameCollection)
        addDoc(collectionFirestore, document)
            .then((response) => console.log('Documento añadido con ID: ', response.id))
            .catch((error) => console.error('Error al agregar documento: ', error));
    }

    const updateOverview = (fieldName, add, value) => {
        const db = getFirestore();
        const overviewDoc = doc(db, 'overview', process.env.REACT_APP_OVERVIEW_DOCUMENT)

        getDoc(overviewDoc).then((snapshot) =>{
            const currentFieldValue = snapshot.data()?.[fieldName]
            add ? 
                updateDoc(overviewDoc, {[fieldName]: (currentFieldValue + value)})
            :
                updateDoc(overviewDoc, {[fieldName]: (currentFieldValue - value)})
        })
    }

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

    return {sendDocument, updateOverview, getCollection, updatePaidOrder, updateCommissionedOrder}
}