import { useState } from 'react'
import { Timestamp } from 'firebase/firestore';
import { useFirestore } from './useFirestore';
import { useGeneral } from './useGeneral';

export const useForm = () =>{

    const [dataForm, setDataForm] = useState()
    const { sendDocument, updateOverview, updateCreatedDateOrder } = useFirestore()
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
                updateCreatedDateOrder(documentId, setDataForm)
            }
            window.history.back();
        })
    };

    return {handleInputChange, handleCreate}
}