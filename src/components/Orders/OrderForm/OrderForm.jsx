import { useForm } from '../../../hooks/useForm'
import './OrderForm.css'

const OrderForm = () =>{

    const { handleInputChange, handleCreate } = useForm()
    
return (
    <form className="order-form" id='order-form' onSubmit={handleCreate('orders')}>
        <p className='heading'>Nueva Venta</p>
        <div className="form-container-field">
            <div className="field">
                <input placeholder="Numero de CPQ" className="input-field" type="text" name='cpq' onChange={handleInputChange}></input>
            </div>
            <div className="field">
                <input placeholder="Factura" className="input-field" type="text" name='invoice' onChange={handleInputChange}></input>
            </div>
            <div className="field">
                <input placeholder="Monto" className="input-field" type="number" name='amount' onChange={handleInputChange}></input>
            </div>
            <div className="field">
                <input placeholder="IVA" className="input-field" type="text" name='IVA' onChange={handleInputChange}></input>
            </div>
            <div className="field">
                <input placeholder="% de Comisión" className="input-field" type="text" name='commission' onChange={handleInputChange}></input>
            </div>
            <div className="field checkbox">
                <p className='checkbox-text'>Pagada?</p>
                <input  className="input-field" type="checkbox" name='paid' onChange={handleInputChange}></input>
            </div>
            <div className="field checkbox">
                <p className='checkbox-text'>Comisionada?</p>
                <input  className="input-field" type="checkbox" name='commissioned' onChange={handleInputChange}></input>
            </div>
        </div>
        <button className="button3">Crear</button>
    </form>
)
}

export default OrderForm