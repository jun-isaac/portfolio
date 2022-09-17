// 풀 스크린
$(document).ready(function () {

  $('#fullpage').fullpage({
    //options here
    responsiveWidth: 500, // fullpage 해제 분기점
    scrollOverflow: true, // 부분 스크롤 영역 지정(.fp-auto-height-responsive)
    anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'fifthPage', 'sixthPage'],

    // 이벤트 methods
    // 페이지 진입시(액션)
    afterLoad: function (anchorLink, index) {
      // console.log(index);

      // 3번째 페이지에 들어오면
      if (index === 3) {
        replay();
      } else {

      }
    },

  });
});

// aos 라이브러리
AOS.init();


// ability 차트 영역
const chart1 = document.querySelector('.doughnut1');
const chart2 = document.querySelector('.doughnut2');
const chart3 = document.querySelector('.doughnut3');
const chart4 = document.querySelector('.doughnut4');
const chart5 = document.querySelector('.doughnut5');
const chart6 = document.querySelector('.doughnut6');
const chart7 = document.querySelector('.doughnut7');
const chart8 = document.querySelector('.doughnut8');

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
  makeChart(74, chart1, '#ffffff');
  makeChart(70, chart2, '#ffffff');
  makeChart(84, chart3, '#ffffff');
  makeChart(75, chart4, '#ffffff');
  makeChart(87, chart5, '#ffffff');
  makeChart(85, chart6, '#ffffff');
  makeChart(80, chart7, '#ffffff');
  makeChart(65, chart8, '#ffffff');
}