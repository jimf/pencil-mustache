# pencil-mustache

Simple [mustache-style][mustache] string interpolation.

__pencil-mustache__ is an ultra-minimal mustache-style interpolation micro
library. It only implements simple interpolation of double and triple-mustache
placeholder expressions (the former being escaped). No pre-compiling. No
caching. No partials. No helpers.

[![npm Version][npm-badge]][npm]
[![Build Status][build-badge]][build-status]
[![Test Coverage][coverage-badge]][coverage-result]
[![Dependency Status][dep-badge]][dep-status]

## Installation

Install using npm:

    $ npm install pencil-mustache

## Usage

Given the following HTML string:

```html
<section>
  <h1>{{headline}}</h1>
  {{{description}}}
</section>
```

and this context:

```js
{
    headline: 'Fish & Chips',
    description: '<span>A house specialty!</span>'
}
```

results in:

```html
<section>
  <h1>Fish &amp; Chips</h1>
  <span>A house specialty!</span>
</section>
```

All together:

```js
var mustache = require('pencil-mustache'),
    html = require('./section.html'),
    context = {
        headline: 'Fish & Chips',
        description: '<span>A house specialty!</span>'
    },
    template = mustache(html);

document.querySelector('.my-target').innerHtml = template(context);
```

## License

MIT

[build-badge]: https://img.shields.io/travis/jimf/pencil-mustache/master.svg
[build-status]: https://travis-ci.org/jimf/pencil-mustache
[npm-badge]: https://img.shields.io/npm/v/pencil-mustache.svg
[npm]: https://www.npmjs.org/package/pencil-mustache
[coverage-badge]: https://img.shields.io/coveralls/jimf/pencil-mustache.svg
[coverage-result]: https://coveralls.io/r/jimf/pencil-mustache
[dep-badge]: https://img.shields.io/david/jimf/pencil-mustache.svg
[dep-status]: https://david-dm.org/jimf/pencil-mustache
[mustache]: https://github.com/janl/mustache.js/
