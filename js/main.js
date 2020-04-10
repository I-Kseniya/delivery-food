const cartButton = document.querySelector("#cart-button");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");

cartButton.addEventListener("click", toggleModal);
//   modal.classList.add("is-open");
close.addEventListener("click", toggleModal);
    // modal.classList.remove("is-open");


function toggleModal() {
    modal.classList.toggle("is-open");
};

new WOW().init();
