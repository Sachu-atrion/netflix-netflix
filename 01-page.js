const productContainers = [...document.querySelectorAll('.productContainer')];
const leftButton = [...document.querySelectorAll('.leftButton')];
const rightButton = [...document.querySelectorAll('.rightButton')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    rightButton[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    leftButton[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})