console.log('client.js is sourced!');

document.querySelector('button:nth-of-type(5)').onclick = function (event) {
    event.preventDefault();
    
    const numOne = document.getElementById('numOne').value;
    const numTwo = document.getElementById('numTwo').value;
    const operator = '+';

    axios.post('/calculations', { numOne, numTwo, operator })
    .then((response) => {
        document.getElementById('recentResult').innerHTML += `<p>${response.data.result}</p>`;
    })
    .catch((error) => {
      console.error('Error with POST request:', error);
    });
};

function getCalculationHistory() {
    axios.get('/calculations')
      .then((response) => {
        const resultHistory = document.getElementById('resultHistory');
      resultHistory.textContent = response.data;
    })
    .catch((error) => {
      console.error('Error fetching calculation history:', error);
    });
}

getCalculationHistory;

document.querySelector('button:nth-of-type(6)').onclick = function () {
    document.getElementById('numOne').value = '';
    document.getElementById('numTwo').value = '';
};
