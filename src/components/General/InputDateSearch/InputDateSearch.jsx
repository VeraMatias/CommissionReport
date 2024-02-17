import { useInputSearch } from '../../../hooks/useInputSearch'
import './InputDateSearch.css'

const InputDateSearch = ({setOrdersToShow, orders}) => {

    const {startDate, endDate, handleStartDateChange, handleEndDateChange, filterOrdersByDateRange} = useInputSearch(setOrdersToShow, orders)
    
    return(
        <div className="container-date-search">
            <div className="container-search-input">
                <input className='input-date-search' type="date" value={startDate} onChange={handleStartDateChange} />
                <input className='input-date-search' type="date" value={endDate} onChange={handleEndDateChange} />
                <button className='button-date-search' onClick={filterOrdersByDateRange}><i class='bx bx-search'></i></button>
            </div>
            <span className='search-title'>Busqueda por Fecha</span>
        </div>
    )
}

export default InputDateSearch