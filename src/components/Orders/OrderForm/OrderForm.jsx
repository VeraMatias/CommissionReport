import { useForm } from '../../../hooks/useForm'
import './OrderForm.css'

const OrderForm = () =>{

    const { handleInputChange, handleCreate } = useForm()
    
return (
    <form class="order-form" id='order-form' onSubmit={handleCreate('orders')}>
        <p className='heading'>Nueva Venta</p>
        <div class="field">
            <input placeholder="Numero de CPQ" class="input-field" type="text" name='cpq' onChange={handleInputChange}></input>
        </div>
        <div class="field">
            <input placeholder="Factura" class="input-field" type="text" name='invoice' onChange={handleInputChange}></input>
        </div>
        <div class="field">
            <input placeholder="Monto" class="input-field" type="number" name='amount' onChange={handleInputChange}></input>
        </div>
        <div class="field">
            <input placeholder="IVA" class="input-field" type="text" name='IVA' onChange={handleInputChange}></input>
        </div>
        <div class="field">
            <input placeholder="% de Comisión" class="input-field" type="text" name='commission' onChange={handleInputChange}></input>
        </div>
        <div class="field checkbox">
            <p className='checkbox-text'>Pagada?</p>
            <input  class="input-field" type="checkbox" name='paid' onChange={handleInputChange}></input>
        </div>
        <div class="field checkbox">
            <p className='checkbox-text'>Comisionada?</p>
            <input  class="input-field" type="checkbox" name='commissioned' onChange={handleInputChange}></input>
        </div>
        <button class="button3">Crear</button>
    </form>
)
}

export default OrderForm