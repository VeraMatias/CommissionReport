import './EditPaycheck.css'

import { useFirestore } from '../../../hooks/useFirestore'
import { useForm } from '../../../hooks/useForm'
import { useParams } from "react-router-dom";
import { useEffect } from 'react'

const EditPaycheck = () =>{

    const { handleInputChange, setDataForm, dataForm, handleUpdate } = useForm()
    const { getDocument } = useFirestore()
    const {itemID} = useParams()

    useEffect(() =>{
        getDocument('paycheck', itemID, setDataForm);
    },[])

return (
    dataForm ?
    <div className="paycheck-edit-container">
        <form className="paycheck-form" id='paycheck-form' onSubmit={handleUpdate('paycheck', itemID)}>
            <p className='heading'>Editar Recibo</p>
            <div className="field">
                <span className='text-edit'>Fecha</span>
                <input placeholder="Fecha" className="input-field input-date" type="date" name='date' onChange={handleInputChange} value={new Date(dataForm.date.seconds * 1000).toISOString().split('T')[0]}></input>
            </div>
            <div className="field">
                <span className='text-edit'>Monto</span>
                <input placeholder="Monto" className="input-field" type="number" name='amount' onChange={handleInputChange} value={dataForm.amount}></input>
            </div>
            <button type='submit' form='paycheck-form' className="button3">Editar</button>
        </form>
    </div>
    : null
)
}

export default EditPaycheck