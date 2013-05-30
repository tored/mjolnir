mjolnir
=======

Frontend JavaScript library for crushing that DOM with a hammer!

Expands the DOM API to be actually usable.

mjolnir.core:
```javascript
mjolnir(selector, root);
```

mjolnir.dom:
```javascript
Node.attr(name, value);
Node.addClass(cls);
Node.removeClass(cls);
Node.hasClass(cls);
Node.toggleClass(cls);

NodeList.attr(name, value);
NodeList.getAttribute(name);
NodeList.setAttribute(name, value);
NodeList.addClass(cls);
NodeList.removeClass(cls);
NodeList.hasClass(cls);
NodeList.toggleClass(cls);
NodeList.addEventListener(type, listener, useCapture);
NodeList.removeEventListener(type, listener, useCapture);

HTMLCollection.attr(name, value);
HTMLCollection.getAttribute(name);
HTMLCollection.setAttribute(name, value);
HTMLCollection.addClass(cls);
HTMLCollection.removeClass(cls);
HTMLCollection.hasClass(cls);
HTMLCollection.toggleClass(cls);
HTMLCollection.addEventListener(type, listener, useCapture);
HTMLCollection.removeEventListener(type, listener, useCapture);
```