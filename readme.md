# @harexs/pack-await

Don't need use try..catch, Promise to package await results

## Install

```
$ npm install @harexs/pack-await
```

## Usage

```js
import pAwait from "@harexs/pack-await";

const p1 = () => Promise.reject("harexs");
const [res, err] = pAwait(p1()); // [null,'harexs']

const p2 = () => Promise.resolve({ code: 200, msg: "OK", data: [] });
const [res, err] = pAwait(p1()); // [{code:200,msg:'OK',data:[]},null]

//use errObj
const p3 = () => Promise.resolve({ code: 200, msg: "OK", data: [] });
const [res, err] = pAwait(p3(), { msg: "change msg" }); // [{code:200,msg:'change msg',data:[]},null]
```
