import { useState } from 'react'
import { Timestamp } from 'firebase/firestore';
import { useFirestore } from './useFirestore';


export const useForm = () =>{

    const [dataForm, setDataForm] = useState()
    const { sendDocument } = useFirestore()

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if ( name === 'date'){
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
        console.log('Datos del formulario:', dataForm.date);
        sendDocument(nameCollection, dataForm)
        window.history.back()
    };

    return {handleInputChange, handleCreate}
}