[![Build Status](https://travis-ci.org/tdumitrescu/angular-blocky-text.png?branch=master)](https://travis-ci.org/tdumitrescu/angular-blocky-text)

# angular-blocky-text

An AngularJS Bower component which transforms simple text into a character-by-character list of stylable HTML spans.

Sometimes a custom font just isn't enough, and you need more intricate CSS control over the appearance and behavior of each character. This works especially well for scoreboard-style numeric values, like this:

![blocky-text sample](sample-img.png "blocky-text sample")

## Usage

- Install into your app with Bower:

```sh
$ bower install --save angular-blocky-text
```

- Require the component code in `bower_components/angular-blocky-text/blocky-text.js`

- Declare module dependency `tdumitrescu.blocky-text` in your Angular app:

```javascript
angular.module('myApp', ['tdumitrescu.blocky-text']);
```

- Use directive `td-blocky-text` in your markup:

```html
<td-blocky-text text="highScore()" divider="."/>
```

The `divider` attribute is optional and specifies a character which can have special styles applied, e.g., the `:` in `05:13`, or `/` in `12/21/2013`.

This will expand as follows when `$scope.highScore()` returns 13.2:

```html
<span class="td-blocky-text">
  <span class="td-blocky-text-char">1</span>
  <span class="td-blocky-text-char">3</span>
  <span class="td-blocky-text-char divider">.</span>
  <span class="td-blocky-text-char">2</span>
</span>
```

- Style the CSS class `td-blocky-text-char` and `td-blocky-text-char divider` as desired to apply a style to each character:

```css
.td-blocky-text-char {
  display:       inline-block;
  width:         1em;
  height:        1.5em;

  margin-left:   1px;
  margin-right:  1px;
  padding:       2px;
  text-align:    center;

  color:            white;
  background-color: red;
  border:           1px solid red;
 }

.td-blocky-text-char.divider {
  width:  0.5em;
  border: 0px;

  color:            white;
  background-color: transparent;
}
```

## Running tests

```sh
$ npm test
```
