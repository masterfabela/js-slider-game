for (let i = 25; i > 0; i--) {
    let slider = document.createElement('div');
    slider.setAttribute('class', 'slider animate');
    slider.setAttribute('id', 'slider' + i);
    document.getElementById('game').append(slider);
}
