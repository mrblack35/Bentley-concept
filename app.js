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

//Mobile menu button to open/close sub items
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

//Add event listener to circular buttons. Add/remove active class to expand associated section
const spots = document.querySelectorAll(".ct-spot");
const sections = document.querySelectorAll(".ct-section");

spots.forEach((spot, spotIndx) => {

    spot.addEventListener("click", function (e) {

        console.log(e);
        spotColourChange(e);

        sections.forEach((section, sectIndx) => {

            if (spotIndx !== sectIndx) {
                sections[sectIndx].classList.remove("active");
            } else {
                sections[sectIndx].classList.toggle("active");
            }
        })
    });
})

//section close button
const closeBtn = document.querySelectorAll('.ct-close-btn');

closeBtn.forEach((btn) => {
    btn.addEventListener('click', function(e) {
        sections.forEach((sect) => {
            sect.classList.remove("active");
        })
        spotColourChange(e);
        console.log(e);
    })
})

//function to change the colour of circular buttons to show whether it's active or not
function spotColourChange (e) {
    let targetParent = e.target.parentElement;
    console.log(targetParent);
    for (let i = 0; i < spots.length; i++) {
        let spotParent = spots[i];
        let spotChildren = spots[i].children;
        for (let j = 0; j < spotChildren.length; j++) {
            
            let fillColour = spotChildren[j].getAttribute("fill"); 
            let strokeColour = spotChildren[j].getAttribute("stroke");
 
            if (spotParent !== targetParent && fillColour === "red") {
                spotChildren[j].setAttribute("fill", "white");
            } else if (spotParent == targetParent && fillColour === "white") {
                spotChildren[j].setAttribute("fill", "red");
            } else if (spotParent == targetParent && fillColour === "red") {
                spotChildren[j].setAttribute("fill", "white");
            }
            
            if (spotParent !== targetParent && strokeColour === "red") {
                spotChildren[j].setAttribute("stroke", "white");
            } else if (spotParent == targetParent && strokeColour === "white") {
                spotChildren[j].setAttribute("stroke", "red");
            } else if (spotParent == targetParent && strokeColour === "red") {
                spotChildren[j].setAttribute("stroke", "white");
            }

            /* spotParent !== targetParent ? resetSiblings() : changeTarget()

            function resetSiblings() {
                fillColour === "red"
                    ? spotChildren[j].setAttribute("fill", "white")
                    : spotChildren[j].setAttribute("fill", "red")
                strokeColour === "red"
                    ? spotChildren[j].setAttribute("stroke", "white")
                    : spotChildren[j].setAttribute("stroke", "red")
            }

            function changeTarget() {
                fillColour === "white"
                    ? spotChildren[j].setAttribute("fill", "red")
                    : spotChildren[j].setAttribute("fill", "white")
                strokeColour === "white"
                    ? spotChildren[j].setAttribute("stroke", "red")
                    : spotChildren[j].setAttribute("stroke", "white")
            } */
        }
    }
}

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