import Swiper, { Autoplay } from 'swiper';

const togglers = document.querySelectorAll(".pulsate");
const slides = document.querySelectorAll(".slide");
const main = document.querySelector("main");

togglers.forEach((toggler, index) => {
    toggler.addEventListener("click", () => {
        console.log("qui");
        slides.forEach(slide => slide.classList.remove("active"));
        slides[index].classList.add("visited");

        if ((index + 1) < slides.length) {
            slides[index + 1].classList.add("active");
            if (slides[index + 1].classList.contains("myself"))
            {
                main.classList.add("show-myinfo");
            }

            setTimeout(() => {
                slides[index].parentElement.removeChild(slides[index]);

                if (slides[index + 1].classList.contains("myself") && window.innerWidth < 576)
                {
                    slides[index + 1].style.height = "auto";
                }
            }, 1000);
        }
    });
});

new Swiper(".swiper", {
    loop: true,
    mode:'horizontal',
    slidesPerView: 3,
    spaceBetween: 20,
    modules: [Autoplay],
    freeMode: true,
    grabCursor: true,
    freeModeMomentum: false,
    speed: 1500,
    breakpoints: {
        768: {
            slidesPerView: 4
        },
        1360: {
            slidesPerView: 6
        }
    },
    autoplay: {
        delay: 1,
        disableOnInteraction: false
    }
});