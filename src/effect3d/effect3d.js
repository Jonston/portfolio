require('../index.js');

import './scss/effect3d.scss'

import Image3d from "./image3d";
import Bg from "./img/nature.jpg";
import Flare from "./img/flare.png";

window.addEventListener('load', e => {

    let images = {};

    let bg = loadImage(Bg),
        flare = loadImage(Flare),
        viewportWidth = window.innerWidth,
        viewportHeight = window.innerHeight,
        centerX = viewportWidth / 2,
        centerY = viewportHeight / 2;

    bg.then(image => images.bg = image);

    flare.then(image => images.flare = image);

    Promise.all([bg, flare]).then(() => {
        let image = new Image3d(images.bg, images.flare);

        image.setHeight(viewportHeight * .8);

        document.getElementById('container').appendChild(image.element);
    });


});