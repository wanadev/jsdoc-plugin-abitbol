# jsdoc-plugin-abitbol
[![npm version](https://badge.fury.io/js/jsdoc-plugin-abitbol.svg)](https://www.npmjs.com/package/jsdoc-plugin-abitbol)

A [jsdoc](https://github.com/jsdoc3/jsdoc) plugin which simplifies [abitbol](https://github.com/wanadev/abitbol) classes documentation.

## Installation

Install `jsdoc-plugin-abitbol`

```shell
npm install --save-dev jsdoc-plugin-abitbol
```

Add an entry in the `plugins` list of your `jsdoc` config file :

```json
{
    "plugins": ["node_modules/jsdoc-plugin-abitbol"]
}
```

## Usage

### Classes

```js
/**
* My class.
*
* @class mynamespace.mymodule.MyClass
* @extends Class
* @param params {Object} The parameters.
* @emits myEvent
*/
const MyClass = Class.$extend({

    /**
     * My event.
     *
     * @event myEvent
     * @type {object}
     * @property {boolean} The property.
     */

    __init__(params) {
        // ...
    },

    /**
     * The name.
     *
     * @member {String} name
     * @default null
     */
    getName() {
        // ...
    },
    setName(name) {
        // ...
    },

    /**
     * My method.
     *
     * @param {Object} params The parameters.
     * @return {String} The result.
     */
    method1(params) {
        // ...
    },
}
```

### Modules

Direct export :

```js
/**
 * My module.
 *
 * @module mynamespace.mymodule
 */
module.exports = {
    /**
     * My class instance.
     *
     * @type mynamespace.mymodule.MyClass
     */
     myClass: null,
}
```

For indirect export, use `@exports` instead of `@module` :

```js
/**
 * My module.
 *
 * @exports mynamespace.mymodule
 */
const myModule = {
    /**
     * My class instance.
     *
     * @type mynamespace.mymodule.MyClass
     */
     myClass: null,
}

module.exports = myModule;
```

## Changelog
- **0.1.3**: Fixes a comment insertion bug
- **0.1.2**: Supports event tags
- **0.1.1**: Updates documentation
- **0.1.0**: Initial release
