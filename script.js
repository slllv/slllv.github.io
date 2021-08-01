//Arrows

document.addEventListener("keydown", (e) => {
            if (e.keyCode == 37) {
                right();
            }
        });

        document.addEventListener("keydown", (e) => {
            if (e.keyCode == 39 ) {
                right();
            }
        });

//The following JavaScript code is used for the right button. If you know the basic JavaScript code then you can understand the js code given below. Once you click on the right button, image number 2 will open. When you click for the second time, image number 3 will open.

function right() {
            if (i == 0) {
                box1.style.opacity = 1;
                box2.style.opacity = 0;
                box3.style.opacity = 0;
                box4.style.opacity = 0;
                info.innerHTML = "Image 1"
                i++
            }
            else if (i == 1) {
                box1.style.opacity = 0;
                box2.style.opacity = 1;
                box3.style.opacity = 0;
                box4.style.opacity = 0;
                info.innerHTML = "Image 2"
                i++
            }
            else if (i == 2) {  
                box1.style.opacity = 0;
                box2.style.opacity = 0;
                box3.style.opacity = 1;
                box4.style.opacity = 0;
                info.innerHTML = "Image 3"
                i++
            }
            else if (i == 3) {
                box1.style.opacity = 0;
                box2.style.opacity = 0;
                box3.style.opacity = 0;
                box4.style.opacity = 1;
                info.innerHTML = "Image 4"
                i = 0;
            }
        }
//The following JavaScript code is used for the left button. Once you click on the left button, the number of the image will go back.

        function left() {
            if (i == 0) {
                box1.style.opacity = 0;
                box2.style.opacity = 0;
                box3.style.opacity = 0;
                box4.style.opacity = 1;
                info.innerHTML = "Image 1"
                i++
            }
            else if (i == 1) {
                box1.style.opacity = 0;
                box2.style.opacity = 0;
                box3.style.opacity = 1;
                box4.style.opacity = 0;
                info.innerHTML = "Image 2"
                i++
            }
            else if (i == 2) {

  
                box1.style.opacity = 0;
                box2.style.opacity = 1;
                box3.style.opacity = 0;
                box4.style.opacity = 0;
                info.innerHTML = "Image 3"
                i++
            }
            else if (i == 3) {
                box1.style.opacity = 1;
                box2.style.opacity = 0;
                box3.style.opacity = 0;
                box4.style.opacity = 0;
                info.innerHTML = "Image 4"
                i = 0;
            }
        }










var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
        document.body.appendChild(css);
    };



