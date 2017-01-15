[![Build Status](https://travis-ci.org/kevinkucharczyk/ember-enchant.svg?branch=master)](https://travis-ci.org/kevinkucharczyk/ember-enchant)

# ember-enchant

An Ember addon for svg graphs.

## Motivation

D3 is a popular choice for creating beautiful and functional data visualisations on the web. It also works well with Ember, but we're still relying on D3 to do most of the DOM manipulation.

Instead, we could use Ember itself to do all the DOM work, since it's perfectly capable of rendering SVGs. We can still use D3 to generate the paths and data, treating it as a set of utility functions - D3 v4 makes this really easy for us, since it's split up into manageable modules.

The aim of this addon is to do just that - providing a set of composable Ember components for a "native" data visualisation experience, while retaining familiar (D3-like) configuration options.

One of the main benefits of this approach is its Fastboot compatibility. Since the graphs don't do any DOM manipulation, the whole SVG structure can be rendered as a whole on the server and then just served to the browser. Hopefully Ember's Glimmer engine will also provide us with improved performance.

## Notice

This addon is very much a work in progress and doesn't include much functionality as of yet. You can expect many breaking changes while this addon is being developed.

## Installation

```
ember install ember-enchant
```

## Running

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Running Tests

* `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).
