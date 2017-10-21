const rotatorButtons = document.getElementsByClassName('rotator');
const rotatorIdPostfix = -("_rotate".length); // reverse value to negative
const degreesPerTurn = 90;

/**
 * Rotate image handler
 */
let rotateImage = function() {
    const photoContainerID = this.id.slice(0, rotatorIdPostfix); // from the end of the ID string
    const photoContainer = document.getElementById(photoContainerID);

    // use element attribute data-rotate to get and store degrees for rotation
    let dataRotate = +(photoContainer.getAttribute('data-rotate'));
    dataRotate += degreesPerTurn;
    photoContainer.dataset.rotate = dataRotate.toString();

    photoContainer.style.transform = "rotate(" + dataRotate + "deg)";

    // if element has initial replacement
    // or upside down
    if (dataRotate % 180 === 0) {
        photoContainer.classList.remove("rotated");
    } else {
        photoContainer.classList.add("rotated");
    }
};

for (let i = 0; i < rotatorButtons.length; i++) {
    rotatorButtons[i].addEventListener("click", rotateImage, false);
}
