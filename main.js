const tl = gsap.timeline();

// HOME PAGE ANIMATIONS

tl.fromTo(".me", { x: "-200%" }, { x: 0, duration: 0.8, ease: "power4.in" });
tl.fromTo(".me",{ scale: 0.5 },{ scale: 1, duration: 0.6, ease: "power4.in" });
tl.fromTo(".me",{ filter: "blur(20px)" },{ filter: "blur(0px)", duration: 0.8, ease: "power4.in" });

// TEXT ANIMATION

tl.fromTo(".about-me",{ y: 80, opacity: 0 },{ y: 0, opacity: 1, duration: 0.8, ease: "elastic.out(1, 0.3)" });

// HOBBY PAGE ANIMATIONS

gsap.registerPlugin(ScrollTrigger);

const leftContent = document.querySelectorAll(".left");
const rightContent = document.querySelectorAll(".right");

leftContent.forEach(content => {
  gsap.fromTo(content, {opacity:0, x: -300}, {opacity:1, x:0, duration:1.8, ease:"expo.out", scrollTrigger: {
    trigger: content,
    start: "top 80%"
  }})
});

rightContent.forEach(content => {
  gsap.fromTo(content, {opacity:0, x: 300}, {opacity:1, x:0, duration:1.8, ease:"expo.out", scrollTrigger: {
    trigger: content,
    start: "top 70%"
  }})
});

// MOVIES PAGE ANIMATIONS

gsap.to(".movie-name", {opacity:1,  duration:1, stagger:.4,  ease:"power4.in", })

// 300 SPARTANS PAGE HANDLE

const mainImg = document.querySelector(".main-img");
const smallImages = document.querySelectorAll(".small-img");

smallImages[0].style.opacity = ".4"
 
const galleryHandle = e => {
  const currentImg = e.target;
  smallImages.forEach(img =>{
    img.style.opacity = "1"
  });
  mainImg.src = currentImg.src;
  currentImg.style.opacity = ".4"

};

smallImages.forEach(img => img.addEventListener("click", galleryHandle));

gsap.fromTo(".movie-text", { x: 150, opacity:0 }, { x: 0, opacity:1, duration: 0.8, ease: "power4.in" });