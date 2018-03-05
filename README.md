Optional object chaining with ES6 Proxys

You should use [this](https://www.npmjs.com/package/babel-plugin-transform-optional-chaining) or [this](https://github.com/tc39/proposal-optional-chaining) instead if you can

Install
---

```bash
$ yarn add qbject
```

Docs
---

Qbject(<i>object to wrap</i>, <i>default value</i>)

Exports a global 'Qbject' when dumped in your page as a script tag

Examples
---

```javascript
import Qbject from 'qbject';

const qbj1 = new Qbject();

qbj1.foo = 'data';

console.log(qbj1.foo._); // prints 'data'
console.log(qbj1.bar.bar.baz._); // prints 'undefined'

const qbj2 = new Qbject({foo: 'test'}, 'something');

console.log(qbj2._); // prints { foo: 'test' }
console.log(qbj2.foo._); // prints 'test'
console.log(qbj2.bar._); // prints 'something'
console.log(qbj2.bar.bar._); // prints 'something'
```
