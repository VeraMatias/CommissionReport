import './OrderCard.css'

const OrderCard = ({paid, CPQ, invoice, amount, IVA, commission}) =>{

return (
    <div class="order-card">
        <div class="order-card-content">
            <div class= {paid ? "color-status paid" : "color-status unpaid"}></div>
            <h2 class="card-title">{CPQ} <i class='bx bx-pencil edit' ></i></h2>
            <div class="cart-info">
                <div className="cart-info-item">
                    <span>Factura:</span>
                    <span class="item-value"> {invoice}</span>
                </div>

                <div className="cart-info-item">
                    <span>Monto:</span>
                    <span class="item-value"> $ {amount}</span>
                </div>

                <div className="cart-info-item">
                    <span>IVA:</span>
                    <span class="item-value"> {IVA}</span>
                </div>

                <div className="cart-info-item">
                    <span>Comisión:</span>
                    <span class="item-value"> $ {commission}</span>
                </div>
            </div>
        </div>
    </div>
)
}

export default OrderCard