import './OrderCard.css'

import { useGeneral } from '../../../hooks/useGeneral'
import { useOrderCard } from '../../../hooks/useOrderCard'

const OrderCard = ({order}) =>{

    const { formattedNumber } = useGeneral()
    const {orderCard, calculateCommission, handlePaidChange} = useOrderCard(order)

return (
    <div className="order-card">
        <div className="order-card-content">
            <div className= {orderCard.paid ? "color-status paid" : "color-status unpaid"} onDoubleClick={() => handlePaidChange(orderCard.paid, orderCard.id)}></div>
            <h2 className="card-title">{orderCard.cpq} <i className='bx bx-pencil edit' ></i></h2>
            <div className="cart-info">
                <div className="cart-info-item">
                    <span>Factura:</span>
                    <span className="item-value"> {orderCard.invoice}</span>
                </div>

                <div className="cart-info-item">
                    <span>Monto:</span>
                    <span className="item-value"> {formattedNumber(orderCard.amount)}</span>
                </div>

                <div className="cart-info-item">
                    <span>IVA:</span>
                    <span className="item-value"> % {orderCard.IVA}</span>
                </div>

                <div className="cart-info-item">
                    <span>Comisión:</span>
                    <span className="item-value"> %{orderCard.commission} - {formattedNumber(calculateCommission(orderCard))}</span>
                </div>
            </div>
        </div>
    </div>
)
}

export default OrderCard