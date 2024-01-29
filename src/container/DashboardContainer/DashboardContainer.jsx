import './DashboardContainer.css'

import KPICard from '../../components/Dashboard/KPICard/KPICard'
import { useState, useEffect } from 'react'
import { useFirestore } from '../../hooks/useFirestore'
import { useGeneral } from '../../hooks/useGeneral'

const DashboardContainer =  () => {

    const [data, setData] = useState()
    const { getCollection } = useFirestore()
    const { formattedNumber } = useGeneral()

    useEffect(() =>{
        getCollection('overview', setData);
    },[])

    return(
        <div className="container-dashboard">
            {data ? 
            <>
                <KPICard color={'purple'} value={formattedNumber(data[0].balance)} text={'Balance de Comisiones'}/>
                <KPICard color={'grey-dark'} value={formattedNumber(data[0].pending)} text={'Comisiones Pendientes'}/>
                <KPICard color={'green'} value={formattedNumber(data[0].sales)} text={'Ventas Totales'}/>
            </>
            :
            null}
        </div>
    )
}
export default DashboardContainer