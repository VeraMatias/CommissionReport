import './OrderCard.css'

import { useGeneral } from '../../../hooks/useGeneral'
import { useOrderCard } from '../../../hooks/useOrderCard'
import ToggleSwitch from '../../General/ToggleSwitch/ToggleSwitch'
import ItemValue from '../ItemValue/ItemValue'
import ItemDate from '../ItemDate/ItemDate'

import { Link } from 'react-router-dom'

const OrderCard = ({order}) =>{

    const { formattedNumber } = useGeneral()
    const {orderCard, calculateCommission, handlePaidChange, handleCommissionedChange} = useOrderCard(order)

return (
    <div className="order-card">
        <div className="order-card-content">
            <div className="card-header">
                <h2 className="card-title">
                    {orderCard.cpq} 
                    <Link to={`/orders/edit/${orderCard.id}`} >
                        <i className='bx bx-pencil edit' ></i>
                    </Link>
                </h2>
                <ToggleSwitch isChecked={orderCard.paid} onClick={() => handlePaidChange(orderCard.paid, orderCard.id)} name={'Pagada'}/>
                <ToggleSwitch isChecked={orderCard.commissioned} onClick={() => handleCommissionedChange(orderCard.commissioned, orderCard.id)} name={'Comisionada'}/>
            </div>
            <div className= {(orderCard.paid && orderCard.commissioned) ? "color-status green2" : orderCard.paid ? "color-status yellow" : "color-status red" } ></div>

            <div className="cart-info">
                <div className='info-top'>
                    <ItemValue text={'Factura:'} value={orderCard.invoice}/>
                    <ItemValue text={'Monto:'} value={formattedNumber(orderCard.amount)}/>
                    <ItemValue text={'IVA:'} value={`% ${orderCard.IVA}`}/>
                    <ItemValue text={'Comisión:'} value={`% ${orderCard.commission} - ${formattedNumber(calculateCommission(orderCard))}`}/>
                </div>
                
                <div className="info-bottom">
                    <ItemDate text={'Creada:'} value={orderCard.created_date}/>
                    <ItemDate text={'Pagada:'} value={orderCard.paid_date}/>
                    <ItemDate text={'Comisionada:'} value={orderCard.commissioned_date}/>
                </div>
            </div>
        </div>
    </div>
)
}

export default OrderCard