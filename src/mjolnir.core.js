var mjolnir = (function () {
    'use strict';

    var library = function (selector, root) {
            var doc = root || document;
            return doc.querySelectorAll(selector);
        },
        core = Object.create(null);

    core.mixin = function (obj, mixin) {
        var i;
        for (i in mixin) {
            if (typeof obj.prototype[i] !== 'function') {
                Object.defineProperty(obj.prototype, i, {
                    value: mixin[i],
                    configurable: false,
                    enumerable: false,
                    writable: false
                });
            }
        }
    };
    core.forEach = function (fn, scope) {
        var i;
        for (i = 0; i < this.length; i += 1) {
            fn.call(scope, this[i], i, this);
        }
    };
    core.some = function (fn, scope) {
        var i;
        for (i = 0; i < this.length; i += 1) {
            if (fn.call(scope, this[i], i, this)) {
                return true;
            }
        }
        return false;
    };

    library.li = Object.create(null);
    library.li.core = core;
    return library;
}());
