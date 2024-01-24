import './MenuItem.css'

import { Link } from 'react-router-dom'

const MenuItem = ({url, icon,  title}) =>{

return (
    <div className="menu-item">
        <div className="menu-text">
            <Link to = {url}>
                <i className = {icon}></i>
                <span className = 'menu-text-title'>{title}</span>
            </Link>
        </div>
    </div>
)
}

export default MenuItem