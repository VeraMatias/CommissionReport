import './KPICard.css'

const KPICard = ({color, value, text}) =>{

return (
    <div className= {`kpi-card ${color}`}>
        <span className="card-value">{value} </span>
        <span className="card-text">{text}</span>
        <i className="bx bxs-cart icon"></i>
    </div>
)
}

export default KPICard