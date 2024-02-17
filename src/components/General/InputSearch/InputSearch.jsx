import { useInputSearch } from '../../../hooks/useInputSearch'
import './InputSearch.css'

const InputSearch = ({setOrdersToShow, orders, title, fieldName}) => {

    const { filterByCPQ, filterByInvoice } = useInputSearch(setOrdersToShow, orders)

    return(
        <div className="container-search">
            <input id="search" type="search" className='input-search' placeholder="Buscar..." maxLength={10} 
            onChange={fieldName === 'cpq' ? filterByCPQ : filterByInvoice}/>
            <span className='search-title'>{title}</span>
        </div>
    )
}

export default InputSearch