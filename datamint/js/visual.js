'use strict'




async function getData(bankId, year){

    try{
        const url = `http://localhost:1000/api/public/getCashAndCashEq/${bankId}/${year}`;
        const res = await fetch(url);

        if (!res.ok){
            throw new Error(`Error`);

        }

        const data = await res.json();

        // console.log(data);
        // document.getElementById("data").innerHTML = data;

        return data;

    } catch(error){
        return error;
        // console.log(error);
    }
}

const bankId = 7;
const year = 2023;
getData(bankId, year);
getData(bankId, 2023);
getData(bankId, 2022);
getData(7, 2021);
getData(7, 2019);

async function fetchData(bankId) {


    const cash2019 = await getData(bankId, 2019);
    const cash2020 = await getData(bankId, 2020);
    const cash2021 = await getData(bankId, 2021);
    const cash2022 = await getData(bankId, 2022);
    const cash2023 = await getData(bankId, 2023);


    return {
        2019: cash2019,
        2020: cash2020,
        2021: cash2021,
        2022: cash2022,
        2023: cash2023
    };
}

async function renderChart() {

    const cashData = await fetchData(7);


    if (!cashData) {
        console.error("Failed to fetch cash data");
        return;
    }


    const ctx = document.getElementById('cashChart').getContext('2d');


    new Chart(ctx, {
        type: 'line',
        data: {
            labels: Object.keys(cashData), 
            datasets: [{
                label: 'Cash and Cash Equivalents',
                data: Object.values(cashData), 
                borderColor: 'rgba(255, 0, 0, 1)', 
                backgroundColor: 'rgba(255, 0, 0, 0.2)', 
                fill: true,
                tension: 0.4, 
                pointBackgroundColor: 'rgba(255, 0, 0, 1)',
                pointBorderColor: '#fff',
                pointHoverRadius: 5,
                pointRadius: 2
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: true,
                    labels: {
                        color: '#333'
                    }
                }
            },
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Year'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Cash and Cash Equivalents (in USD)'
                    },
                    beginAtZero: true
                }
            }
        }
    });
}



async function renderChart2() {

    const cashDataBank7 = await fetchData(7);
    const cashDataBank6 = await fetchData(6);


    if (!cashDataBank7 || !cashDataBank6) {
        console.error("Failed to fetch cash data for one or both banks");
        return;
    }


    const ctx = document.getElementById('cashChart').getContext('2d');


    new Chart(ctx, {
        type: 'line',
        data: {
            labels: Object.keys(cashDataBank7), 
            datasets: [
                {
                    label: 'Bank 7 - Cash and Cash Equivalents',
                    data: Object.values(cashDataBank7), 
                    borderColor: 'rgba(255, 0, 0, 1)', 
                    backgroundColor: 'rgba(255, 0, 0, 0.2)', 
                    fill: true,
                    tension: 0.4, 
                    pointBackgroundColor: 'rgba(255, 0, 0, 1)',
                    pointBorderColor: '#fff',
                    pointHoverRadius: 5,
                    pointRadius: 2
                },
                {
                    label: 'Bank 6 - Cash and Cash Equivalents',
                    data: Object.values(cashDataBank6), 
                    borderColor: 'rgba(0, 0, 255, 1)', 
                    backgroundColor: 'rgba(0, 0, 255, 0.2)', 
                    fill: true,
                    tension: 0.4, 
                    pointBackgroundColor: 'rgba(0, 0, 255, 1)',
                    pointBorderColor: '#fff',
                    pointHoverRadius: 5,
                    pointRadius: 2
                }
            ]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: true,
                    labels: {
                        color: '#333'
                    }
                }
            },
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Year'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Cash and Cash Equivalents (in USD)'
                    },
                    beginAtZero: true
                }
            }
        }
    });
}

renderChart2();