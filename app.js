(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    [...document.querySelectorAll(".nav-btn")].forEach(button => {
        button.addEventListener("click", function() {
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