import './DashboardContainer.css'

import KPICard from '../../components/Dashboard/KPICard/KPICard'

const DashboardContainer =  () => {

    return(
        <div className="container-dashboard">
            <KPICard color={'purple'} value={'$ 800.000,00'} text={'Balance de Comisiones'}/>
            <KPICard color={'grey-dark'} value={'$ 1.000.000,00'} text={'Comisiones Pendientes'}/>
            <KPICard color={'green'} value={'$ 800.000.000,00'} text={'Ventas Totales'}/>
        </div>
    )
}
export default DashboardContainer