document.addEventListener("DOMContentLoaded", function () {
    var ctx1 = document.getElementById('milesChart').getContext('2d');
    var milesChart = new Chart(ctx1, {
        type: 'bar',
        data: {
            labels: ['1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM'],
            datasets: [{
                label: 'Miles',
                data: [157, 200, 250, 300, 200, 150, 100],
                backgroundColor: '#36A2EB'
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    var ctx2 = document.getElementById('carChart').getContext('2d');
    var carChart = new Chart(ctx2, {
        type: 'line',
        data: {
            labels: ['7 AM', '9 AM', '11 AM', '1 PM', '3 PM', '5 PM', '7 PM', '9 PM'],
            datasets: [{
                label: 'Car Statistics',
                data: [50, 60, 70, 80, 60, 50, 40, 30],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    document.querySelectorAll('.percentage').forEach(function(el) {
        var value = el.getAttribute('data-value');
        el.style.color = value > 50 ? 'green' : 'red';
    });
});
