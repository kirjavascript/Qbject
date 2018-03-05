Optional object chaining & creation with ES6 Proxys

Arbitrary property access with a default value. When setting a property, missing objects in the chain are created automatically.

Exports a global 'Qbject' when dumped in your page as a script tag.

You could use [this](https://lodash.com/docs/4.17.4#get) or [this](https://www.npmjs.com/package/babel-plugin-transform-optional-chaining) or [this](https://github.com/tc39/proposal-optional-chaining) instead if you just need optional chaining.

Install
---

```bash
$ yarn add qbject
```

Params
---

    object to wrap ({})
    default value (undefined)
    unwrap key ('_')

Examples
---

```javascript
import Qbject from 'qbject';

const obj1 = Qbject();

console.log(obj1.bar.bar.baz._); // 'undefined'

obj1.arbitrary.deep.mutation = true;

console.log(obj1._); // {"arbitrary":{"deep":{"mutation":true}}}

obj1.foo = 'data';

console.log(obj1.foo._); // 'data'

const obj2 = Qbject({foo: 'test'}, 'something');

console.log(obj2._); // { foo: 'test' }
console.log(obj2.foo._); // 'test'
console.log(obj2.bar._); // 'something'
console.log(obj2.bar.bar._); // 'something'
```
