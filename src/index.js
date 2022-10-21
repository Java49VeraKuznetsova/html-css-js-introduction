console.log ("Only for test - all good from the first time")
const anchors = document.querySelectorAll(".thumbnail-anchor");
const detailsImage = document.querySelector(".details-image");
const detailsTitle = document.querySelector(".details-title");
const mainClass = document.querySelector(".main-class");
const HIDDEN = "hidden"
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

function showDetails () {
    /* delete Class Hidden - return Details on Screen */
    mainClass.classList.remove(HIDDEN);
}

function hideDetails () {
     /* delete Details from Screen - return Class Hidden */
    mainClass.classList.add(HIDDEN);
}