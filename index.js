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
            get(target, rootkey) {
                if (rootkey == valueKey) {
                    return target;
                }
                else {
                    let objReference = obj;
                    const path = [];
                    const proxy = new Proxy(objReference, {
                        get(target, key) {
                            if (key == valueKey) {
                                return objReference;
                            }
                            else {
                                objReference = objReference ? objReference[key] || _default : _default;
                                path.push(key)
                                return proxy;
                            }
                        },
                        set(_, key, value) {
                            if (typeof obj[rootkey] != 'object') {
                                obj[rootkey] = {};
                            }
                            path.shift(); // we already did the root key
                            let target = obj[rootkey];
                            path.push(key); // add the leaf
                            path.forEach((cd, i) => {
                                if (i == path.length - 1) {
                                    target[cd] = value;
                                }
                                else {
                                    if (typeof target[cd] != 'object') {
                                        target[cd] = {};
                                    }
                                    target = target[cd];
                                }
                            });
                        },
                    });

                    return proxy[rootkey];
                }
            }
        });
    };
}));
