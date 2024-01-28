import './PaycheckForm.css'

const PaycheckForm = () =>{

return (
    <form class="paycheck-form">
        <p className='heading'>Nuevo Recibo</p>
        <div class="field">
            <input placeholder="Fecha" class="input-field input-date" type="date"></input>
        </div>
        <div class="field">
            <input placeholder="Monto" class="input-field" type="number"></input>
        </div>
        <button class="button3">Crear</button>
    </form>
)
}

export default PaycheckForm