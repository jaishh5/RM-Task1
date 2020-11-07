window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");
var Nav = document.getElementById("myNav");
var x = window.matchMedia("(min-width: 992px)")
var sticky = header.offsetTop;

function myFunction(x) {
  if (window.pageYOffset > sticky) {
    Nav.classList.add("bg-black");
    Nav.classList.remove("bg-dark");
  } 
  else {
    Nav.classList.add("bg-dark");
    Nav.classList.remove("bg-black");
  }
}

  $(".menu a").on('click', function(){
    $("html, body").animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000);
  });

  $('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
  });

const toShow= document.querySelectorAll('.show-on-scroll');

observer= new IntersectionObserver((entries)=>{
	entries.forEach(entry=>{
		if(entry.intersectionRatio>0){
			entry.target.classList.add("is-visible");
		}
		else{
			entry.target.classList.remove('is-visible');
		}
	})
})

toShow.forEach(ele=>{
	observer.observe(ele)
	console.log(ele)
})

$(document).ready(function() {
  $('.gallery1').magnificPopup({
    type:'image',
    delegate: 'a',
    gallery: { enabled: true }
  });
});

$(document).ready(function() {
  $('.gallery2').magnificPopup({
    type:'image',
    delegate: 'a',
    gallery: { enabled: true }
  });
});

$(document).ready(function() {
  $('.gallery3').magnificPopup({
    type:'image',
    delegate: 'a',
    gallery: { enabled: true }
  });
});

$(document).ready(function() {
  $('.gallery4').magnificPopup({
    type:'image',
    delegate: 'a',
    gallery: { enabled: true }
  });
});