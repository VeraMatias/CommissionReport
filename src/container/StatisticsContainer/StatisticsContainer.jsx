import './StatisticsContainer.css'

import KPICard from '../../components/Dashboard/KPICard/KPICard'
import { useState, useEffect } from 'react'
import { useFirestore } from '../../hooks/useFirestore'
import { useGeneral } from '../../hooks/useGeneral'
import { useLine } from '../../hooks/useLine'

import { Line } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler} from 'chart.js'
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Filler, Title, Tooltip, Legend)

const StatisticsContainer =  () => {

    const [dataKPIs, setDataKPIs] = useState({ totalSales: [], totalPaycheck: [], countSales: [] });
    const [dataLine, setDataLine] = useState();

    const { getStatistics } = useFirestore()
    const { formattedNumber } = useGeneral()
    const { makeData, makeDataCount, options } = useLine()

    useEffect(() =>{
        getStatistics(setDataKPIs, setDataLine);
    },[])

    return(
        <div className="container-statistics">
            {dataKPIs ? 
            <>
                <div className="container-kpis">
                    <KPICard color={'green'} value={formattedNumber((dataKPIs.totalSales))} text={'Ventas Totales'}/>
                    <KPICard color={'purple'} value={formattedNumber((dataKPIs.totalPaycheck))} text={'Comisiones Pagadas'}/>
                    <KPICard color={'red'} value={(dataKPIs.countSales)} text={'Cantidad de Ventas'}/>
                </div>
            </>
            :
            null}

            {dataLine ?       
                <div className="container-graph">
                    <Line data={makeData(dataLine)} options={options} className='graphline'/>
                    <Line data={makeDataCount(dataLine)} options={options} className='graphline-count'/>
                </div>
            :
            null}   
        </div>
    )
}
export default StatisticsContainer