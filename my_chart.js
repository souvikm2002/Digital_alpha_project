const ctx = document.getElementById('myChart').getContext('2d');
const earn = document.getElementById('earning').getContext('2d');
const invest = document.getElementById('investors').getContext('2d');
const custo = document.getElementById('customers').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'polarArea',
    data: {
        labels: ['Amazon', 'Google', 'Microsoft', 'Tesla', 'Uber', 'Sprinkler', 'BMW'],
        datasets: [{
            label: 'Market Shares',
            data: [2200, 1010, 789, 1220, 540, 300, 1002],
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(105, 159, 64, 1)'
            ],
        }],
        showLine: true,
        spanGaps: true
    },
    options: {
        responsive: true
    }
});

const earning = new Chart(earn, {
    type: 'bar',
    data: {
        labels: ['Amazon', 'Google', 'Microsoft', 'Tesla', 'Uber', 'Sprinkler', 'BMW'],
        datasets: [{
            label: 'Rates',
            data: [5, -1, 3, 9, 2, 3, 2.2],
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
        }],
        showLine: true,
        spanGaps: true
    },
    options: {
        responsive:true,
    }
});

const investors = new Chart(invest, {
    type: 'radar',
    data: {
        labels: ['Amazon', 'Google', 'Microsoft', 'Tesla', 'Uber', 'Sprinkler', 'BMW'],
        datasets: [{
            label: 'Investors',
            data: [5000, 3990, 4500, 6800, 2546, 3000, 5500],
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
        }],
        showLine: true,
        spanGaps: true
    },
    options: {
        responsive: true,
        elements: {
          line: {
            borderWidth: 3
          }
        }
      },
});

const customers = new Chart(custo, {
    type: 'line',
    data: {
        labels: ['Amazon', 'Google', 'Microsoft', 'Tesla', 'Uber', 'Sprinkler', 'BMW'],
        datasets: [{
            label: 'Happy Customers',
            data: [500, 650, 340, 940, 250, 360, 420],
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
        }],
        showLine: true,
        spanGaps: true
    },
    options: {
        responsive:true,
    }
});
// 'Shares', 'Rates', 'Investors', 'Happy customers'

const push1 = document.getElementById('push1');
push1.addEventListener('click', pushValueChart1);

function pushValueChart1(){
    const pushValue = document.getElementById('pushvalue1');
    const pushLabel = document.getElementById('pushlabel1');
    myChart.data.datasets[0].data.push(pushValue.value);
    myChart.data.labels.push(pushLabel.value);
    myChart.update();
}

//  ------------------------------------------

const push2 = document.getElementById('push2');
push2.addEventListener('click', pushValueChart2);

function pushValueChart2(){
    const pushValue = document.getElementById('pushvalue2');
    const pushLabel = document.getElementById('pushlabel2');
    earning.data.datasets[0].data.push(pushValue.value);
    earning.data.labels.push(pushLabel.value);
    earning.update();
}

//  ------------------------------------------

const push3 = document.getElementById('push3');
push3.addEventListener('click', pushValueChart3);

function pushValueChart3(){
    const pushValue = document.getElementById('pushvalue3');
    const pushLabel = document.getElementById('pushlabel3');
    investors.data.datasets[0].data.push(pushValue.value);
    investors.data.labels.push(pushLabel.value);
    investors.update();
}

//  ------------------------------------------

const push4 = document.getElementById('push4');
push4.addEventListener('click', pushValueChart4);

function pushValueChart4(){
    const pushValue = document.getElementById('pushvalue4');
    const pushLabel = document.getElementById('pushlabel4');
    customers.data.datasets[0].data.push(pushValue.value);
    customers.data.labels.push(pushLabel.value);
    customers.update();
}