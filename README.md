# jDom
jquery like lightweight javascript lib
---

jDom is a small, static ECMA 6 JavaScript class that imitates some basic functions of jQuery.

## Use cases
On small html files like formulars or simple HTML Websites with less animations you doesn't want to use jQuery cause you only use a small amount of features of it. This JavaScript lib is written for this cases.

## Requirements
None

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
|$.ready(() => {})|Waits until the document is fully loaded|
|$.on(selector = '', handler = '', lambda = () => {})| For dynamic content like jQuery.on event|
|$.handle(selector = '', handler = '', lambda = () => {})| Global handler which could be used for all diffrent JavaScript event handler types. All other event handler are syntastic sugar of $.handle|
|$.click(selector, lambda = () => {})| Click event handler|
|$.change(selector, lambda = () => {})| Change event handler|
|$.select(selector, lambda = () => {})| Select event handler|
|$.submit(selector, lambda = () => {})| Submit event handler for forms|

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
