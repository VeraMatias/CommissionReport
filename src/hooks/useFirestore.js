import { getFirestore, collection, addDoc, getDocs, doc, updateDoc} from "firebase/firestore"

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

    const updateOrder = () => {
        const db = getFirestore();
        const orderDoc = doc(db, 'overview', 'cSs3XCWrU37dhSsNWzyr')

        updateDoc(orderDoc, {balance: 150000})
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

    return {sendDocument, updateOrder, getCollection}
}