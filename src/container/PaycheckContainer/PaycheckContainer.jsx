import { useState, useEffect } from 'react'
import ButtonNew from '../../components/General/ButtonNew/ButtonNew'
import PaycheckCard from '../../components/Paycheck/PaycheckCard/PaycheckCard'
import './PaycheckContainer.css'
import { useFirestore } from '../../hooks/useFirestore'
import { useGeneral } from '../../hooks/useGeneral'

const PaycheckContainer =  () => {

    const [paychecks, setPaychecks] = useState()
    const { getCollection } = useFirestore()
    const { getMonth, getYear } = useGeneral()

    useEffect(() =>{
        getCollection('paycheck', (data) => {
            const sortedPaychecks = data.sort((a, b) => b.date - a.date);
            setPaychecks(sortedPaychecks);
        });
    },[])

    return(
        <>
            <div className="position-container">
                <div className="container-paycheck">
                    {paychecks ?
                    paychecks.map( paycheck => (
                        <PaycheckCard 
                        key={paycheck.id}
                        month={getMonth(paycheck.date)} 
                        year={getYear(paycheck.date)} 
                        amount={paycheck.amount}/>
                    ))
                    :
                    null}
                </div>
            </div>
            <ButtonNew url={'/paycheck/create'}/>
        </>
    )
}
export default PaycheckContainer