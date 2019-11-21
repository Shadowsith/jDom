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
                return this.id(selector.substr(1));

            case '.':
                return this.cl(selector.substr(1));

            default:
                return this.tag(selector);
        }
    }

    static inner(selector, children) {
        const elem = this.sel(selector);
        if (children[0] == '.') {
            return elem.getElementsByClassName(children.substr(1));
        } else {
            return elem.getElementsByTagName(children);
        }
    }

    static html(selector, html = '') {
        const list = this.sel(selector);
        let res = [];
        if (selector[0] !== '#') {
            for (let i = 0; i < list.length; i++) {
                if (html === '') {
                    res.push(list[i].innerHTML);
                } else {
                    list[i].innerHTML = html;
                }
            }
            if (res.length > 0) {
                return res;
            }
        } else {
            if (html !== '') {
                list.innerHTML = html;
            } else {
                return list.innerHTML;
            }
        }
    }

    /* event handler */
    static ready(func = (e) => {}) {
        document.addEventListener("DOMContentLoaded", func, true);
    }

    static on(selector = '', handler = '', func = (e) => {}) {
        document.addEventListener(handler, function(e) {
            if (e.target !== undefined && e.target.id == selector) {
                func();
            }
        });
    }

    static handle(selector = '', handler = '', func = (e) => {}) {
        const sel = this.sel(selector);
        if (selector[0] !== '#') {
            for (let i = 0; i < sel.length; i++) {
                sel[i].addEventListener(handler, func, true);
            }
        } else {
            this.sel(selector).addEventListener(handler, func, true);
        }
    }

    static click(selector, func = (e) => {}) {
        this.handle(selector, 'click', func);
    }

    static dblclick(selector, func = (e) => {}) {
        this.handle(selector, 'dblclick', func);
    }

    static hover(selector, func = (e) => {}) {
        this.handle(selector, 'mouseover', func);
    }

    static change(selector, func = (e) => {}) {
        this.handle(selector, 'change', func);
    }

    static select(selector, func = (e) => {}) {
        this.handle(selector, 'select', func);
    }

    static input(selector, func = (e) => {}) {
        this.handle(selector, 'input', func);
    }

    static resize(func = (e) => {}) {
        window.onresize = func;
    }

    static submit(selector, func) {
        this.handle(selector, 'submit', func);
    }

    /* iterator */
    static each(selector, func = (elem) => {}) {
        let elements = document.querySelectorAll(selector);
        for (let i = 0; i < elements.length; i++) {
            func(elements[i]);
        }
    }

    /* ajax */
    static post(param = {
        url: '',
        data: {},
        success: (response) => {},
        error: (response) => {},
    }) {
        const data = this.jsonToUrlEncoded(param.data, null, null);
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
        xhr.send(data);
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