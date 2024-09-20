const labels = ['2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023'];

        
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

        
        const revenueData = {
            labels: labels,
            datasets: [
                {
                    label: 'Garanti BBVA',
                    data: [60, 65, 70, 75, 80, 85, 90, 100, 110, 120, 130],
                    borderColor: 'green',
                    borderWidth: 2,
                    fill: false,
                },
                {
                    label: 'Türkiye İş Bankası',
                    data: [55, 60, 68, 72, 78, 82, 88, 95, 105, 115, 125],
                    borderColor: 'blue',
                    borderWidth: 2,
                    fill: false,
                },
                {
                    label: 'Akbank',
                    data: [50, 55, 60, 68, 75, 80, 85, 92, 98, 105, 115],
                    borderColor: 'red',
                    borderWidth: 2,
                    fill: false,
                }
            ]
        };

        
        const cashData = {
            labels: labels,
            datasets: [
                {
                    label: 'Garanti BBVA',
                    data: [50, 55, 60, 66, 70, 75, 80, 85, 90, 100, 110],
                    borderColor: 'green',
                    borderWidth: 2,
                    fill: false,
                },
                {
                    label: 'Türkiye İş Bankası',
                    data: [48, 53, 58, 64, 68, 73, 78, 83, 88, 95, 105],
                    borderColor: 'blue',
                    borderWidth: 2,
                    fill: false,
                },
                {
                    label: 'Akbank',
                    data: [45, 50, 55, 60, 66, 70, 75, 82, 88, 94, 102],
                    borderColor: 'red',
                    borderWidth: 2,
                    fill: false,
                }
            ]
        };

        
        const depositsData = {
            labels: labels,
            datasets: [
                {
                    label: 'Garanti BBVA',
                    data: [200, 220, 240, 260, 280, 310, 340, 370, 400, 450, 480],
                    borderColor: 'green',
                    borderWidth: 2,
                    fill: false,
                },
                {
                    label: 'Türkiye İş Bankası',
                    data: [180, 200, 220, 250, 270, 300, 330, 360, 390, 420, 450],
                    borderColor: 'blue',
                    borderWidth: 2,
                    fill: false,
                },
                {
                    label: 'Akbank',
                    data: [170, 190, 210, 230, 250, 280, 310, 340, 370, 400, 430],
                    borderColor: 'red',
                    borderWidth: 2,
                    fill: false,
                }
            ]
        };

        
        const ctxRevenue = document.getElementById('revenueChart').getContext('2d');
        new Chart(ctxRevenue, {
            type: 'line',
            data: revenueData,
            options: chartOptions
        });

        
        const ctxCash = document.getElementById('cashChart').getContext('2d');
        new Chart(ctxCash, {
            type: 'line',
            data: cashData,
            options: chartOptions
        });

        
        const ctxDeposits = document.getElementById('depositsChart').getContext('2d');
        new Chart(ctxDeposits, {
            type: 'line',
            data: depositsData,
            options: chartOptions
        });