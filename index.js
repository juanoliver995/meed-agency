const loader = document.querySelector(".loader")

setTimeout(() => {
    loader.style.display = "none"
}, 3000)

gsap.registerPlugin(ScrollTrigger)

gsap.set(".artists h2", {
    opacity: 0,
    y: 100
})

gsap.set("#artist-1", {
    opacity: 0,
    x: -200
})

gsap.set("#artist-2", {
    opacity: 0,
    x: -300
})

gsap.set("#artist-3", {
    opacity: 0,
    x: -400
})

gsap.set("#artist-4", {
    opacity: 0,
    x: -500
})


gsap.to(".artists h2", {
    opacity: 1,
    y: 0,
    scrollTrigger: {
        trigger: ".artists h2",
        start: "top 80%",
        end: "top 30%",
    },

})

gsap.to("#artist-1", {
    opacity: 1,
    x: 0,
    duration: 1,
    scrollTrigger: {
        trigger: "#artist-1",
        start: "top 80%",
        end: "top 30%",
    },

})
gsap.to("#artist-2", {
    opacity: 1,
    x: 0,
    duration: 1,
    scrollTrigger: {
        trigger: "#artist-2",
        start: "top 80%",
        end: "top 30%",
    },

})
gsap.to("#artist-3", {
    opacity: 1,
    x: 0,
    duration: 1,
    scrollTrigger: {
        trigger: "#artist-3",
        start: "top 80%",
        end: "top 30%",
    },

})
gsap.to("#artist-4", {
    opacity: 1,
    x: 0,
    duration: 1,
    scrollTrigger: {
        trigger: "#artist-4",
        start: "top 80%",
        end: "top 30%",
    },

})



const listMenu = document.querySelectorAll("#list-menu li")
const imagesMenu = document.querySelectorAll(".imagen-menu img")

listMenu.forEach((li, index) => {
    li.addEventListener("mouseenter", () => {
        listMenu.forEach(liOpacity => {
            liOpacity.style.opacity = .6
        })
        imagesMenu.forEach(img => {
            img.classList.add("none")
        })
        li.style.opacity = 1
        imagesMenu[index + 1].classList.remove("none")
    })
})

const menuOpen = gsap.timeline({ paused: true })
    .to(".menu-hamburguer", {
        x: 0,
        duration: 1
    }).to(listMenu, {
        opacity: 1,
        y: 0,
        duration: .3
    })



const btnBurguerMenu = document.querySelector(".burguer-menu")
const btnCloseMenu = document.querySelector(".close-menu")

btnBurguerMenu.addEventListener("click", () => {
    menuOpen.play()
})

btnCloseMenu.addEventListener("click", () => {
    menuOpen.reverse()
})


const btn = document.getElementById('button');

document.getElementById('form')
    .addEventListener('submit', function (event) {
        event.preventDefault();

        btn.value = 'Subscribing...';

        const serviceID = 'default_service';
        const templateID = 'template_gfrty3y';

        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                btn.value = 'Send Email';
            }, (err) => {
                btn.value = 'Send Email';
                alert(JSON.stringify(err));
            });
    });