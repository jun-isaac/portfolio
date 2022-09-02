// 풀 스크린
$(document).ready(function () {

  $('#fullpage').fullpage({
    //options here
    responsiveWidth: 500, // fullpage 해제 분기점
    scrollOverflow: true, // 부분 스크롤 영역 지정(.fp-auto-height-responsive)
    anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'fifthPage', 'sixthPage'],
  });
});

// aos 라이브러리
AOS.init();