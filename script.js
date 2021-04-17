for (let i = 25; i > 0; i--) {
    let slider = document.createElement('div');
    slider.setAttribute('class', 'slider animate');
    slider.setAttribute('id', 'slider' + i);
    document.getElementById('game').append(slider);
}

let slideWidth = 400;

function stopSliding(sliderNumber) {
    let currentSlider = document.getElementById(`slider${sliderNumber}`);
    let slideAbove = document.getElementById(`slider${sliderNumber + 1}`);
    let slideBelow;
    if (sliderNumber > 1) {
        slideBelow = document.getElementById(`slider${sliderNumber - 1}`);
    } else {
        slideBelow = currentSlider;
    }
    let left = window.getComputedStyle(currentSlider).getPropertyValue('left');
    currentSlider.classList.remove('animate');
    currentSlider.style.left = left;
    let width = parseInt(
        window.getComputedStyle(currentSlider).getPropertyValue('width')
    );
    let leftBelow = parseInt(
        window.getComputedStyle(slideBelow).getPropertyValue('left')
    );
    left = parseInt(left);
    let difference = left - leftBelow;
    let absDifference = Math.abs(difference);
    if (difference > width || difference < -width) {
        let score = `Score: ${sliderNumber - 1}`;
        alert(score).then(() => {
            Location.reload();
        });
    }
    if (difference < 0) {
        left = left + absDifference;
    } else {
        left = left - difference;
        currentSlider.style.left = left.toString().concat('px');
    }
    let offset = (width - absDifference).toString().concat('px');
    currentSlider.style.width = offset;
    slideAbove.style.width = offset;
    slideAbove.style.visibility = 'visible';
    currentSlider.style.left = left;
    slideWidth = slideWidth + absDifference;
    //document.documentElement.style.setProperty('--width', slideWidth);
    let onClick = `stopSliding(${sliderNumber + 1})`;
    document.getElementById('btn').setAttribute('onclick', onClick);
}
