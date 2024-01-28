import { Link } from 'react-router-dom'
import './ButtonNew.css'

const ButtonNew = ({url}) =>{

return (
    <Link to={url}> 
        <button className="button-new">
            <i className='bx bx-plus button-new-symbol'></i>
        </button>
    </Link>

)
}

export default ButtonNew