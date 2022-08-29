$(document).ready(function () {
  
  $('#fullpage').fullpage({
    //options here
    responsiveWidth: 500, // fullpage 해제 분기점
		scrollOverflow: true, // 부분 스크롤 영역 지정(.fp-auto-height-responsive)
		anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'fifthPage', 'sixPage'],
  });

});

AOS.init();