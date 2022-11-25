import data from './data.json' assert{type:'json'};

let chartBarsContainer = document.querySelector('.chart_bars-container');

data.forEach(element =>{
    chartBarsContainer.innerHTML +=`
    <div class="chart_bar">
          <div class="chart_bar_label">$${element.amount}</div>
          <div class="chart_bar_day">${element.day}</div>
    </div>`

});

let bars =  document.querySelectorAll('.chart_bar');
bars = [...bars]

bars.forEach(bar =>{
    bar.addEventListener('mouseover', event=>{
        let labelElement = event.target.childNodes[1];
        labelElement.style.display = 'block';
        
    });
    bar.addEventListener('mouseout', event =>{
        let labelElement = event.target.childNodes[1];
        labelElement.style.display = 'none';

    })

})