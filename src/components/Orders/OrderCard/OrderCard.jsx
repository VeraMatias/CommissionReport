import './OrderCard.css'

import { useGeneral } from '../../../hooks/useGeneral'
import { useOrderCard } from '../../../hooks/useOrderCard'
import ToggleSwitch from '../../General/ToggleSwitch/ToggleSwitch'

const OrderCard = ({order}) =>{

    const { formattedNumber } = useGeneral()
    const {orderCard, calculateCommission, handlePaidChange, handleCommissionedChange} = useOrderCard(order)

return (
    <div className="order-card">
        <div className="order-card-content">
            <div className="card-header">
                <h2 className="card-title">{orderCard.cpq} <i className='bx bx-pencil edit' ></i></h2>
                <ToggleSwitch isChecked={orderCard.paid} onClick={() => handlePaidChange(orderCard.paid, orderCard.id)} name={'Pagada'}/>
                <ToggleSwitch isChecked={orderCard.commissioned} onClick={() => handleCommissionedChange(orderCard.commissioned, orderCard.id)} name={'Comisionada'}/>
            </div>
            <div className= {(orderCard.paid && orderCard.commissioned) ? "color-status green" : orderCard.paid ? "color-status yellow" : "color-status red" } ></div>

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