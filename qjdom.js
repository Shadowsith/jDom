class qjDom {
    /* selector */
    static id(id) {
        return document.getElementById(id);
    }

    static cl(cl) {
        return document.getElementsByClassName(cl);
    }

    static tag(tag) {
        return document.getElementsByTagName(tag);
    }

    static sel(selector) {
        switch (selector[0]) {
            case '#':
                return qjDom.id(selector.substr(1));

            case '.':
                return qjDom.cl(selector.substr(1));

            default:
                return qjDom.tag(selector);
        }
    }

    static inner(selector, children) {
        const elem = qjDom.sel(selector);
        if (children[0] == '.') {
            return elem.getElementsByClassName(children.substr(1));
        } else {
            return elem.getElementsByTagName(children);
        }
    }

    /* event handler */
    static ready(func = (e) => {}) {
        document.addEventListener("DOMContentLoaded", func, true);
    }

    static on(selector = '', handler = '', func = (e) => {}) {
        document.addEventListener(handler, function(e) {
            if (e.target && e.target.id == selector) {
                func;
            }
        });
    }

    static handle(selector = '', handler = '', func = (e) => {}) {
        const sel = qjDom.sel(selector);
        if (selector[0] !== '#') {
            for (let i = 0; i < sel.length; i++) {
                sel[i].addEventListener(handler, func, true);
            }
        } else {
            qjDom.sel(selector).addEventListener(handler, func, true);
        }
    }

    static click(selector, func = (e) => {}) {
        qjDom.handle(selector, 'click', func);
    }

    static dblclick(selector, func = (e) => {}) {
        qjDom.handle(selector, 'dblclick', func);
    }

    static hover(selector, func = (e) => {}) {
        qjDom.handle(selector, 'mouseover', func);
    }

    static change(selector, func = (e) => {}) {
        qjDom.handle(selector, 'change', func);
    }

    static select(selector, func = (e) => {}) {
        qjDom.handle(selector, 'select', func);
    }

    static input(selector, func = (e) => {}) {
        qjDom.handle(selector, 'input', func);
    }

    static resize(func = (e) => {}) {
        window.onresize = func;
    }

    static submit(selector, func) {
        qjDom.handle(selector, 'submit', func);
    }

    /* iterator */
    static each(selector, func = (elem) => {}) {
        let elements = document.querySelectorAll(selector);
        for (let i = 0; i < elements.length; i++) {
            func(elements[i]);
        }
    }

    /* ui */
    static hide(selector) {
        let list = $.sel(selector);
        if (selector[0] !== '#') {
            for (let i = 0; i < list.length; i++) {
                list[i].style.display = 'none';
            }
        } else {
            list.style.display = 'none';
        }
    }

    static show(selector, display = 'block') {
        const list = $.sel(selector);
        if (selector[0] !== '#') {
            for (let i = 0; i < list.length; i++) {
                list[i].style.display = display;
            }
        } else {
            list.style.display = display;
        }
    }

    /* ajax */
    static post(param = {
        url: '',
        data: {},
        success: (response) => {},
        error: (response) => {},
    }) {
        const self = this;
        const xhr = new XMLHttpRequest();
        xhr.open('POST', param.url, true);
        xhr.onreadystatechange = () => {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    param.success(xhr.responseText);
                } else {
                    param.error(xhr.responseText);
                }
            }
        };
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.send(self.jsonToUrlEncoded(param.data));
    }

    static get(param = {
        url: '',
        responseType: 'text',
        success: (response) => {},
        error: (response) => {}
    }) {
        const xhr = new XMLHttpRequest();
        xhr.responseType = param.responseType;
        xhr.onreadystatechange = () => {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    param.success(xhr.responseText);
                } else {
                    param.error(xhr.responseText);
                }
            }
        }
        xhr.open("GET", param.url, true);
        xhr.send();
    }

    static jsonToUrlEncoded(element, key, list) {
        var list = list || [];
        if (typeof(element) == 'object') {
            for (var idx in element)
                this.jsonToUrlEncoded(element[idx], key ? key + '[' + idx + ']' : idx, list);
        } else {
            list.push(key + '=' + encodeURIComponent(element));
        }
        return list.join('&');
    }
}
var $ = qjDom;