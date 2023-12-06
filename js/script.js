let param = new URLSearchParams(window.location.search);
var curPageURL = window.location.href;
var currentPageURL = new URL(curPageURL);
let threeD = param.get("style");
if (!threeD) {
    threeD = "Cursor";
}
// toggles
// color mode switch
let pbody = document.querySelector("body");
let toggl = document.querySelector(".togler");
let styleItems = document.querySelector(".styleItems");

toggl.addEventListener("click", function () {
    // pbody.classList.toggle("light");
    styleItems.classList.toggle("active");
});

window.addEventListener("load", () => {
    if (threeD == "Cursor") {
        toggl.classList.add("cursor");
    } else if (threeD == "Sword") {
        toggl.classList.add("sword");
    } else if (threeD == "SpaceShip") {
        toggl.classList.add("ship");
    }
});

//3D style
const toggleStyle = (whichStyle) => {
    styleItems.classList.toggle("active");
    switch (whichStyle) {
        case "cursor":
            toggl.classList.add(whichStyle);
            toggl.classList.remove("ship");
            toggl.classList.remove("sword");
            currentPageURL.searchParams.set("style", "Cursor");
            break;
        case "ship":
            toggl.classList.add(whichStyle);
            toggl.classList.remove("cursor");
            toggl.classList.remove("sword");
            currentPageURL.searchParams.set("style", "SpaceShip");
            break;
        case "sword":
            toggl.classList.add(whichStyle);
            toggl.classList.remove("cursor");
            toggl.classList.remove("ship");
            currentPageURL.searchParams.set("style", "Sword");
            break;
    }
    window.history.pushState({}, "", currentPageURL.toString());
};

// menu bar
let menubar = document.querySelector(".menu-bar");
let showcontent = document.querySelector(".fixed-pop");
let closecontent = document.querySelectorAll(".fixed-pop li");
let overlay = document.querySelector(".overlay");

menubar.addEventListener("click", function () {
    showcontent.classList.toggle("active");
    overlay.classList.toggle("active");
    menubar.classList.toggle("active");
});

overlay.addEventListener("click", function () {
    showcontent.classList.remove("active");
    overlay.classList.remove("active");
    menubar.classList.remove("active");
});
closecontent.forEach((closeBtn) => {
    closeBtn.addEventListener("click", function () {
        showcontent.classList.remove("active");
        overlay.classList.remove("active");
        menubar.classList.remove("active");
    });
});
for (let i = 0; i < closecontent.length; i++) {
    closecontent[i].addEventListener("click", function () {
        for (let a = 0; a < closecontent.length; a++) {
            closecontent[a].classList.remove("active");
        }
        this.classList.add("active");
    });
}
// form validation
let inps = document.querySelectorAll(".fname1");
let subtn = document.querySelector(".sub-btn button");
subtn.onclick = function () {
    inps.forEach((inpField) => {
        if (inpField.value !== "") {
            inpField.classList.add("active");
        } else {
            inpField.classList.remove("active");
        }
    });
};
//  load animation
let body = document.querySelector("body");
let header = document.querySelector(".header-fade");
let title = document.querySelector(".title-tran");
let para = document.querySelector(".para-tran");
let btn = document.querySelector(".btn-tran");
let img = document.querySelector(".img-tran");
let enterBtn = document.querySelector("#enterBtn");
enterBtn.addEventListener("click", function () {
    console.log("jiy");
    header.style.marginTop = "1vh";
    // title
    title.style.setProperty("--x", "0");
    title.style.opacity = "1";
    title.style.transition = "1s";
    // para
    para.style.setProperty("--x", "0");
    para.style.opacity = "1";
    para.style.transition = "1s .2s";
    // button
    btn.style.setProperty("--x", "0");
    btn.style.opacity = "1";
    btn.style.transition = "1s .4s";
    // image
    img.style.setProperty("--x", "0");
    img.style.opacity = "1";
    img.style.transition = "1s .6s";
});

//Plane click
let atop = document.querySelector(".topd");
atop.onclick = function () {
    atop.style.animation = "ani 1s ease";
};
window.onscroll = function () {
    // home toggle
    if (document.documentElement.scrollTop < 700) {
        atop.classList.remove("active");
        atop.style.animation = "none";
    } else {
        atop.classList.add("active");
    }
};

// scroll animation
const scrollElements = document.querySelectorAll(".sec-title");
let observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((ent) => {
            ent.target.classList.toggle("active", ent.isIntersecting);
        });
    },
    { threshold: 1, rootMargin: "-50px" }
);
scrollElements.forEach((scrollEle) => {
    observer.observe(scrollEle);
});
window.addEventListener("scroll", function () {
    if (window.scrollY < 500) {
        title.style.setProperty("--x", window.scrollY * -0.5 + "px");
        para.style.setProperty("--x", window.scrollY * -0.4 + "px");
        btn.style.setProperty("--x", window.scrollY * -0.3 + "px");
    }

    if (body.offsetWidth < 500) {
        img.classList.remove("active");
        // small screen
        if (300 < window.scrollY && 1000 > window.scrollY) {
            img.style.transform =
                "translateX(" + (window.scrollY * 0.3 - 90) + "px)";
            img.style.transition = "all 0.2s linear 0s";
        } else {
            img.style.transform = "translateX(0px)";
        }
    } else {
        img.classList.add("active");
        if (window.scrollY < 600) {
            img.style.transform = "translateX(" + window.scrollY * 0.6 + "px)";
            img.style.transition = "all 0.5s 0s";
        }
    }

    body.style.setProperty(
        "--bg-zoom",
        ((window.scrollY / body.getBoundingClientRect().height) * 100) / 3 + "%"
    );
});

window.onunload = () => {
    window.scrollTo(0, 0);
};

if (window.innerWidth < 1050) {
    showcontent.classList.add("con-til");
} else {
    showcontent.classList.remove("con-til");
}
