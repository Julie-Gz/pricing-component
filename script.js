"use strict"
// Variables
const toggleBtn = document.querySelector(".toggle");
const toggleSlider = document.querySelector(".toggle-btn--circle");
const subscriptionPrices = document.querySelectorAll(".subscription-price");
const monthlyPrices = document.querySelectorAll(".monthly-price");
const annualPrices = document.querySelectorAll(".annual-price");

toggleBtn.addEventListener("click", () => {
    toggleBtn.classList.toggle("active");
    toggleSlider.classList.toggle("active");

    for (let i = 0; i < subscriptionPrices.length; i++) {
        monthlyPrices[i].classList.toggle("hide");
        annualPrices[i].classList.toggle("hide");
    }

})