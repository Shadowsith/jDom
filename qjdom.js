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
    static ready(lambda = (e) => {}) {
        document.addEventListener("DOMContentLoaded", lambda);
    }

    static on(selector = '', handler = '', lambda = () => {}) {
        document.addEventListener(handler, function(e) {
            if (e.target && e.target.id == 'selector') {
                lambda;
            }
        });
    }

    static handle(selector = '', handler = '', lambda = () => {}) {
        qjDom.sel(selector).addEventListener(handler, lambda);
    }

    static click(selector, lambda) {
        qjDom.handle(selector, 'click', lambda);
    }

    static change(selector, lambda) {
        qjDom.handle(selector, 'change', lambda);
    }

    static select(selector, lambda) {
        qjDom.handle(selector, 'select', lambda);
    }

    static submit(selector, lambda) {
        qjDom.handle(selector, 'submit', lambda);
    }

    /* iterator */
    static each(selector, lambda = (elem) => {}) {
        let elements = document.querySelectorAll(selector);
        for (let elem of elements) {
            lambda(elem);
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
