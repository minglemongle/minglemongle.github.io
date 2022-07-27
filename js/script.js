jQuery(document).ready(function(){

    $(document).ready(function() {
	$('.container--horizontal').pagepiling({
	    menu: null,
        direction: 'horizontal',
        verticalCentered: true,
        sectionsColor: [],
        anchors: [],
        scrollingSpeed: 700,
        easing: 'swing',
        loopBottom: false,
        loopTop: false,
        css3: true,
        menu: '.menu',
	   anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7', 'page8', 'page9', 'page10'],
        navigation: {
            'textColor': '#000',
            'bulletsColor': '#000',
            'position': 'right',
            'tooltips': ['section1', 'section2', 'section3', 'section4', 'section5', 'section6', 'section7', 'section8', 'section9', 'section10']
        },
       	normalScrollElements: null,
        normalScrollElementTouchThreshold: 5,
        touchSensitivity: 5,
        keyboardScrolling: true,
        sectionSelector: '.section',
        animateAnchor: false,

		//events
		onLeave: function(index, nextIndex, direction){},
		afterLoad: function(anchorLink, index){},
		afterRender: function(){},
	});
});
   var filtered = false;

    $('.js-filter').on('click', function(){
      if (filtered === false) {
        $('.filtering').slick('slickFilter',':even');
        $(this).text('Unfilter Slides');
        filtered = true;
      } else {
        $('.filtering').slick('slickUnfilter');
        $(this).text('Filter Slides');
        filtered = false;
      }
    }); 
    
    
    const slides = document.querySelector('.slides');
    const slideImg = document.querySelectorAll('.slides li');
    let currentIdx = 0;
    const slideCount = slideImg.length;
    const prev = document.querySelector('.prev');
    const next = document.querySelector('.next');
    const slideWidth = 300;
    const slideMargin = 150;

    slides.style.width = (slideWidth + slideMargin) * slideCount + 'px';

    function moveSlide(num) {
      slides.style.left = -num * 1620 + 'px';
      currentIdx = num;
    }

    prev.addEventListener('click', function () {
      if (currentIdx !== 0) moveSlide(currentIdx - 1);
    });

    next.addEventListener('click', function () {
      if (currentIdx !== slideCount - 13) {
        moveSlide(currentIdx + 1);
      }
    });
    
    
});
	