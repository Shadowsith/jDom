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
var $ = qjDom;