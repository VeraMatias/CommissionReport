import './OrdersContainer.css'

import OrderCard from '../../components/Orders/OrderCard/OrderCard'
import ButtonNew from '../../components/General/ButtonNew/ButtonNew'
import { useEffect, useState } from 'react'
import { useFirestore } from '../../hooks/useFirestore'

const OrdersContainer =  () => {

    const [orders, setOrders] = useState()
    const { getCollection } = useFirestore()

    useEffect(() =>{
        getCollection('orders',setOrders)
    },[])

    return( 
    <>
        <div className="container-orders">
            {orders ? 
            orders.map(order =>(
            <OrderCard 
            key={order.id} 
            paid={order.paid} 
            CPQ={order.cpq} 
            invoice={order.invoice} 
            amount={order.amount} 
            IVA={order.IVA} 
            commission={order.commission}/>))
            : 
            null}
        </div>
        <ButtonNew url={'/orders/create'}/>
    </>
    )
}
export default OrdersContainer