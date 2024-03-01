import './ErrorContainer.css'

const ErrorContainer =  () => {

    return(
        <div className="container-error">
            <img src="/img/Error404.png" alt="imagen error" className='error-img'/>
            <h2 className='error-title'>Página no disponible</h2>
        </div>
    )
}
export default ErrorContainer