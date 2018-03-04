Qbject
===

Optional object chaining with ES6 Proxys

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

console.log(qbj1.foo.valueOf); // prints 'data'
console.log(qbj1.bar.bar.baz.valueOf); // prints 'undefined'
console.log(qbj1.foo.valueOf); // prints 'data'

const qbj2 = new Qbject({foo: 'test'}, 'something');

console.log(qbj2.valueOf); // prints { foo: 'test' }
console.log(qbj2.foo.valueOf); // prints 'test'
console.log(qbj2.bar.valueOf); // prints 'something'
console.log(qbj2.bar.bar.valueOf); // prints 'something'
```
