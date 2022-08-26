// NavBar Code
const openMenuBtn = document.querySelector(".navbar-mobile-wrapper");
const navBarMenu = document.querySelector(".nb-menu-wrapper");
const navMenuItem = document.querySelectorAll(".nb-item");
const navMenuLink = document.querySelectorAll(".nb-link");

openMenuBtn.addEventListener("click", mobileMenu);

function mobileMenu() {
    openMenuBtn.classList.toggle("active");
    navBarMenu.classList.toggle("active");
}

navMenuItem.forEach(n => n.addEventListener("click", closeMenu));
navMenuLink.forEach(n => n.addEventListener("click", closeMenu));
const navMenus = document.querySelectorAll(".nb-item-wrapper");
const arrows = document.querySelectorAll(".nb-arrow");

function closeMenu() {
    navBarMenu.classList.remove("active");
    openMenuBtn.classList.remove("active");

    for(let arrow of arrows) {
        arrow.classList.remove("active");
    }

    for(let navMenu of navMenus) {
        navMenu.style.maxHeight = null;
    // console.log(navMenu.style.maxHeight);
    }
}

const collapseBtn = document.querySelectorAll(".nb-collapsible-btn");

for(let i = 0; i < collapseBtn.length; i++) {
    (function() { 
        collapseBtn[i].addEventListener("click", collapse);
        function collapse() {
            arrows[i].classList.toggle("active");
            console.log(i);
            let item = this.nextElementSibling;
            if (item.style.maxHeight) {
                item.style.maxHeight = null;
            } else {
                item.style.maxHeight = item.scrollHeight + "px";
            }
            // console.log(item.style.maxHeight);
        }
    })(i);
}

//Technology

const spots = document.querySelectorAll(".ct-spot");
const spotFill = document.querySelectorAll(".ct-spot-fill");
const spotStroke = document.querySelectorAll(".ct-spot-stroke");
const section = document.querySelectorAll(".ct-section");

spots.forEach((spot, spotIndx) => {

    spot.addEventListener("click", function () {

        section.forEach((sect, secIndx) => {

            if (spotIndx !== secIndx) {
                section[secIndx].classList.remove("active");
            } else {
                section[secIndx].classList.toggle("active");
            }
        })
    });
})

//Gallery

const slides = document.querySelectorAll(".ga-img-slide");
//
slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${indx * 100}%)`;
});

const nextSlide = document.querySelector(".ga-next-btn");
const dots = document.querySelectorAll(".ga-dot");

let curSlide = 0;

dots[curSlide].style.width = "min(1.5vw, 10px)";
dots[curSlide].style.height = "min(1.5vw, 10px)";

let maxSlide = slides.length - 1;

nextSlide.addEventListener("click", function () {
    // check if current slide is the last and reset current slide
    if  (curSlide === maxSlide) {
        curSlide = 0;
    } else {
        curSlide++;
    }
    // loop through slides and set each slides translateX property to index * 100% 
    slides.forEach((slide, indx) => {
        slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`; // move slide by -100%
        /* console.log(slide.style.transform); */
    })

    dots.forEach((dot) => {
        dot.style.width = "min(.7vw, 4px)";
        dot.style.height = "min(.7vw, 4px)";
    }) 

    dots[curSlide].style.width = "min(1.5vw, 10px)";
    dots[curSlide].style.height = "min(1.5vw, 10px)";
        
})

const prevSlide = document.querySelector(".ga-prev-btn");

prevSlide.addEventListener("click", function () {
    // check if current slide is the first and reset current slide to last
    if (curSlide === 0) {
        curSlide = maxSlide;
    } else {
        curSlide--;
    }

    slides.forEach((slide, indx) => {
        slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`; // move slide by 100%
        /* console.log(slide.style.transform); */
    });

    dots.forEach((dot) => {
        dot.style.width = "min(.7vw, 4px)";
        dot.style.height = "min(.7vw, 4px)";
    }) 

    dots[curSlide].style.width = "min(1.5vw, 10px)";
    dots[curSlide].style.height = "min(1.5vw, 10px)";
});