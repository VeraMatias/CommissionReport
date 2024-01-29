import { useGeneral } from '../../../hooks/useGeneral'
import './OrderCard.css'

const OrderCard = ({paid, CPQ, invoice, amount, IVA, commission}) =>{

    const {formattedNumber} = useGeneral()

return (
    <div className="order-card">
        <div className="order-card-content">
            <div className= {paid ? "color-status paid" : "color-status unpaid"}></div>
            <h2 className="card-title">{CPQ} <i className='bx bx-pencil edit' ></i></h2>
            <div className="cart-info">
                <div className="cart-info-item">
                    <span>Factura:</span>
                    <span className="item-value"> {invoice}</span>
                </div>

                <div className="cart-info-item">
                    <span>Monto:</span>
                    <span className="item-value"> {formattedNumber(amount)}</span>
                </div>

                <div className="cart-info-item">
                    <span>IVA:</span>
                    <span className="item-value"> % {IVA}</span>
                </div>

                <div className="cart-info-item">
                    <span>Comisión:</span>
                    <span className="item-value"> %{commission} - {formattedNumber(((amount/(IVA/100+1))*commission/100))}</span>
                </div>
            </div>
        </div>
    </div>
)
}

export default OrderCard