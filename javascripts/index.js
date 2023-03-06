$(document).ready(function () {
  ///////////////////////////////////////////////////////////
  // Animated scrolling to sections on click:

  function scrollToSection(event) {
    event.preventDefault();

    const $section = $($(this).attr("href"));

    $("html, body").animate(
      {
        scrollTop: $section.offset().top,
      },
      600
    );
  }

  $("[data-scroll]").on("click", scrollToSection);

  ///////////////////////////////////////////////////////////
  // Make mobile navigation work

  const btnNavEl = document.querySelector(".btn-mobile-nav");
  const headerEl = document.querySelector(".header");

  btnNavEl.addEventListener("click", function () {
    headerEl.classList.toggle("nav-open");
  });

  ///////////////////////////////////////////////////////////
  // Smooth scrolling animation

  const allLinks = document.querySelectorAll("smooth:link");

  allLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const href = link.getAttribute("href");

      // Scroll back to top
      if (href === "#")
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });

      // Scroll to other links
      if (href !== "#" && href.startsWith("#")) {
        const sectionEl = document.querySelector(href);
        sectionEl.scrollIntoView({ behavior: "smooth" });
      }

      // Close mobile navigation
      if (link.classList.contains("main-nav-link"))
        headerEl.classList.toggle("nav-open");
    });
  });

  // Close mobile navigation menu on index

  const navLink = document.querySelector(".main-nav-link");

  navLink.addEventListener("click", function (e) {
    const openNav = document.querySelector(".nav-open");
    const btnNav = openNav.querySelector("button.btn-mobile-nav");
    if (headerEl.classList.contains("nav-open")) {
      btnNav.click();
    }
  });

  const navCta = document.querySelector(".nav-cta");

  navCta.addEventListener("click", function (e) {
    const openNav = document.querySelector(".nav-open");
    const btnNav = openNav.querySelector("button.btn-mobile-nav");
    if (headerEl.classList.contains("nav-open")) {
      btnNav.click();
    }
  });

  // Close mobile navigation menu on scroll

  document.addEventListener("scroll", function (e) {
    const openNav = document.querySelector(".nav-open");
    const btnNav = openNav.querySelector("button.btn-mobile-nav");
    if (headerEl.classList.contains("nav-open")) {
      btnNav.click();
    }
  });

  ///////////////////////////////////////////////////////////
  // Diamond opening

  const bigDesktop = window.matchMedia("(min-width: 1345px)");
  const smallDesktop = window.matchMedia(
    "(min-width: 1201px) and (max-width: 1344px)"
  );
  const tablet = window.matchMedia("(max-width: 1200px)");

  const sectionMethods = document.querySelector("#methods");
  const gridDiamonds = document.querySelector(".grid-diamonds");
  const discover = document.querySelector("#discover");
  const define = document.querySelector("#define");
  const develop = document.querySelector("#develop");
  const deliver = document.querySelector("#deliver");

  const hiddenDiscover = document.querySelector("#hidden-discover");
  const hiddenDefine = document.querySelector("#hidden-define");
  const hiddenDevelop = document.querySelector("#hidden-develop");
  const hiddenDeliver = document.querySelector("#hidden-deliver");

  if (bigDesktop.matches) {
    discover.addEventListener("click", function () {
      gridDiamonds.classList.toggle("active");
      if (
        gridDiamonds.style.gridTemplateColumns ===
        "min-content minmax(488px, auto) min-content min-content min-content"
      ) {
        gridDiamonds.style.gridTemplateColumns = "repeat(4, 1fr)";
        hiddenDiscover.style.display = "none";
      } else {
        gridDiamonds.style.gridTemplateColumns =
          "min-content minmax(488px, auto) min-content min-content min-content";
        hiddenDiscover.style.display = "flex";
        hiddenDefine.style.display = "none";
        hiddenDevelop.style.display = "none";
        hiddenDeliver.style.display = "none";
      }
    });

    define.addEventListener("click", function () {
      gridDiamonds.classList.toggle("active");
      if (
        gridDiamonds.style.gridTemplateColumns ===
        "min-content min-content minmax(488px, auto) min-content min-content"
      ) {
        gridDiamonds.style.gridTemplateColumns = "repeat(4, 1fr)";
        hiddenDefine.style.display = "none";
      } else {
        gridDiamonds.style.gridTemplateColumns =
          "min-content min-content minmax(488px, auto) min-content min-content";
        hiddenDiscover.style.display = "none";
        hiddenDefine.style.display = "flex";
        hiddenDevelop.style.display = "none";
        hiddenDeliver.style.display = "none";
      }
    });

    develop.addEventListener("click", function () {
      gridDiamonds.classList.toggle("active");
      if (
        gridDiamonds.style.gridTemplateColumns ===
        "min-content min-content min-content minmax(488px, auto) min-content"
      ) {
        gridDiamonds.style.gridTemplateColumns = "repeat(4, 1fr)";
        hiddenDevelop.style.display = "none";
      } else {
        gridDiamonds.style.gridTemplateColumns =
          "min-content min-content min-content minmax(488px, auto) min-content";
        hiddenDiscover.style.display = "none";
        hiddenDefine.style.display = "none";
        hiddenDevelop.style.display = "flex";
        hiddenDeliver.style.display = "none";
      }
    });

    deliver.addEventListener("click", function () {
      gridDiamonds.classList.toggle("active");
      if (
        gridDiamonds.style.gridTemplateColumns ===
        "min-content min-content min-content min-content minmax(488px, auto)"
      ) {
        gridDiamonds.style.gridTemplateColumns = "repeat(4, 1fr)";
        hiddenDeliver.style.display = "none";
      } else {
        gridDiamonds.style.gridTemplateColumns =
          "min-content min-content min-content min-content minmax(488px, auto)";
        hiddenDiscover.style.display = "none";
        hiddenDefine.style.display = "none";
        hiddenDevelop.style.display = "none";
        hiddenDeliver.style.display = "flex";
      }
    });
  }

  ///////below 1344px//////

  if (smallDesktop.matches) {
    discover.addEventListener("click", function () {
      gridDiamonds.classList.toggle("active");
      if (
        gridDiamonds.style.gridTemplateColumns ===
        "min-content minmax(440px, auto) min-content min-content min-content"
      ) {
        gridDiamonds.style.gridTemplateColumns = "repeat(4, 1fr)";
        hiddenDiscover.style.display = "none";
      } else {
        gridDiamonds.style.gridTemplateColumns =
          "min-content minmax(440px, auto) min-content min-content min-content";
        hiddenDiscover.style.display = "flex";
        hiddenDefine.style.display = "none";
        hiddenDevelop.style.display = "none";
        hiddenDeliver.style.display = "none";
      }
    });

    define.addEventListener("click", function () {
      gridDiamonds.classList.toggle("active");
      if (
        gridDiamonds.style.gridTemplateColumns ===
        "min-content min-content minmax(440px, auto) min-content min-content"
      ) {
        gridDiamonds.style.gridTemplateColumns = "repeat(4, 1fr)";
        hiddenDefine.style.display = "none";
      } else {
        gridDiamonds.style.gridTemplateColumns =
          "min-content min-content minmax(440px, auto) min-content min-content";
        hiddenDiscover.style.display = "none";
        hiddenDefine.style.display = "flex";
        hiddenDevelop.style.display = "none";
        hiddenDeliver.style.display = "none";
      }
    });

    develop.addEventListener("click", function () {
      gridDiamonds.classList.toggle("active");
      if (
        gridDiamonds.style.gridTemplateColumns ===
        "min-content min-content min-content minmax(440px, auto) min-content"
      ) {
        gridDiamonds.style.gridTemplateColumns = "repeat(4, 1fr)";
        hiddenDevelop.style.display = "none";
      } else {
        gridDiamonds.style.gridTemplateColumns =
          "min-content min-content min-content minmax(440px, auto) min-content";
        hiddenDiscover.style.display = "none";
        hiddenDefine.style.display = "none";
        hiddenDevelop.style.display = "flex";
        hiddenDeliver.style.display = "none";
      }
    });

    deliver.addEventListener("click", function () {
      gridDiamonds.classList.toggle("active");
      if (
        gridDiamonds.style.gridTemplateColumns ===
        "min-content min-content min-content min-content minmax(440px, auto)"
      ) {
        gridDiamonds.style.gridTemplateColumns = "repeat(4, 1fr)";
        hiddenDeliver.style.display = "none";
      } else {
        gridDiamonds.style.gridTemplateColumns =
          "min-content min-content min-content min-content minmax(440px, auto)";
        hiddenDiscover.style.display = "none";
        hiddenDefine.style.display = "none";
        hiddenDevelop.style.display = "none";
        hiddenDeliver.style.display = "flex";
      }
    });
  }

  ///////below 1200px//////

  if (tablet.matches) {
    discover.addEventListener("click", function () {
      gridDiamonds.classList.toggle("active");
      if (hiddenDiscover.style.display == "flex") {
        hiddenDiscover.style.display = "none";
        sectionMethods.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "end",
        });
      } else {
        hiddenDiscover.style.display = "flex";
        hiddenDefine.style.display = "none";
        hiddenDevelop.style.display = "none";
        hiddenDeliver.style.display = "none";
        hiddenDiscover.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "end",
        });
      }
    });

    define.addEventListener("click", function () {
      gridDiamonds.classList.toggle("active");
      if (hiddenDefine.style.display == "flex") {
        hiddenDefine.style.display = "none";
        sectionMethods.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "end",
        });
      } else {
        hiddenDiscover.style.display = "none";
        hiddenDefine.style.display = "flex";
        hiddenDevelop.style.display = "none";
        hiddenDeliver.style.display = "none";
        hiddenDefine.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "end",
        });
      }
    });

    develop.addEventListener("click", function () {
      gridDiamonds.classList.toggle("active");
      if (hiddenDevelop.style.display == "flex") {
        hiddenDevelop.style.display = "none";
        sectionMethods.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "end",
        });
      } else {
        hiddenDiscover.style.display = "none";
        hiddenDefine.style.display = "none";
        hiddenDevelop.style.display = "flex";
        hiddenDeliver.style.display = "none";
        hiddenDevelop.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "end",
        });
      }
    });

    deliver.addEventListener("click", function () {
      gridDiamonds.classList.toggle("active");
      if (hiddenDeliver.style.display == "flex") {
        hiddenDeliver.style.display = "none";
        sectionMethods.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "end",
        });
      } else {
        hiddenDiscover.style.display = "none";
        hiddenDefine.style.display = "none";
        hiddenDevelop.style.display = "none";
        hiddenDeliver.style.display = "flex";
        hiddenDeliver.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "end",
        });
      }
    });
  }

  // Force refresh page on resize

  // jQuery(function ($) {
  //   var windowWidth = $(window).width();
  //   var windowHeight = $(window).height();

  //   $(window).resize(function () {
  //     if (
  //       windowWidth != $(window).width() ||
  //       windowHeight != $(window).height()
  //     ) {
  //       location.reload();
  //       return;
  //     }
  //   });
  // });

  // window.addEventListener("resize", function () {
  //   "use strict";
  //   window.location.reload();
  // });

  // Diamond horizontal scroll under 1344px viewport width

  // const gridCenter = document.querySelector(".grid-center");

  // gridCenter.addEventListener("click", function (e) {
  //   if (
  //     gridDiamonds.classList.contains("active")
  //     // window.innerWidth < "1344px"
  //   ) {
  //     gridCenter.style.justifyContent = "left";
  //   }
  // });

  // if (gridDiamonds.classList.contains("active")) {
  //   gridCenter.addEventListener("click", function (e) {
  //     gridCenter.style.justifyContent = "left";
  //   });
  // }

  // gridCenter.addEventListener("click", function (e) {
  //   if (gridDiamonds.classList.contains("active") == "false") {
  //     gridCenter.style.justifyContent = "center";
  //   }
  // });

  ///////////////////////////////////////////////////////////
  // Pretty navigation

  // let position = "absolute";
  // let navbarTop = 0;
  // let lastScrollPosition = 0;
  // const supportPageOffset = window.pageYOffset !== undefined;

  // function onScroll() {
  //   const navbar = document.getElementById("navbar");
  //   const currentScrollPosition = supportPageOffset
  //     ? window.pageYOffset
  //     : document.documentElement.scrollTop;
  //   if (currentScrollPosition <= 0) {
  //     position = "absolute";
  //     navbarTop = 0;
  //     lastScrollPosition = 0;
  //   } else {
  //     if (currentScrollPosition > lastScrollPosition) {
  //       position = "absolute";
  //       let { top, height } = navbar.getBoundingClientRect();
  //       if (top < -height) {
  //         top = -height;
  //       }
  //       navbarTop = currentScrollPosition + top;
  //     } else if (currentScrollPosition < lastScrollPosition) {
  //       const { top } = navbar.getBoundingClientRect();
  //       if (top >= 0) {
  //         navbarTop = 0;
  //         position = "fixed";
  //       }
  //     }
  //     lastScrollPosition = currentScrollPosition;
  //   }
  //   navbar.style = `position: ${position}; top: ${navbarTop}px;`;
  // }

  // window.addEventListener("scroll", onScroll, { passive: true });

  ///////////////////////////////////////////////////////////
  // Fixing flexbox gap property missing in some Safari versions

  function checkFlexGap() {
    var flex = document.createElement("div");
    flex.style.display = "flex";
    flex.style.flexDirection = "column";
    flex.style.rowGap = "1px";

    flex.appendChild(document.createElement("div"));
    flex.appendChild(document.createElement("div"));

    document.body.appendChild(flex);
    var isSupported = flex.scrollHeight === 1;
    flex.parentNode.removeChild(flex);
    console.log(isSupported);

    if (!isSupported) document.body.classList.add("no-flexbox-gap");
  }
  checkFlexGap();

  // https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js

  /*
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 4.8rem;
  }

  .no-flexbox-gap .list-item:not(:last-child) {
    margin-bottom: 1.6rem;
  }

  .no-flexbox-gap .list-icon:not(:last-child) {
    margin-right: 1.6rem;
  }

  .no-flexbox-gap .delivered-faces {
    margin-right: 1.6rem;
  }

  .no-flexbox-gap .meal-attribute:not(:last-child) {
    margin-bottom: 2rem;
  }

  .no-flexbox-gap .meal-icon {
    margin-right: 1.6rem;
  }

  .no-flexbox-gap .footer-row div:not(:last-child) {
    margin-right: 6.4rem;
  }

  .no-flexbox-gap .social-links li:not(:last-child) {
    margin-right: 2.4rem;
  }

  .no-flexbox-gap .footer-nav li:not(:last-child) {
    margin-bottom: 2.4rem;
  }

  @media (max-width: 75em) {
    .no-flexbox-gap .main-nav-list li:not(:last-child) {
      margin-right: 3.2rem;
    }
  }

  @media (max-width: 59em) {
    .no-flexbox-gap .main-nav-list li:not(:last-child) {
      margin-right: 0;
      margin-bottom: 4.8rem;
    }
  }
  */
});
