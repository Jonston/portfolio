import "./global/scss/style.scss";

(function(window){

    window.loadImage = function(src){

        return new Promise((resolve, reject) => {
            let image = new Image;

            image.addEventListener('load', e => {
                resolve(e.target);
            });

            image.src = src;
        });

    }

    return window;

})(window);