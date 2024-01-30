import './PaycheckForm.css'
import { useForm } from '../../../hooks/useForm';

const PaycheckForm = () =>{

    const { handleInputChange, handleCreate } = useForm()

return (
    <form className="paycheck-form" id='paycheck-form' onSubmit={handleCreate('paycheck')}>
        <p className='heading'>Nuevo Recibo</p>
        <div className="field">
            <input placeholder="Fecha" className="input-field input-date" type="date" name='date' onChange={handleInputChange}></input>
        </div>
        <div className="field">
            <input placeholder="Monto" className="input-field" type="number" name='amount' onChange={handleInputChange}></input>
        </div>
        <button type='submit' form='paycheck-form' className="button3">Crear</button>
    </form>
)
}

export default PaycheckForm