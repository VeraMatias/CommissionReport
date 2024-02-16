import './OrdersContainer.css'

import OrderCard from '../../components/Orders/OrderCard/OrderCard'
import ButtonNew from '../../components/General/ButtonNew/ButtonNew'
import { useEffect, useState } from 'react'
import { useFirestore } from '../../hooks/useFirestore'

const OrdersContainer =  () => {

    const [orders, setOrders] = useState()
    const { getCollection } = useFirestore()

    // useEffect(() =>{
    //     getCollection('orders',setOrders)
    // },[])

    useEffect(() =>{
        getCollection('orders', (data) => {
            const sortedOrders = data.sort((a, b) => b.created_date - a.created_date);
            setOrders(sortedOrders);
        });
    },[])

    return( 
    <>
        <div className="container-orders">
            {orders ? 
            orders.map(order =>(
            <OrderCard 
            key={order.id} 
            order={order}/>))
            : 
            null}
        </div>
        <ButtonNew url={'/orders/create'}/>
    </>
    )
}
export default OrdersContainer