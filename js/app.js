  var slideIndex = 1;
  setInterval(function(){
    document.getElementById('radio' + slideIndex).checked = true;
    slideIndex++;
    if(slideIndex > 4){
      slideIndex = 1;
    }
    showSlides(slideIndex);
  }, 6000);

  function plusSlides(n) {
    showSlides(slideIndex += n);
  }


function showSlides(n) {
  var slides = document.getElementsByClassName("slide");
  // panjang array
  // counter = slide.length
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}

  console.log('slide index :'+ slideIndex)

  // console.log('slide :'+ slides[slideIndex-1])

  document.getElementById('radio' + slideIndex).checked = true;
}

let box = document.getElementById('nav-btn'),
    btn = document.querySelector('.hambergur-menu');

btn.addEventListener('click', function () {
  box.classList.toggle('transform');
}, false);

if (matchMedia) {
  const mq = window.matchMedia("(max-width: 900px)");
  mq.addListener(WidthChange);
  WidthChange(mq);

  const mq2 = window.matchMedia("(min-width: 899px)");
  mq2.addListener(WidthChange2);
  WidthChange2(mq2);
}

function WidthChange(mq) {
  if (mq.matches) {
    let toggleBtn = document.querySelector(".nav-link a.dropdown-toggle");
    let toggleBtn2 = document.querySelector(".dropdown-link a.dropdown-toggle");
    toggleBtn.addEventListener('click', (event) => {
      let element = event.target;
      element.classList.toggle('is-active')
      var next = element.nextElementSibling
      next.classList.toggle('is-active')
    })
  
    toggleBtn2.addEventListener('click', (event) => {
      let element = event.target;
      element.classList.toggle('is-active')
      var next = element.nextElementSibling
      next.classList.toggle('is-active')
    })
  }
}

function WidthChange2(mq2) {
    if (mq2.matches) {
      window.onscroll = function() {
        var scroll = document.body.scrollTop;
        console.log(scroll);
  
        if (document.documentElement.scrollTop) {
          document.getElementById("navbar-header").classList.add("navbar-sticky");
          document.getElementById("navbar-header").classList.remove("navbar-fixed");
  
          let textColorBlack = document.getElementsByClassName("text-color-black");    
          for(var i = 0; i < textColorBlack.length; i++) {
            textColorBlack[i].classList.remove('text-color-white');
          }
  
          let textColorWhite = document.getElementsByClassName("text-color-white");
          for(var i = 0; i < textColorWhite.length; i++) {
            textColorWhite[i].classList.add('text-color-black');
          }
          // console.log(scroll);
        } else {
          document.getElementById("navbar-header").classList.remove("navbar-sticky");
          document.getElementById("navbar-header").classList.add("navbar-fixed");
          
          let textColorBlack = document.getElementsByClassName("text-color-black");    
          for(var i = 0; i < textColorBlack.length; i++) {
            textColorBlack[i].classList.add('text-color-white');
          }
  
          let textColorWhite = document.getElementsByClassName("text-color-white");
          for(var i = 0; i < textColorWhite.length; i++) {
            textColorWhite[i].classList.remove('text-color-black');
          }
        }
      }
    }
}

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = document.querySelector(".nav-link-search"); ;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}