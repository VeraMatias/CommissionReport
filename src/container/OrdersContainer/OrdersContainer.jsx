import './OrdersContainer.css'

import OrderCard from '../../components/Orders/OrderCard/OrderCard'
import ButtonNew from '../../components/General/ButtonNew/ButtonNew'

const OrdersContainer =  () => {

    return(
    <>
        <div className="container-orders">
            <OrderCard paid={true} CPQ={'CPQ-V-4458'} invoice={'5-2026'} amount={'12.000.000,00'} IVA={'10.5'} commission={'75.000,00'}/>
            <OrderCard paid={true} CPQ={'CPQ-V-4458'} invoice={'5-2026'} amount={'12.000.000,00'} IVA={'10.5'} commission={'75.000,00'}/>
            <OrderCard paid={false} CPQ={'CPQ-V-4458'} invoice={'5-2026'} amount={'12.000.000,00'} IVA={'10.5'} commission={'75.000,00'}/>
            <OrderCard paid={true} CPQ={'CPQ-V-4458'} invoice={'5-2026'} amount={'12.000.000,00'} IVA={'10.5'} commission={'75.000,00'}/>
            <OrderCard paid={true} CPQ={'CPQ-V-4458'} invoice={'5-2026'} amount={'12.000.000,00'} IVA={'10.5'} commission={'75.000,00'}/>
            <OrderCard paid={true} CPQ={'CPQ-V-4458'} invoice={'5-2026'} amount={'12.000.000,00'} IVA={'10.5'} commission={'75.000,00'}/>
        </div>
        <ButtonNew/>
    </>
    )
}
export default OrdersContainer