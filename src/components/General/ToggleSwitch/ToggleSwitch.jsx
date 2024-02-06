import './ToggleSwitch.css'

const ToggleSwitch = ({isChecked, name, onClick}) =>{

return (
    <div className="wrapper-switch">
        <div className="checkbox_item citem_1">
            <label className="checkbox_wrap">
                <input type="checkbox" name="checkbox" className="checkbox_inp" onClick={onClick} checked = {isChecked}/>
                <span className="checkbox_mark" ></span>
            </label>
        </div>
        <span className='checkbox-name'>{name}</span>
    </div>
)}

export default ToggleSwitch