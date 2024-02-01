import { useState } from 'react'
import { Timestamp } from 'firebase/firestore';
import { useFirestore } from './useFirestore';

export const useForm = () =>{

    const [dataForm, setDataForm] = useState()
    const { sendDocument, updateOverview } = useFirestore()

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
            if (name === 'amount' || name === 'commission'){
                setDataForm({
                    ...dataForm,
                    [name]: parseInt(value),
                });
            }
            else if (name === 'IVA'){
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
        if (nameCollection === 'paycheck'){
            updateOverview('balance', false, dataForm.amount)
        }
        else if (nameCollection === 'orders'){
            const commissionAmount = ((dataForm.amount/(dataForm.IVA/100+1))*dataForm.commission/100); 
            
            dataForm.paid ? 
                updateOverview('balance', true, commissionAmount)
            :
                updateOverview('pending', true, commissionAmount)

            updateOverview('sales', true, dataForm.amount)
        }
        sendDocument(nameCollection, dataForm)
        window.history.back()
    };

    return {handleInputChange, handleCreate}
}