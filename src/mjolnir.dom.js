/*global mjolnir, Node, NodeList, HTMLCollection */

(function (library) {
    'use strict';

    var NodeMixin,
        NodeListMixin;

    NodeMixin = Object.create(null);
    NodeMixin.attr = function (name, value) {
        var prop,
            result;

        if (typeof name === 'object') {
            for (prop in name) {
                if (name.hasOwnProperty(prop)) {
                    this.setAttribute(prop, name[prop]);
                }
            }
            result = this;
        } else {
            if (value) {
                this.setAttribute(name, value);
                result = this;
            } else {
                result = this.getAttribute(name);
            }
        }

        return result;
    };
    NodeMixin.addClass = function (cls) {
        this.classList.add(cls);
        return this;
    };
    NodeMixin.hasClass = function (cls) {
        return this.classList.contains(cls);
    };
    NodeMixin.removeClass = function (cls) {
        this.classList.remove(cls);
        return this;
    };
    NodeMixin.toggleClass = function (cls) {
        if (this.hasClass(cls)) {
            this.removeClass(cls);
        } else {
            this.addClass(cls);
        }
        return this;
    };
    library.li.core.mixin(Node, NodeMixin);
 
    NodeListMixin = Object.create(null);
    NodeListMixin.forEach = library.li.core.forEach;
    NodeListMixin.some = library.li.core.some;

    NodeListMixin.getAttribute = function (name) {
        return this[0].getAttribute(name);
    };
    NodeListMixin.setAttribute = function (name, value) {
        this.forEach(function (n) {
            n.setAttribute(name, value);
        });
        return this;
    };
    NodeListMixin.attr = function (first, second) {
        var i,
            result;

        if (typeof first === 'object' || second) {        
            for (i = 0; i < this.lenght; i += 1) {
                this[i].attr(first);
            }
            result = this;
        } else {
            result = this.getAttribute(first);
        }
        return result;
    };
    NodeListMixin.addClass = function (cls) {
        this.forEach(function (n) {
            n.addClass(cls);
        });
        return this;
    };
    NodeListMixin.hasClass = function (cls) {
        this.some(function (n) {
            if (n.hasClass(cls)) {
                return true;
            }
        });
        return false;
    };
    NodeListMixin.removeClass = function (cls) {
        this.forEach(function (n) {
            n.removeClass(cls);
        });
        return this;
    };
    NodeListMixin.toggleClass = function (cls) {
        this.forEach(function (n) {
            n.toggleClass(cls);
        });
        return this;
    };
    NodeListMixin.addEventListener = function (type, listener, useCapture) {
        this.forEach(function (n) {
            n.addEventListener(type, listener, useCapture);
        });
        return this;
    };
    NodeListMixin.removeEventListener = function (type, listener, useCapture) {
        this.forEach(function (n) {
            n.removeEventListener(type, listener, useCapture);
        });
        return this;
    };
    library.li.core.mixin(NodeList, NodeListMixin);
    library.li.core.mixin(HTMLCollection, NodeListMixin);
}(mjolnir));
