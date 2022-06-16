import Swiper, { Autoplay } from 'swiper';

const btnSubmitFormContact = document.getElementById("submitFormContact");

btnSubmitFormContact.addEventListener("click", () => {
    const form = document.forms["formContact"];

    if (form.body.value.length <= 0)
    {
        alert("Empty message!");
        return;
    }

    try
    {
        const subject = `From: ${form.from.value}`;
        const body = `
<h4>Request: ${form.request.value}</h4>

<p>${form.body.value}</p>
`;
        window.open(`mailto:castiglia.daniele@outlook.com?subject=${subject}&body=${body}`);
    }
    catch (ex)
    {
        alert("Error on sending email!");
    }

    form.reset();
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

const sectionTitles = document.querySelectorAll(".show-hidden");
sectionTitles.forEach(el => {
    const hiddenContent = el.nextElementSibling;

    el.addEventListener("click", () => {
        const style = getComputedStyle(hiddenContent);
        if (style.display === "none")
        {
            hiddenContent.style.display = "block";
            el.classList.remove("normal-position");
            el.classList.add("rotate");
        }
        else
        {
            hiddenContent.style.display = "none";
            el.classList.add("normal-position");
            el.classList.remove("rotate");
        }
    });
});