import './Wrapper.css'

const Wrapper = ({children}) => {
    return(
        <div className = 'container-wrapper'>
            {children}
        </div>
    )
}
export default Wrapper