import data from './data.json' assert{type: 'json'};

let chartBarsContainer = document.querySelector('.chart_bars-container');
let values = []

data.forEach(element => {
    values.push(element.amount)
    chartBarsContainer.innerHTML += `
    <div class="chart_bar">
          <div class="chart_bar_label">$${element.amount}</div>
          <div class="chart_bar_day">${element.day}</div>
    </div>`

});
console.log(values);
let alturaMaxBar = 150;
let maxValue = Math.max(...values);
console.log(maxValue);


let bars = document.querySelectorAll('.chart_bar');
bars = [...bars]

bars.forEach(bar => {

    let nuevoValor = parseFloat(bar.childNodes[1].innerText.slice(1))

    let alturaActual = (nuevoValor * alturaMaxBar) / maxValue

    bar.style.height = `${alturaActual}px`

    bar.addEventListener('mouseover', event => {
        let labelElement = event.target.childNodes[1];
        labelElement.style.display = 'block';

    });
    bar.addEventListener('mouseout', event => {
        let labelElement = event.target.childNodes[1];
        labelElement.style.display = 'none';

    })

})