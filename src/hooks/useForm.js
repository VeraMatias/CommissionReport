import { useState } from 'react'
import { Timestamp } from 'firebase/firestore';
import { useFirestore } from './useFirestore';


export const useForm = () =>{

    const [dataForm, setDataForm] = useState()
    const { sendDocument } = useFirestore()

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;

        if (type === 'checkbox') {
            setDataForm({
            ...dataForm,
            [name]: checked,
            });
        } else if ( name === 'date'){
            const dateValue = new Date(value);
            const timestamp = Timestamp.fromDate(dateValue);
            setDataForm({
                ...dataForm,
                [name]: timestamp,
            });
        }
        else{
            if (name === 'amount' || name === 'iva' || name === 'commission'){
                setDataForm({
                    ...dataForm,
                    [name]: parseInt(value),
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
        window.history.back()
    };

    return {handleInputChange, handleCreate}
}