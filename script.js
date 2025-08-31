function locomotiveAnimation() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,

    // for tablet smooth
    tablet: { smooth: true },

    // for mobile
    smartphone: { smooth: true },
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();
}

locomotiveAnimation();
// nav animation start

// function navAnimation() {
//   var nav = document.querySelector("nav");

//   nav.addEventListener("mouseenter", function () {
//     let tl = gsap.timeline();

//     tl.to("#nav-bottom", {
//       height: "21vh",
//       duration: 0.5,
//     });
//     tl.to(".nav-part2 h5", {
//       display: "block",
//       duration: 0.1,
//     });
//     tl.to(".nav-part2 h5 span", {
//       y: 0,
//       // duration:0.3,
//       stagger: {
//         amount: 0.5,
//       },
//     });
//   });
// }
// navAnimation();
// nav animation end

function loadingAnimation() {
  var tl = gsap.timeline();
  tl.from("#page1", {
    opacity: 0,
    duration: 0.2,
    delay: 0.2,
  });
  tl.from("#page1", {
    transform: "scaleX(0.7) scaleY(0.2) translateY(80%)",
    borderRadius: "150px",
    duration: 2,
    ease: "expo.out",
  });
  tl.from("nav", {
    opacity: 0,
    delay: -0.2,
  });
  tl.from("#page1 h1, #page1 p, #page1 div", {
    opacity: 0,
    duration: 0.5,
    stagger: 0.2,
  });
}

loadingAnimation();
function navAnimation() {
  var nav = document.querySelector("nav");

  nav.addEventListener("mouseenter", function () {
    let tl = gsap.timeline();

    tl.to("#nav-bottom", {
      height: "21vh",
      duration: 0.5,
    });
    tl.to(".nav-part2 h5", {
      display: "block",
      duration: 0.1,
    });
    tl.to(".nav-part2 h5 span", {
      y: 0,
      // duration:0.3,
      stagger: {
        amount: 0.5,
      },
    });
  });
  nav.addEventListener("mouseleave", function () {
    let tl = gsap.timeline();
    tl.to(".nav-part2 h5 span", {
      y: 25,
      stagger: {
        amount: 0.2,
      },
    });
    tl.to(".nav-part2 h5", {
      display: "none",
      duration: 0.1,
    });
    tl.to("#nav-bottom", {
      height: 0,
      duration: 0.2,
    });
  });
}
// navAnimation();
// page2 Animation start
function page2Animation() {
  var rightElems = document.querySelectorAll(".right-elem");
  rightElems.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
      gsap.to(elem.childNodes[3], {
        opacity: 1,
        scale: 1,
      });
    });
    elem.addEventListener("mouseleave", function () {
      gsap.to(elem.childNodes[3], {
        opacity: 0,
        scale: 0,
      });
    });
    elem.addEventListener("mousemove", function (dets) {
      gsap.to(elem.childNodes[3], {
        x: dets.x - elem.getBoundingClientRect().x - 50,
        y: dets.y - elem.getBoundingClientRect().y - 150,
      });
    });
  });
}
page2Animation();

// page2 Animation end

function page3Animation() {
  var page3Center = document.querySelector(".page3-center");
  var video = document.querySelector("#page3 video");
  page3Center.addEventListener("click", function () {
    video.play();
    gsap.to(video, {
      transform: "scaleX(1) scaleY(1)",
      opacity: 1,
      borderRadius: 0,
    });
  });

  video.addEventListener("click", function () {
    video.pause();
    gsap.to(video, {
      transform: "scaleX(0.7) scaleY(0)",
      opacity: 1,
      borderRadius: "30px",
    });
  });
  var sections = document.querySelectorAll(".sec-right");
  sections.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
      elem.childNodes[3].style.opacity = 1;
      elem.childNodes[3].play();
    });
    elem.addEventListener("mouseleave", function () {
      elem.childNodes[3].style.opacity = 0;
      elem.childNodes[3].load();
    });
  });
}
page3Animation();
function page6Animations() {
  gsap.from("#btm6-part2 h4", {
    x: 0,
    duration: 1,
    scrollTrigger: {
      trigger: "#btm6-part2",
      scroller: "#main",
      start: "top 80%",
      end: "top 10%",
      scrub: true,
    },
  });
}
page6Animations();

// Footer Interactions
function footerAnimations() {
  // Animate footer elements on scroll
  gsap.from(".footer-section", {
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.1,
    scrollTrigger: {
      trigger: "#footer",
      scroller: "#main",
      start: "top 80%",
      end: "top 50%",
      scrub: 1,
    },
  });

  // Social links hover animation
  const socialLinks = document.querySelectorAll(".social-links a");
  socialLinks.forEach((link) => {
    link.addEventListener("mouseenter", function () {
      gsap.to(this, { scale: 1.2, duration: 0.3 });
    });
    link.addEventListener("mouseleave", function () {
      gsap.to(this, { scale: 1, duration: 0.3 });
    });
  });

  // Footer CTA button animation
  const footerCTA = document.querySelector(".footer-cta");
  if (footerCTA) {
    footerCTA.addEventListener("mouseenter", function () {
      gsap.to(this, { scale: 1.05, duration: 0.3 });
    });
    footerCTA.addEventListener("mouseleave", function () {
      gsap.to(this, { scale: 1, duration: 0.3 });
    });
  }

  // Animate awards on hover
  const awards = document.querySelectorAll(".footer-awards img");
  awards.forEach((award) => {
    award.addEventListener("mouseenter", function () {
      gsap.to(this, { scale: 1.1, duration: 0.3 });
    });
    award.addEventListener("mouseleave", function () {
      gsap.to(this, { scale: 1, duration: 0.3 });
    });
  });
}

footerAnimations();

// Smooth scroll to top functionality
function addScrollToTop() {
  const footerBrand = document.querySelector(".footer-brand h2");
  if (footerBrand) {
    footerBrand.style.cursor = "pointer";
    footerBrand.addEventListener("click", function () {
      const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true,
      });
      locoScroll.scrollTo(0);
    });
  }
}

addScrollToTop();

// Back to Top functionality
function scrollToTop() {
  const main = document.querySelector("#main");
  if (main) {
    main.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
}

// Newsletter subscription functionality
function initializeNewsletter() {
  const newsletterForm = document.querySelector(".newsletter-form");
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const email = this.querySelector('input[type="email"]').value;
      if (email) {
        alert(
          "Thank you for subscribing! We will keep you updated with the latest design insights."
        );
        this.querySelector('input[type="email"]').value = "";
      }
    });
  }
}

initializeNewsletter();
