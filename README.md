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
const qbj1 = Qbject();

console.log(qbj1.bar.bar.baz._); // 'undefined'

qbj1.arbitrary.deep.mutation = true;

console.log(qbj1._); // {"arbitrary":{"deep":{"mutation":true}}}

qbj1.foo = 'data';

console.log(qbj1.foo._); // 'data'

const qbj2 = Qbject({foo: 'test'}, 'something');

console.log(qbj2._); // { foo: 'test' }
console.log(qbj2.foo._); // 'test'
console.log(qbj2.bar._); // 'something'
console.log(qbj2.bar.bar._); // 'something'
```
