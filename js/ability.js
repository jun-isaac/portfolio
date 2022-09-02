// ability 차트 영역
const chart1 = document.querySelector('.doughnut1');
const chart2 = document.querySelector('.doughnut2');
const chart3 = document.querySelector('.doughnut3');
const chart4 = document.querySelector('.doughnut4');
const chart5 = document.querySelector('.doughnut5');
const chart6 = document.querySelector('.doughnut6');
const chart7 = document.querySelector('.doughnut7');

const makeChart = (percent, classname, color) => {
  let i = 1;
  let chartFn = setInterval(function () {
    if (i < percent) {
      colorFn(i, classname, color);
      i++;
    } else {
      clearInterval(chartFn);
    }
  }, 10);
}

const colorFn = (i, classname, color) => {
  classname.style.background = "conic-gradient(" + color + " 0% " + i + "%, #1E3799 " + i + "% 100%)";
}


const replay = () => {
  makeChart(70, chart1, '#ffffff');
  makeChart(68, chart2, '#ffffff');
  makeChart(84, chart3, '#ffffff');
  makeChart(75, chart4, '#ffffff');
  makeChart(87, chart5, '#ffffff');
  makeChart(85, chart6, '#ffffff');
  makeChart(80, chart7, '#ffffff');
}

makeChart(70, chart1, '#ffffff');
makeChart(68, chart2, '#ffffff');
makeChart(84, chart3, '#ffffff');
makeChart(75, chart4, '#ffffff');
makeChart(87, chart5, '#ffffff');
makeChart(85, chart6, '#ffffff');
makeChart(80, chart7, '#ffffff');