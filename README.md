# jsdoc-plugin-abitbol

A jsdoc plugin which simplifies [abitbol](https://github.com/wanadev/abitbol) classes documentation.

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

Use the following syntax for a class :

```js
/**
* My class.
*
* @class mymodule.MyClass
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
     * @member name
     * @type {String}
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

For a module :

```js
/**
 * My module.
 * @module mymodule
 */
module.exports = {
    /**
     * My class instance.
     * @type mymodule.MyClass
     */
     myClass: null,
}
```

## Changelog
- **0.1.2**: Supports event tags
- **0.1.1**: Updates documentation
- **0.1.0**: Initial release
