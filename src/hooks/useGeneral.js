
export const useGeneral = () =>{
    const formattedNumber = (number) =>{
    
        return(number.toLocaleString(
        'es-AR', 
        {
            style: 'currency',
            currency: 'ARS', 
            minimumFractionDigits: 2, 
            maximumFractionDigits: 2, 
        })
    )}


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

    
    return {formattedNumber, getMonth, getYear}
}