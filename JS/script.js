// document.querySelectorAll('.image-slider img').forEach(images => {
//     images.onclick = () => {
//         var src = images.getAttribute('src');
//         document.querySelector('.main-home-image').src = src;
//     };
// });

const menuBtn = document.getElementById("menu-btn");
const navbar = document.querySelector(".navbar");

// Toggle menu
menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("fa-times");
  navbar.classList.toggle("active");
});

// Close when a nav link is clicked
document.querySelectorAll('.navbar a').forEach(link => {
  link.addEventListener("click", () => {
    navbar.classList.remove("active");
    menuBtn.classList.remove("fa-times");
  });
});

// Close when clicking outside the navbar
document.addEventListener("click", (e) => {
  if (!navbar.contains(e.target) && !menuBtn.contains(e.target)) {
    navbar.classList.remove("active");
    menuBtn.classList.remove("fa-times");
  }
});


var swiper = new Swiper('.review-slider', {
    spaceBetween: 20,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    loop: true,
    grabCursor: true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        }
    },
});