<!--

@license Apache-2.0

Copyright (c) 2019 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# itercuprod

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Create an [iterator][mdn-iterator-protocol] which iteratively computes a cumulative product.

<section class="intro">

The cumulative product is defined as

<!-- <equation class="equation" label="eq:cumulative_product" align="center" raw="\begin{align*} p_0 &= x_0 \\ p_1 &= x_1 \cdot p_0 \\ p_2 &= x_2 \cdot p_1 \\ p_n &= x_n \cdot p_{n-1} = x_n \cdot \prod_{i=0}^{n-1} x_i \end{align*}" alt="Equation for the cumulative product."> -->

```math
\begin{align*} p_0 &= x_0 \\ p_1 &= x_1 \cdot p_0 \\ p_2 &= x_2 \cdot p_1 \\ p_n &= x_n \cdot p_{n-1} = x_n \cdot \prod_{i=0}^{n-1} x_i \end{align*}
```

<!-- <div class="equation" align="center" data-raw-text="\begin{align*} p_0 &amp;= x_0 \\ p_1 &amp;= x_1 \cdot p_0 \\ p_2 &amp;= x_2 \cdot p_1 \\ p_n &amp;= x_n \cdot p_{n-1} = x_n \cdot \prod_{i=0}^{n-1} x_i \end{align*}" data-equation="eq:cumulative_product">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@e70489fe2d16d2496f77b516c791cf5c0c078ae1/lib/node_modules/@stdlib/stats/iter/cuprod/docs/img/equation_cumulative_product.svg" alt="Equation for the cumulative product.">
    <br>
</div> -->

<!-- </equation> -->

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

```javascript
import itercuprod from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-iter-cuprod@esm/index.mjs';
```
The previous example will load the latest bundled code from the esm branch. Alternatively, you may load a specific version by loading the file from one of the [tagged bundles](https://github.com/stdlib-js/stats-iter-cuprod/tags). For example,

```javascript
import itercuprod from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-iter-cuprod@v0.2.0-esm/index.mjs';
```

#### itercuprod( iterator )

Returns an [iterator][mdn-iterator-protocol] which iteratively computes a cumulative product.

```javascript
import array2iterator from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-to-iterator@esm/index.mjs';

var arr = array2iterator( [ 2.0, 1.0, 3.0, -7.0, -5.0 ] );
var it = itercuprod( arr );

var p = it.next().value;
// returns 2.0

p = it.next().value;
// returns 2.0

p = it.next().value;
// returns 6.0

p = it.next().value;
// returns -42.0

p = it.next().value;
// returns 210.0
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   If an iterated value is non-numeric (including `NaN`), the function returns `NaN` for **all** future iterations. If non-numeric iterated values are possible, you are advised to provide an [`iterator`][mdn-iterator-protocol] which type checks and handles non-numeric values accordingly.
-   For [iterators][mdn-iterator-protocol] which can generate many values or which may output large numbers, care should be taken to prevent overflow.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import runif from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-iter-uniform@esm/index.mjs';
import itercuprod from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-iter-cuprod@esm/index.mjs';

// Create an iterator for generating uniformly distributed pseudorandom numbers:
var rand = runif( -10.0, 10.0, {
    'seed': 1234,
    'iter': 100
});

// Create an iterator for iteratively computing a cumulative product:
var it = itercuprod( rand );

// Perform manual iteration...
var v;
while ( true ) {
    v = it.next();
    if ( typeof v.value === 'number' ) {
        console.log( 'prod: %d', v.value );
    }
    if ( v.done ) {
        break;
    }
}

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/stats-iter/cusum`][@stdlib/stats/iter/cusum]</span><span class="delimiter">: </span><span class="description">create an iterator which iteratively computes a cumulative sum.</span>
-   <span class="package-name">[`@stdlib/stats-iter/prod`][@stdlib/stats/iter/prod]</span><span class="delimiter">: </span><span class="description">compute the product of all iterated values.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-iter-cuprod.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-iter-cuprod

[test-image]: https://github.com/stdlib-js/stats-iter-cuprod/actions/workflows/test.yml/badge.svg?branch=v0.2.0
[test-url]: https://github.com/stdlib-js/stats-iter-cuprod/actions/workflows/test.yml?query=branch:v0.2.0

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-iter-cuprod/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-iter-cuprod?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-iter-cuprod.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-iter-cuprod/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-iter-cuprod/tree/deno
[deno-readme]: https://github.com/stdlib-js/stats-iter-cuprod/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/stats-iter-cuprod/tree/umd
[umd-readme]: https://github.com/stdlib-js/stats-iter-cuprod/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/stats-iter-cuprod/tree/esm
[esm-readme]: https://github.com/stdlib-js/stats-iter-cuprod/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/stats-iter-cuprod/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-iter-cuprod/main/LICENSE

[mdn-iterator-protocol]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterator_protocol

<!-- <related-links> -->

[@stdlib/stats/iter/cusum]: https://github.com/stdlib-js/stats-iter-cusum/tree/esm

[@stdlib/stats/iter/prod]: https://github.com/stdlib-js/stats-iter-prod/tree/esm

<!-- </related-links> -->

</section>

<!-- /.links -->
