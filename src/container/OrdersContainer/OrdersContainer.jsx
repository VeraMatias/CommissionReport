import './OrdersContainer.css'

import OrderCard from '../../components/Orders/OrderCard/OrderCard'
import ButtonNew from '../../components/General/ButtonNew/ButtonNew'
import { useEffect, useState } from 'react'
import { useFirestore } from '../../hooks/useFirestore'
import InputSearch from '../../components/General/InputSearch/InputSearch'
import InputDateSearch from '../../components/General/InputDateSearch/InputDateSearch'

const OrdersContainer =  () => {

    const [orders, setOrders] = useState()
    const [ordersToShow, setOrdersToShow] = useState()

    const { getCollection } = useFirestore()

    useEffect(() =>{
        getCollection('orders', (data) => {
            const sortedOrders = data.sort((a, b) => b.created_date - a.created_date);
            setOrders(sortedOrders);
            setOrdersToShow(sortedOrders);
        });
    },[])

    return( 
    <>
        <div className="container-orders">
            <div className="container-filter">
                <InputSearch setOrdersToShow={setOrdersToShow} orders={orders} title ={'Busqueda por CPQ'} fieldName={'cpq'}/>
                <InputSearch setOrdersToShow={setOrdersToShow} orders={orders} title ={'Busqueda por Factura'} fieldName={'invoice'}/>
                <InputDateSearch setOrdersToShow={setOrdersToShow} orders={orders}/>
            </div>

            {ordersToShow ? 
            ordersToShow.map(order =>(
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