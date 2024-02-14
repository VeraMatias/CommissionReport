import { useState } from 'react'
import { useFirestore } from './useFirestore'

export const useOrderCard = (order) =>{

    const [orderCard, setOrderCard] = useState(order)
    const { updatePaidOrder, updateCommissionedOrder } = useFirestore()

    const calculateCommission = (orderCard) =>{
        return ((orderCard.amount/(orderCard.IVA/100+1))*orderCard.commission/100)
    }

    const handlePaidChange = (paid, idDoc) =>{
        updatePaidOrder(idDoc, paid ? false : true, setOrderCard) 
    }

    const handleCommissionedChange = (commisioned, idDoc) =>{
        updateCommissionedOrder(idDoc, commisioned ? false : true, setOrderCard)
    }
    
    return {orderCard, calculateCommission, handlePaidChange, handleCommissionedChange}
}