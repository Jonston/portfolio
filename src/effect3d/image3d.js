function Image3d(bg, flare){
    let element = document.createElement('div');

    element.style.position = 'absolute';
    element.style.left = 0;
    element.style.top = 0;
    element.style.right = 0;
    element.style.bottom = 0;
    element.style.margin = 'auto';
    element.style.width = `${bg.width}px`;
    element.style.height = `${bg.height}px`;
    element.style.backgroundImage = `url('${flare.src}'), url('${bg.src}')`;
    element.style.backgroundSize = '50% 200%, contain';
    element.style.backgroundPosition = '50% 50%, center';
    element.style.backgroundRepeat = 'no-repeat, no-repeat';

    element.addEventListener('mousemove', e => {

        let target = e.target,
            viewportWidth = window.innerWidth,
            viewportHeight = window.innerHeight,
            centerX = viewportWidth / 2,
            centerY = viewportHeight / 2,
            cursorX = e.pageX - centerX,
            cursorY = e.pageY - centerY,
            angle = 30,
            ay = cursorX / this.width / 2 * angle,
            ax = cursorY / this.height / 2 * angle;

        this.rotate(ax, ay);

    });

    this.element = element;

    this.width = bg.width;

    this.height = bg.height;
}

Image3d.prototype.rotate = function(ax = 0, ay = 0, az = 0){
    let element = this.element;

    element.style.transform = `rotateY(${ay}deg) rotateX(${-ax}deg) rotateZ(${az})`;

    element.style.boxShadow = `${-ay}px ${-ax}px ${(Math.abs(ay) + Math.abs(ax)) * 2}px 0px rgba(0, 0, 0, .7)`;

    element.style.backgroundPosition = `${50 - ay * 15}% ${50}%, center`;

    return this;
}

Image3d.prototype.scale = function(scale = 1){
    let element = this.element,
        width = this.width,
        height = this.height;

    element.style.height = `${height * scale}px`;

    element.style.width = `${width * scale}px`;

    return this;
}

Image3d.prototype.getWidthRatio = function(){
    return this.width / this.height;
}

Image3d.prototype.getHeightRatio = function(){
    return this.height / this.width;
}

Image3d.prototype.setWidth = function(width){
    this.height = this.getHeightRatio() * width;

    this.width = width;

    this.element.style.width = `${this.width}px`;

    this.element.style.height = `${this.height}px`;

    return this;
}

Image3d.prototype.setHeight = function(height){
    this.width = this.getWidthRatio() * height;

    this.height = height;

    this.element.style.width = `${this.width}px`;

    this.element.style.height = `${this.height}px`;

    return this;
}

export default Image3d;