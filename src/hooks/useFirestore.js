import { getFirestore, collection, addDoc, getDocs, doc, updateDoc} from "firebase/firestore"

export const useFirestore = () =>{

    const sendOrder = () => {
        const order = {
            IVA: 21,
            amount: 5000,
            commission: 5,
            cpq: 'CPQ-V-1234',
            invoice: '5-1017',
            reporterd: false
        }

        const db = getFirestore();
        const ordersCollection = collection(db, 'orders')
        addDoc(ordersCollection, order).then(({id}) => console.log(id))
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

    return {sendOrder, updateOrder, getCollection}
}