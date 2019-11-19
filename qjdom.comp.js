"use strict";

function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return !!right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var qjDom =
    /*#__PURE__*/
    function() {
        function qjDom() {
            _classCallCheck(this, qjDom);
        }

        _createClass(qjDom, null, [{
            key: "id",

            /* selector */
            value: function id(_id) {
                return document.getElementById(_id);
            }
        }, {
            key: "cl",
            value: function cl(_cl) {
                return document.getElementsByClassName(_cl);
            }
        }, {
            key: "tag",
            value: function tag(_tag) {
                return document.getElementsByTagName(_tag);
            }
        }, {
            key: "sel",
            value: function sel(selector) {
                switch (selector[0]) {
                    case '#':
                        return qjDom.id(selector.substr(1));

                    case '.':
                        return qjDom.cl(selector.substr(1));

                    default:
                        return qjDom.tag(selector);
                }
            }
        }, {
            key: "inner",
            value: function inner(selector, children) {
                    var elem = qjDom.sel(selector);

                    if (children[0] == '.') {
                        return elem.getElementsByClassName(children.substr(1));
                    } else {
                        return elem.getElementsByTagName(children);
                    }
                }
                /* event handler */

        }, {
            key: "ready",
            value: function ready() {
                var func = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function(e) {};
                document.addEventListener("DOMContentLoaded", func, true);
            }
        }, {
            key: "on",
            value: function on() {
                var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
                var handler = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
                var func = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function(e) {};
                document.addEventListener(handler, function(e) {
                    if (e.target && e.target.id == selector) {
                        func;
                    }
                });
            }
        }, {
            key: "handle",
            value: function handle() {
                var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
                var handler = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
                var func = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function(e) {};
                var sel = qjDom.sel(selector);

                if (selector[0] !== '#') {
                    for (var i = 0; i < sel.length; i++) {
                        sel[i].addEventListener(handler, func, true);
                    }
                } else {
                    qjDom.sel(selector).addEventListener(handler, func, true);
                }
            }
        }, {
            key: "click",
            value: function click(selector) {
                var func = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function(e) {};
                qjDom.handle(selector, 'click', func);
            }
        }, {
            key: "dblclick",
            value: function dblclick(selector) {
                var func = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function(e) {};
                qjDom.handle(selector, 'dblclick', func);
            }
        }, {
            key: "hover",
            value: function hover(selector) {
                var func = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function(e) {};
                qjDom.handle(selector, 'mouseover', func);
            }
        }, {
            key: "change",
            value: function change(selector) {
                var func = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function(e) {};
                qjDom.handle(selector, 'change', func);
            }
        }, {
            key: "select",
            value: function select(selector) {
                var func = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function(e) {};
                qjDom.handle(selector, 'select', func);
            }
        }, {
            key: "input",
            value: function input(selector) {
                var func = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function(e) {};
                qjDom.handle(selector, 'input', func);
            }
        }, {
            key: "resize",
            value: function resize() {
                var func = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function(e) {};
                window.onresize = func;
            }
        }, {
            key: "submit",
            value: function submit(selector, func) {
                    qjDom.handle(selector, 'submit', func);
                }
                /* iterator */

        }, {
            key: "each",
            value: function each(selector) {
                    var func = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function(elem) {};
                    var elements = document.querySelectorAll(selector);

                    for (var i = 0; i < elements.length; i++) {
                        func(elements[i]);
                    }
                }
                /* ui */

        }, {
            key: "hide",
            value: function hide(selector) {
                var list = $.sel(selector);

                if (selector[0] !== '#') {
                    for (var i = 0; i < list.length; i++) {
                        list[i].style.display = 'none';
                    }
                } else {
                    list.style.display = 'none';
                }
            }
        }, {
            key: "show",
            value: function show(selector) {
                    var display = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'block';
                    var list = $.sel(selector);

                    if (selector[0] !== '#') {
                        for (var i = 0; i < list.length; i++) {
                            list[i].style.display = display;
                        }
                    } else {
                        list.style.display = display;
                    }
                }
                /* ajax */

        }, {
            key: "post",
            value: function post() {
                var param = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
                    url: '',
                    data: {},
                    success: function success(response) {},
                    error: function error(response) {}
                };
                var self = this;
                var xhr = new XMLHttpRequest();
                xhr.open('POST', param.url, true);

                xhr.onreadystatechange = function() {
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
        }, {
            key: "get",
            value: function get() {
                var param = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
                    url: '',
                    responseType: 'text',
                    success: function success(response) {},
                    error: function error(response) {}
                };
                var xhr = new XMLHttpRequest();
                xhr.responseType = param.responseType;

                xhr.onreadystatechange = function() {
                    if (xhr.readyState === XMLHttpRequest.DONE) {
                        if (xhr.status === 200) {
                            param.success(xhr.responseText);
                        } else {
                            param.error(xhr.responseText);
                        }
                    }
                };

                xhr.open("GET", param.url, true);
                xhr.send();
            }
        }, {
            key: "jsonToUrlEncoded",
            value: function jsonToUrlEncoded(element, key, list) {
                var list = list || [];

                if (_typeof(element) == 'object') {
                    for (var idx in element) {
                        this.jsonToUrlEncoded(element[idx], key ? key + '[' + idx + ']' : idx, list);
                    }
                } else {
                    list.push(key + '=' + encodeURIComponent(element));
                }

                return list.join('&');
            }
        }]);

        return qjDom;
    }();

var $ = qjDom;