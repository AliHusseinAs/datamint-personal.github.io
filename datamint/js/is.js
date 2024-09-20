
const labels = ['2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023'];


const revenueData = [50, 55, 60, 65, 72, 80, 85, 90, 100, 110, 120]; // Revenue growth
const cashData = [40, 45, 48, 52, 58, 63, 68, 72, 78, 85, 92]; // Cash growth
const depositsData = [100, 110, 120, 130, 150, 170, 190, 210, 230, 250, 280]; // Total deposits growth
const loansData = [80, 85, 90, 95, 105, 115, 125, 140, 155, 170, 185]; // Total loans growth


const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
        x: {
            title: {
                display: true,
                text: 'Year',
            }
        },
        y: {
            title: {
                display: true,
                text: 'Value (in millions)',
            }
        }
    }
};


const ctxRevenue = document.getElementById('revenueChart').getContext('2d');
const revenueChart = new Chart(ctxRevenue, {
    type: 'line',
    data: {
        labels: labels,
        datasets: [{
            label: 'Revenue',
            data: revenueData,
            borderColor: 'blue',
            borderWidth: 2,
            fill: false,
        }]
    },
    options: chartOptions
});


const ctxCash = document.getElementById('cashChart').getContext('2d');
const cashChart = new Chart(ctxCash, {
    type: 'line',
    data: {
        labels: labels,
        datasets: [{
            label: 'Cash',
            data: cashData,
            borderColor: 'blue',
            borderWidth: 2,
            fill: false,
        }]
    },
    options: chartOptions
});


const ctxDeposits = document.getElementById('depositsChart').getContext('2d');
const depositsChart = new Chart(ctxDeposits, {
    type: 'line',
    data: {
        labels: labels,
        datasets: [{
            label: 'Total Deposits',
            data: depositsData,
            borderColor: 'blue',
            borderWidth: 2,
            fill: false,
        }]
    },
    options: chartOptions
});


const ctxLoans = document.getElementById('loansChart').getContext('2d');
const loansChart = new Chart(ctxLoans, {
    type: 'line',
    data: {
        labels: labels,
        datasets: [{
            label: 'Total Loans',
            data: loansData,
            borderColor: 'blue',
            borderWidth: 2,
            fill: false,
        }]
    },
    options: chartOptions
});
