import './PaycheckCard.css'

const PaycheckCard = ({month, year, amount}) =>{

return (
    <div className="container-card">
        <div className="card-paycheck">
            <div className="paycheck-date">
                <span className="date-month">{month}</span>
                <span className="date-year">{year}</span>
            </div>
            <span className="paycheck-amount">{amount}</span>
        </div>
    </div>
)
}

export default PaycheckCard