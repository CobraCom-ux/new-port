/*==========================================================
    MUHAMMAD ABUBAKKAR PORTFOLIO
    APP.JS
==========================================================*/

/*========================
    PAGE LOADER
========================*/

window.addEventListener("load", () => {

    const loader = document.querySelector(".loader");

    if (loader) {

        setTimeout(() => {

            loader.classList.add("hide");

        }, 1000);

    }

});

/*========================
    CURRENT YEAR
========================*/

const year = document.querySelector(".year");

if (year) {

    year.textContent = new Date().getFullYear();

}

/*========================
    TYPING EFFECT
========================*/

const typing = document.querySelector(".typing");

const words = [

    "Operations Executive",

    "Business Consultant",

    "Founder of Drevanox",

    "Recruitment Specialist",

    "Process Improvement Expert"

];

let wordIndex = 0;

let charIndex = 0;

let deleting = false;

function typeEffect(){

    if(!typing) return;

    let currentWord = words[wordIndex];

    if(!deleting){

        typing.textContent = currentWord.substring(0,charIndex++);

        if(charIndex > currentWord.length){

            deleting = true;

            setTimeout(typeEffect,1800);

            return;

        }

    }else{

        typing.textContent = currentWord.substring(0,charIndex--);

        if(charIndex < 0){

            deleting = false;

            wordIndex++;

            if(wordIndex >= words.length){

                wordIndex = 0;

            }

        }

    }

    setTimeout(typeEffect,deleting ? 40 : 80);

}

typeEffect();

/*========================
    STICKY HEADER
========================*/

const header = document.querySelector(".header");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 50){

        header.classList.add("sticky");

    }

    else{

        header.classList.remove("sticky");

    }

});
/*==========================================================
    ANIMATED COUNTERS
==========================================================*/

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            const counter = entry.target;

            const target = +counter.dataset.target;

            let count = 0;

            const speed = target / 100;

            const updateCounter = () => {

                if(count < target){

                    count += speed;

                    counter.innerText = Math.ceil(count);

                    requestAnimationFrame(updateCounter);

                }else{

                    counter.innerText = target + "+";

                }

            };

            updateCounter();

            counterObserver.unobserve(counter);

        }

    });

},{
    threshold:0.5
});

counters.forEach(counter => {

    counterObserver.observe(counter);

});

/*==========================================================
    MOBILE MENU
==========================================================*/

const menuToggle = document.querySelector(".menu-toggle");

const navLinks = document.querySelector(".nav-links");

if(menuToggle && navLinks){

    menuToggle.addEventListener("click",()=>{

        navLinks.classList.toggle("show");

    });

}

/*==========================================================
    CLOSE MENU AFTER CLICK
==========================================================*/

document.querySelectorAll(".nav-links a").forEach(link=>{

    link.addEventListener("click",()=>{

        navLinks.classList.remove("show");

    });

});

/*==========================================================
    ACTIVE NAVIGATION
==========================================================*/

const currentPage = window.location.pathname.split("/").pop();

document.querySelectorAll(".nav-links a").forEach(link=>{

    const href = link.getAttribute("href");

    if(href === currentPage || (currentPage === "" && href==="index.html")){

        link.classList.add("active");

    }

});

/*==========================================================
    SCROLL TO TOP BUTTON
==========================================================*/

const scrollBtn = document.createElement("button");

scrollBtn.className = "scroll-top";

scrollBtn.innerHTML = "↑";

document.body.appendChild(scrollBtn);

window.addEventListener("scroll",()=>{

    if(window.scrollY > 500){

        scrollBtn.classList.add("show");

    }else{

        scrollBtn.classList.remove("show");

    }

});

scrollBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});
/*==========================================================
    SCROLL REVEAL ANIMATIONS
==========================================================*/

const revealElements = document.querySelectorAll(
    ".section-title, .service-card, .stat-box, .highlight-box, .timeline-item, .about-image, .about-content, .trusted-item"
);

const revealObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("fade-up");

            revealObserver.unobserve(entry.target);

        }

    });

},{
    threshold:0.15
});

revealElements.forEach(el=>{

    revealObserver.observe(el);

});

/*==========================================================
    HEADER BACKGROUND
==========================================================*/

window.addEventListener("scroll",()=>{

    if(window.scrollY > 80){

        header.style.background="rgba(7,17,31,.90)";
        header.style.backdropFilter="blur(25px)";
        header.style.boxShadow="0 10px 35px rgba(0,0,0,.25)";

    }else{

        header.style.background="rgba(7,17,31,.45)";
        header.style.boxShadow="none";

    }

});

/*==========================================================
    PARALLAX HERO
==========================================================*/

const hero = document.querySelector(".hero");

window.addEventListener("scroll",()=>{

    if(hero){

        hero.style.backgroundPositionY =
        window.scrollY * .25 + "px";

    }

});

/*==========================================================
    BUTTON RIPPLE EFFECT
==========================================================*/

document.querySelectorAll(".btn").forEach(button=>{

    button.addEventListener("click",function(e){

        const ripple=document.createElement("span");

        const rect=this.getBoundingClientRect();

        ripple.style.left=(e.clientX-rect.left)+"px";

        ripple.style.top=(e.clientY-rect.top)+"px";

        ripple.classList.add("ripple");

        this.appendChild(ripple);

        setTimeout(()=>{

            ripple.remove();

        },600);

    });

});

/*==========================================================
    IMAGE TILT EFFECT
==========================================================*/

const profileCard=document.querySelector(".profile-card");

if(profileCard){

profileCard.addEventListener("mousemove",(e)=>{

const rect=profileCard.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

const rotateX=((y-rect.height/2)/18);

const rotateY=((rect.width/2-x)/18);

profileCard.style.transform=
`rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

});

profileCard.addEventListener("mouseleave",()=>{

profileCard.style.transform=
"rotateX(0deg) rotateY(0deg)";

});

}

/*==========================================================
    PREVENT EMPTY LINKS
==========================================================*/

document.querySelectorAll("a[href='#']").forEach(link=>{

link.addEventListener("click",(e)=>{

e.preventDefault();

});

});

/*==========================================================
    CONSOLE MESSAGE
==========================================================*/

console.log("%cMuhammad Abubakkar Portfolio",
"font-size:24px;color:#00D4FF;font-weight:bold");

console.log("%cDesigned with HTML • CSS • JavaScript",
"font-size:14px;color:#ffffff");

/*==========================================================
    END OF APP.JS
==========================================================*/