import './Navbar.css'

import MenuItem from '../MenuItem/MenuItem'

const Navbar = () =>{

return (
    <nav>
        <MenuItem url = '/dashboard' icon = 'bx bxs-dashboard' title = 'Dashboard'/>
        <MenuItem url = '/orders' icon = 'bx bx-purchase-tag-alt' title = 'Ventas'/>
        <MenuItem url = '/paycheck' icon = 'bx bx-receipt' title = 'Recibos'/>
        <MenuItem url = '/statistics' icon = 'bx bx-stats' title = 'Estadisticas'/>
    </nav>
)
}

export default Navbar