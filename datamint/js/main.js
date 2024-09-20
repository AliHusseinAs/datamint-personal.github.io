function loadCSVAndChart() {

    Papa.parse("/assets/BistBankalar.csv", {
        download: true,
        header: true,
        complete: function(results) {
            const data = results.data;


            const dates = [];
            const closingPrices = [];

            data.forEach(row => {
                
                dates.push(row.history);
                closingPrices.push(parseFloat(row.close_price));
            });

            
            const ctx = document.getElementById('bistBankalar').getContext('2d');
            new Chart(ctx, {
                type: 'line',
                data: {
                    labels: dates, 
                    datasets: [{
                        label: 'BIST Bankalar',
                        data: closingPrices, 
                        backgroundColor: 'rgba(75, 192, 192, 0.2)',
                        borderColor: 'rgba(75, 192, 192, 1)',
                        borderWidth: 1,
                        fill: false
                    }]
                },
                options: {
                    scales: {
                        x: {
                            title: {
                                display: true,
                                text: 'Date'
                            }
                        },
                        y: {
                            title: {
                                display: true,
                                text: 'Closing Price'
                            }
                        }
                    }
                }
            });
        }
    });
}


loadCSVAndChart();