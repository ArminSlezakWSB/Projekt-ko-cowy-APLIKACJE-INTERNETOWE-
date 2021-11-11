//Pobranie elementow
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelectorAll(".header-section")[1];
const navItems = document.querySelectorAll(".navItem");

//Zdarzenia
hamburger.addEventListener('click', hamburgerState, false);
window.addEventListener('resize', mediaState, true);
navItems.forEach( e =>{e.addEventListener('click', hamburgerState, true)});
//navItems.forEach


//Animacja ikony hamburgera
var hnr =true;
function hamburgerState()
{
    console.log("kahfks");
    hnr ? hamburger.classList.add('hamburgerAnimate') : hamburger.classList.remove('hamburgerAnimate');
    hnr ? nav.style.display = "block" : nav.style.display = "none";
    hnr = !hnr;
}


//Na zdarzenie zmiany szerokosci okna
function mediaState()
{
    if(window.innerWidth < 768)
    {
        nav.style.display = "none";
        if(hamburger.classList.contains('hamburgerAnimate'))hamburger.classList.remove('hamburgerAnimate');
    }
    if(window.innerWidth >=768) nav.style.display = "block";
}
