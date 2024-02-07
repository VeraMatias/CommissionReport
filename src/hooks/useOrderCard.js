import { useState } from 'react'
import { useFirestore } from './useFirestore'

export const useOrderCard = (order) =>{

    const [orderCard, setOrderCard] = useState(order)
    const { updateOverview, updatePaidOrder, updateCommissionedOrder } = useFirestore()

    const calculateCommission = (orderCard) =>{
        return ((orderCard.amount/(orderCard.IVA/100+1))*orderCard.commission/100)
    }

    const handlePaidChange = (paid, idDoc) =>{
        const valordeComision = calculateCommission(orderCard)

        if (paid){
            updateOverview('balance', false, valordeComision)
            updateOverview('pending', true, valordeComision)
            updatePaidOrder(idDoc, false, setOrderCard)
        }else{
            updateOverview('balance', true, valordeComision)
            updateOverview('pending', false, valordeComision)
            updatePaidOrder(idDoc, true, setOrderCard)
        }
    }

    const handleCommissionedChange = (commisioned, idDoc) =>{

        if (commisioned){
            updateCommissionedOrder(idDoc, false, setOrderCard)
        }else{
            updateCommissionedOrder(idDoc, true, setOrderCard)
        }
    }
    
    return {orderCard, calculateCommission, handlePaidChange, handleCommissionedChange}
}