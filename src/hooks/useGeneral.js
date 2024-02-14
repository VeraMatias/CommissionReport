import { Timestamp } from 'firebase/firestore';

export const useGeneral = () =>{
    const formattedNumber = (number) =>{
        try{
        return number.toLocaleString(
        'es-AR', 
        {
            style: 'currency',
            currency: 'ARS', 
            minimumFractionDigits: 2, 
            maximumFractionDigits: 2, 
        })
    } catch {
        return null
    }
    }

    const getMonth = (timestamp) => {
        const date = new Date(timestamp.seconds * 1000);
        const month = date.getMonth() + 1;
        return month < 10 ? `0${month}` : month;
    }
    
    const getYear = (timestamp) =>{
        const date = new Date(timestamp.seconds * 1000);
        const year = date.getFullYear();
        return year;
    }

    const getDay = (timestamp) =>{
        const date = new Date(timestamp.seconds * 1000);
        const day = date.getDate();
        return day < 10 ? `0${day}` : day;
    }

    const getDate = (timestamp) =>{
        return `${getDay(timestamp)}/${getMonth(timestamp)}/${getYear(timestamp)}`;
    }

    const getCurrentTimeStamp = () =>{
        const currentDate = new Date();
        return Timestamp.fromDate(currentDate);
    }

    
    return {formattedNumber, getMonth, getYear, getDate, getCurrentTimeStamp}
}