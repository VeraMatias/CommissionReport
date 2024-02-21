import './ItemValue.css'

const ItemValue = ({text, value}) =>{

return (
    <div className='container-item-value'>
        <span>{text}</span>
        <span className="item-value"> {value}</span>
    </div>
)}

export default ItemValue