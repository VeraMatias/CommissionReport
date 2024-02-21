import './ItemDate.css'
import { useGeneral } from '../../../hooks/useGeneral'

const ItemDate = ({text, value}) =>{

    const { getDate } = useGeneral()
return (
    <div className='container-item-date'>
        <span>{text} </span>
        <span className="item-date">
            {value != null ?
                    getDate(value)
            : null} 
        </span>
    </div>
)}

export default ItemDate