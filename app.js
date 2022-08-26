(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function () {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    [...document.querySelectorAll(".nav-btn")].forEach(button => {
        button.addEventListener("click", function () {
            document.querySelector(".active-nav-btn").classList.remove("active-nav-btn");
            this.classList.add("active-nav-btn");
            document.querySelector(".current-nav-tab").classList.add("sleep-nav-tab")
            document.querySelector(".current-nav-tab").classList.remove("current-nav-tab");
            document.getElementById(button.dataset.id).classList.add("current-nav-tab");
            document.getElementById(button.dataset.id).classList.remove("sleep-nav-tab");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dots");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}