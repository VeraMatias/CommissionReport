import './Footer.css'

const Footer = () =>{

return (
    <footer className='container-footer'>
        <div className="main-information">
            <a href="https://github.com/VeraMatias" target='blank' className='social-icon' > <img src="/img/Logo.png" alt="imagen logo" className='information-logo'/> </a>
            <p>Matías Vera</p>
        </div>
        <div className="social-information">
            <a href="https://github.com/VeraMatias" target='blank' className='social-icon' > <i class='bx bxl-github' ></i> </a>
            <a href="mailto:veramatias93@hotmail.com" className='social-icon'><i class='bx bxs-envelope'></i></a>
        </div>
    </footer>
)
}

export default Footer