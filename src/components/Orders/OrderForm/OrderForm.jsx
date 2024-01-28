import './OrderForm.css'

const OrderForm = () =>{

return (
    <form class="order-form">
        <p className='heading'>Nueva Venta</p>
        <div class="field">
            <input placeholder="Numero de CPQ" class="input-field" type="text"></input>
        </div>
        <div class="field">
            <input placeholder="Factura" class="input-field" type="text"></input>
        </div>
        <div class="field">
            <input placeholder="Monto" class="input-field" type="number"></input>
        </div>
        <div class="field">
            <input placeholder="IVA" class="input-field" type="number"></input>
        </div>
        <div class="field">
            <input placeholder="% de Comisión" class="input-field" type="number"></input>
        </div>
        <div class="field checkbox">
            <p className='checkbox-text'>Pagada?</p>
            <input  class="input-field" type="checkbox"></input>
        </div>
        <button class="button3">Crear</button>
    </form>
)
}

export default OrderForm