console.log ("Only for test - all good from the first time")
const anchors = document.querySelectorAll(".thumbnail-anchor");
const detailsImage = document.querySelector(".details-image");
const detailsTitle = document.querySelector(".details-title");

const mainClass = document.querySelector(".main-class");
const detailsContainer = document.querySelector(".details-container");
const HIDDEN = "hidden";
const IS_POINT ="is-point";

function setDetails(anchor) {
    detailsImage.setAttribute('src', anchor.getAttribute('data-details-image'));
    detailsTitle.innerHTML = anchor.getAttribute('data-details-title');
}
for (let i=0; i<anchors.length; i++) {
    anchors[i].addEventListener("click", function() {
        showDetails ();
        setDetails(anchors[i]);
    })
}

function showDetails() {
    /* delete Class Hidden - return Details on Screen */
    mainClass.classList.remove(HIDDEN);
      /* decrease Det */
    detailsContainer.classList.add(IS_POINT);
     /* 1 ms - and begin increase */
    setTimeout(function() {
        detailsContainer.classList.remove(IS_POINT);
    },1)
}

function hideDetails () {
     /* delete Details from Screen - return Class Hidden */
    mainClass.classList.add(HIDDEN);
    
}