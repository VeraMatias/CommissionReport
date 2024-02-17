import { useState } from 'react'

export const useInputSearch = (setOrdersToShow, orders) =>{

    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    const handleStartDateChange = (e) => { setStartDate(e.target.value); };

    const handleEndDateChange = (e) => { setEndDate(e.target.value); };

    const filterOrdersByDateRange = () => {
        if (startDate && endDate) {
            const filteredOrders = orders.filter(order => {
                const orderDate = new Date(order.created_date.seconds *1000);
                const start = new Date(startDate);
                start.setDate(start.getDate() + 1);
                start.setHours(0, 0, 0, 0);

                const end = new Date(endDate);
                end.setDate(end.getDate() + 1);
                end.setHours(23, 59, 59, 0);

                return orderDate >= start && orderDate <= end;
            });
            setOrdersToShow(filteredOrders);
        }
    };

    const filterByCPQ = (e) => { setOrdersToShow(orders.filter(order => String(order.cpq).startsWith(e.target.value))) }

    const filterByInvoice = (e) => { setOrdersToShow(orders.filter(order => String(order.invoice).startsWith(e.target.value))) }

    return {startDate, endDate, handleStartDateChange, handleEndDateChange, filterOrdersByDateRange, filterByCPQ, filterByInvoice}
}