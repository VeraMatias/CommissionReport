import { getFirestore, collection, addDoc, getDocs, doc, updateDoc, getDoc} from "firebase/firestore"

export const useFirestore = () =>{

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

    return {sendDocument, updateOverview, getCollection}
}