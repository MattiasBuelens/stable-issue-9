var acceptLanguage = require('accept-language');

function component() {
    var element = document.createElement('div');

    var test = acceptLanguage.create();
    test.languages(['en']);

    element.innerHTML = test.get('en-US,en;q=0.5');

    return element;
}

document.body.appendChild(component());
