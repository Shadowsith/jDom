# qjDom
jquery like lightweight javascript lib
---

qjDom is a small, static ECMA 6 JavaScript class that imitates some basic functions of jQuery.

## Use cases
On small html files like formulars or simple HTML Websites with less animations you doesn't want to use jQuery cause you only use a small amount of features of it. This JavaScript lib is written for this cases.

## Requirements
None

## Browser Support
With normal qjdom.min.js it should work on all modern browsers. If the compatiblity file qjdom.comp.min.js is included instead it should work on old pre ECMA 5 browsers (IE9 etc.) too.

## Documentation
Like jQuery you can use $ for the methods.

### Selectors
|Name|Return Value|Description|Example|
|----|------------|-----------|-------|
|$.id(id)| HTMLElement| Returns a HTMLElement by Id| $.id('test')|
|$.cl(cl)| HTMLCollectionOf<Element>| Returns HTMLElements by Class| $.cl('btn')|
|$.tag(tag)| HTMLCollectionOf<any>| Returns elements by tag| $.tag('input')|
|$.sel(selector)|any| dynamic selector, detects '#id', '.class' or 'tag' selector and returns one HTMLElement or a collection|

### Event Handler
**Information**: Eventhandler selectors can be '#id', '.class' or 'tag' selectors

|Name|Description|
|----|-----------|
|$.ready(func = (e) => {})| Waits until the document is fully loaded|
|$.resize(func = (e) => {}| Wrapper for window.onresize = function |
|$.on(selector = '', handler = '', lambda = () => {})| For dynamic content like jQuery.on event|
|$.handle(selector = '', handler = '', lambda = () => {})| Global handler which could be used for all diffrent JavaScript event handler types. All other event handler are syntastic sugar of $.handle|
|$.click(selector, func = (e) => {})| Click event handler|
|$.dblclick(selector, func = (e) => {})| Double click event handler|
|$.hover(selector, func = (e) => {})| Mouse over event handler|
|$.change(selector, func = (e) => {})| Change event handler|
|$.select(selector, func = (e) => {})| Select event handler|
|$.input(selector, func = (e) => {})| Input change event handler|
|$.submit(selector, func = (e) => {})| Submit event handler for forms|

### Iterator
|Name|Description|
|----|-----------|
|$.each(selector, func = (elem) => {})| Iterates over each element with specific query selector|

### UI
|Name|Description|
|----|-----------|
|$.hide(selector)| Hides element(s) |
|$.show(selector, display = 'block')| Shows element, default setting is display: block |

### AJAX
**Information**: Ajax methods use the XMLHttpRequest class.

|Name|Description|
|----|-----------|
|$.post({url: '', data: {}, success: (respone) => {}, error: (response) => {}})| Sends POST data in content type application/x-www-form-urlencoded. The response can be handled with success and error lambda functions|
|$.get({url: '', responseType = 'text', success: (respone) => {}, error: (response) => {}})| Gets requestet data as text or other response type. The response can be handled with success and error lambda functions|

## Examples
I recommend to have a look on the index.php file.


## License 
MIT
