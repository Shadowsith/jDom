qjDom.hide = function(selector) {
    let list = this.sel(selector);
    if (selector[0] !== '#') {
        for (let i = 0; i < list.length; i++) {
            list[i].style.display = 'none';
        }
    } else {
        list.style.display = 'none';
    }
}

qjDom.show = function(selector, display = 'block') {
    const list = $.sel(selector);
    if (selector[0] !== '#') {
        for (let i = 0; i < list.length; i++) {
            list[i].style.display = display;
        }
    } else {
        list.style.display = display;
    }
}

qjDom.fade = function(selector, ms = 50) {
    const list = this.sel(selector);
    let op = 1;
    const timer = setInterval(function() {
        if (selector[0] !== '#') {
            for (let i = 0; i < list.length; i++) {
                if (op <= 0.1) {
                    clearInterval(timer);
                    list[i].style.display = 'none';
                }
                list[i].style.opacity = op;
                list[i].style.filter = 'alpha(opacity=' + op * 100 + ")";
                op -= op * 0.1;
            }
        } else {
            if (op <= 0.1) {
                clearInterval(timer);
                list.style.display = 'none';
            }
            list.style.opacity = op;
            list.style.filter = 'alpha(opacity=' + op * 100 + ")";
            op -= op * 0.1;
        }
    }, ms);
}

qjDom.unfade = function(selector, ms = 30) {
    const list = this.sel(selector);
    let op = 0.1;
    if (selector[0] !== '#') {
        for (let i = 0; i < list.length; i++) {
            list[i].style.display = 'block';
        }
    } else {
        list.style.display = 'block';
    }
    const timer = setInterval(function() {
        if (selector[0] !== '#') {
            for (let i = 0; i < list.length; i++) {
                if (op >= 1) {
                    clearInterval(timer);
                }
                list[i].style.opacity = op;
                list[i].style.filter = 'alpha(opacity=' + op * 100 + ")";
                op += op * 0.1;
            }
        } else {
            if (op >= 1) {
                clearInterval(timer);
            }
            list.style.opacity = op;
            list.style.filter = 'alpha(opacity=' + op * 100 + ")";
            op += op * 0.1;
        }
    }, ms);
}

qjDom.remove = function(selector) {
    let list = this.sel(selector);
    console.log(list);
    if (selector[0] !== '#') {
        for (let i = 0; i < list.length; i++) {
            list[i].remove();
        }
        list[0].remove();
    } else {
        list.remove();
    }
}

qjDom.slideDown = function(selector, height = '50px', transition = 1) {
    const list = this.sel(selector);
    if (selector[0] !== '#') {
        for (let i = 0; i < list.length; i++) {
            list[i].style.overflow = 'hidden';
            list[i].style.transition = `height ${transition}s ease-in-out`;
            list[i].style.height = height;

            setTimeout(function() {
                list[i].style.overflow = "auto";
            }.bind(list[i]), 1000);
        }
    } else {
        list.style.overflow = 'hidden';
        list.style.transition = `height ${transition}s ease-in-out`;
        list.style.height = height;

        setTimeout(function() {
            list.style.overflow = "auto";
        }.bind(list), 1000);
    }
}

qjDom.slideUp = function(selector, transition = 1) {
    const list = this.sel(selector);
    if (selector[0] !== '#') {
        for (let i = 0; i < list.length; i++) {
            list[i].style.overflow = "hidden";
            list[i].style.transition = `height ${transition}s ease-in-out`;
            list[i].style.height = "0";
        }
    } else {
        list.style.overflow = "hidden";
        list.style.transition = `height ${transition}s ease-in-out`;
        list.style.height = "0";
    };
}
var $ = qjDom;