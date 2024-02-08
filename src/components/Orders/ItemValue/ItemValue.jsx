import './ItemValue.css'

const ItemValue = ({text, value}) =>{

return (
    <div>
        <span>{text}</span>
        <span className="item-value"> {value}</span>
    </div>
)}

export default ItemValue