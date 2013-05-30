mjolnir
=======

Frontend JavaScript library for crushing that DOM with a hammer!

Why not have a DOM library to work transparently with the DOM API without resorting to kludges?

Mjolnir expands the DOM API to be actually usable where DOM elements fetched with DOM API has access to the same
methods as DOM elements fetched with the library.

Mjolnir focuses on supporting modern browsers by using HTML5 and EcmaScript5 API. This guarantees less cruft and better performance.

Isn't this 100% pure evil?
--------------------------

When setting enumerable to false when doing Object.defineProperty, added prototype properties can be hidden from for in statements. 

API
---

See examples/ for code examples.


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

How about legacy support?
-------------------------
No, but the library is built in mind that it would be possible to to add a mjolnir.legacy.js file.