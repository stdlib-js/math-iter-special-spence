/*
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

// TypeScript Version: 4.1

/// <reference types="@stdlib/types"/>

import { Iterator as Iter, IterableIterator } from '@stdlib/types/iter';

// Define a union type representing both iterable and non-iterable iterators:
type Iterator = Iter | IterableIterator;

/**
* Returns an iterator which iteratively evaluates Spence's function.
*
* ## Notes
*
* -   If an environment supports `Symbol.iterator` **and** a provided iterator is iterable, the returned iterator is iterable.
*
* @param iterator - input iterator
* @returns iterator
*
* @example
* var uniform = require( '@stdlib/random-iter-uniform' );
*
* var iter = iterSpence( uniform( 0.0, 100.0 ) );
*
* var v = iter.next().value;
* // returns <number>
*
* v = iter.next().value;
* // returns <number>
*
* v = iter.next().value;
* // returns <number>
*
* // ...
*/
declare function iterSpence( iterator: Iterator ): Iterator;


// EXPORTS //

export = iterSpence;
