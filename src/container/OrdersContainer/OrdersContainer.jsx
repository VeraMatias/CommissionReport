import './OrdersContainer.css'

import OrderCard from '../../components/Orders/OrderCard/OrderCard'

const OrdersContainer =  () => {

    return(
    <div class="container-orders">
        <OrderCard paid={true} CPQ={'CPQ-V-4458'} invoice={'5-2026'} amount={'12.000.000,00'} IVA={'10.5'} commission={'75.000,00'}/>
        <OrderCard paid={true} CPQ={'CPQ-V-4458'} invoice={'5-2026'} amount={'12.000.000,00'} IVA={'10.5'} commission={'75.000,00'}/>
        <OrderCard paid={true} CPQ={'CPQ-V-4458'} invoice={'5-2026'} amount={'12.000.000,00'} IVA={'10.5'} commission={'75.000,00'}/>
        <OrderCard paid={true} CPQ={'CPQ-V-4458'} invoice={'5-2026'} amount={'12.000.000,00'} IVA={'10.5'} commission={'75.000,00'}/>
        <OrderCard paid={true} CPQ={'CPQ-V-4458'} invoice={'5-2026'} amount={'12.000.000,00'} IVA={'10.5'} commission={'75.000,00'}/>
        <OrderCard paid={true} CPQ={'CPQ-V-4458'} invoice={'5-2026'} amount={'12.000.000,00'} IVA={'10.5'} commission={'75.000,00'}/>
    </div>
    )
}
export default OrdersContainer