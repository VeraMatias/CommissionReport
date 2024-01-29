
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

    return {formattedNumber}
}