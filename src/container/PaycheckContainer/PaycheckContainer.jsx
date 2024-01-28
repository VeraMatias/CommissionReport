import ButtonNew from '../../components/General/ButtonNew/ButtonNew'
import PaycheckCard from '../../components/Paycheck/PaycheckCard/PaycheckCard'
import './PaycheckContainer.css'


const PaycheckContainer =  () => {

    return(
        <>
            <div className="position-container">
                <div className="container-paycheck">
                    <PaycheckCard month={'02'} year={'2023'} amount={'$ 800.000,00'}/>
                    <PaycheckCard month={'02'} year={'2023'} amount={'$ 800.000,00'}/>
                    <PaycheckCard month={'02'} year={'2023'} amount={'$ 800.000,00'}/>
                    <PaycheckCard month={'02'} year={'2023'} amount={'$ 800.000,00'}/>
                    <PaycheckCard month={'02'} year={'2023'} amount={'$ 800.000,00'}/>
                    <PaycheckCard month={'02'} year={'2023'} amount={'$ 800.000,00'}/>
                    <PaycheckCard month={'02'} year={'2023'} amount={'$ 800.000,00'}/>
                    <PaycheckCard month={'02'} year={'2023'} amount={'$ 800.000,00'}/>
                </div>
            </div>
            <ButtonNew/>
        </>
    )
}
export default PaycheckContainer