(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof module === 'object' && module.exports) {
        module.exports = factory();
    } else {
        root.Qbject = factory();
  }
}(typeof self !== 'undefined' ? self : this, function () {

    return function(obj = {}, _default = void 0, valueKey = '_') {
        return new Proxy(obj, {
            get(target, key) {
                if (key == valueKey) {
                    return target;
                }
                else {
                    let clone = Object.assign({}, obj);
                    const proxy = new Proxy(clone, {
                        get(target, key) {
                            if (key == valueKey) {
                                return clone;
                            }
                            else {
                                clone = clone ? clone[key] || _default : _default;
                                return proxy;
                            }
                        }
                    });

                    return proxy[key];
                }
            }
        });
    };
}));
