import './EditOrder.css'
import { useForm } from '../../../hooks/useForm'
import { useEffect } from 'react'
import { useFirestore } from '../../../hooks/useFirestore'
import { useParams } from "react-router-dom";

const EditOrder = () =>{

    const { handleInputChange, setDataForm, dataForm, handleUpdate} = useForm()
    const { getDocument } = useFirestore()
    const {itemID} = useParams()

    useEffect(() =>{
        getDocument('orders', itemID, setDataForm);
    },[])
    
return (
    dataForm ?
    <form className="order-form" id='order-form' onSubmit={handleUpdate('orders', itemID)}>
        <p className='heading'>Editar Venta</p>
        <div className="field">
            <span className='text-edit'>CPQ</span>
            <input placeholder="Numero de CPQ" className="input-field" type="text" name='cpq' onChange={handleInputChange} value={dataForm.cpq}></input>
        </div>
        <div className="field">
            <span className='text-edit'>Factura</span>
            <input placeholder="Factura" className="input-field" type="text" name='invoice' onChange={handleInputChange} value={dataForm.invoice}></input>
        </div>
        <div className="field">
            <span className='text-edit'>Monto</span>
            <input placeholder="Monto" className="input-field" type="number" name='amount' onChange={handleInputChange} value={dataForm.amount}></input>
        </div>
        <div className="field">
            <span className='text-edit'>IVA</span>
            <input placeholder="IVA" className="input-field" type="text" name='IVA' onChange={handleInputChange} value={dataForm.IVA}></input>
        </div>
        <div className="field">
            <span className='text-edit'>Comisión %</span>
            <input placeholder="% de Comisión" className="input-field" type="text" name='commission' onChange={handleInputChange} value={dataForm.commission}></input>
        </div>
        <button className="button3">Editar</button>
    </form>
    : null
)
}

export default EditOrder