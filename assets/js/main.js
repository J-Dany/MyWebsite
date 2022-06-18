import Swiper, { Autoplay } from 'swiper';

const btnSubmitFormContact = document.getElementById("submitFormContact");
const btnOpenModal = document.getElementById("btnOpenModal");
const successMessage = document.getElementById("successMessage");

btnOpenModal.addEventListener("click", () => {
    if (successMessage.classList.contains("d-block")) 
    {
        successMessage.classList.remove("d-block");
        successMessage.classList.add("d-none");
    }
});

btnSubmitFormContact.addEventListener("click", () => {
    const form = document.forms["formContact"];

    if (form.body.value.length <= 0)
    {
        alert("Empty message!");
        return;
    }

    const formData = new FormData();
    formData.append("from", form.from.value);
    formData.append("contact", form.contact.value);
    formData.append("request", form.request.value);
    formData.append("body", form.body.value);

    try
    {
        fetch("inserisci_richiesta.php", {
            method: "POST",
            body: formData
        });
    }
    catch (ex)
    {
        alert("Error on sending email!");
    }

    successMessage.classList.add("d-block");
    successMessage.classList.remove("d-none");

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