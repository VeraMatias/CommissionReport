import { useState } from 'react'
import { Timestamp } from 'firebase/firestore';
import { useFirestore } from './useFirestore';
import { useGeneral } from './useGeneral';

export const useForm = () =>{

    const [dataForm, setDataForm] = useState()
    const { sendDocument, updateCreatedDateOrder, updateDocument } = useFirestore()
    const { getCurrentTimeStamp } = useGeneral()

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;

        if (type === 'checkbox') {
            setDataForm({
            ...dataForm,
            [name]: checked,
            [`${name}_date`]: checked ? getCurrentTimeStamp() : null,
            });
            console.log(dataForm)
        } else if ( name === 'date'){
            const dateValue = new Date(value);
            const timestamp = Timestamp.fromDate(dateValue);
            setDataForm({
                ...dataForm,
                [name]: timestamp,
            });
        }
        else{
            if (name === 'amount'){
                setDataForm({
                    ...dataForm,
                    [name]: parseInt(value),
                });
            }
            else if (name === 'IVA' || name === 'commission'){
                setDataForm({
                    ...dataForm,
                    [name]: parseFloat(value),
                });
            }
            else{
                setDataForm({
                    ...dataForm,
                    [name]: value,
                });
                }
            }
    };

    const handleCreate = (nameCollection) => (e) => {
        e.preventDefault();

        sendDocument(nameCollection, dataForm)
        .then((documentId) => {
            if (nameCollection === 'orders'){
                updateCreatedDateOrder(documentId, setDataForm)
            }
            window.history.back();
        })
    };

    const handleUpdate = (nameCollection, itemID) => (e) => {
        e.preventDefault();
        updateDocument(nameCollection, itemID, dataForm)
        window.history.back();
    }

    return {handleInputChange, handleCreate, setDataForm, dataForm, handleUpdate}
}