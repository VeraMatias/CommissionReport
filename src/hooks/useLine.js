
export const useLine = (order) =>{

    const makeData = (data) => {
        const dataForLine = {
            labels: data.labels,
            datasets: [
            {
                label: "Monto de Ventas",
                data: data.ordersValues,
                borderColor: "#0b6325",
                tension: 0.5,
            },
            {
                label: "Comisiones Cobradas",
                data: data.paychecksValues,
                borderColor: "#886ab5",
                tension: 0.5,
            },
            ]
        };
        return dataForLine
    }
    
    const makeDataCount = (data) => {
        const dataForLine = {
            labels: data.labels,
            datasets: [
            {
                label: "Cantidad de Ventas",
                data: data.ordersCountValues,
                borderColor: "#a83b3b",
                tension: 0.5,
            },
            ]
        };
        return dataForLine
    }

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
        },
    };
    
    return {makeData, makeDataCount, options}
}