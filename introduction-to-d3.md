# D3 - Data Driven Documents

### Introduction
* D3 is a library built on JavaScript, HTML and CSS3. (D3 is not a language on its own).
* As the name states, D3 is very helful when workin with (and especially visualizing) data-heavy documents.
* Visuals can range from static images to dynamic animations.
* D3 is an open source and [highly documented](https://d3js.org/) library.

### Getting Started
1. Add D3 library to your html document with the `<script>` tag.
  * CDN: `<script src="https://d3js.org/d3.v3.min.js" charset="utf-8"></script>`
  * Download the code and include it in your files
2. Create an SVG canvas to draw on
3. Create shapes on canvas
4. Styling & animations
5. Connect to real data source (JSON parsing)

### Resources
* [D3 Docs](https://github.com/d3/d3/wiki)
* [20 D3 video tutorials by D3 Vienno](https://www.youtube.com/playlist?list=PL6il2r9i3BqH9PmbOf5wA5E1wOG3FT22p)
* [D3 Gallery: 100+ very advanced examples, often with source-code](https://github.com/d3/d3/wiki/Gallery)
* [D3 101 with code-examples and video tutorials from scratch & 100+ code examples](http://github.com/curran/screencasts)

### Common pitfalls
* D3 selectors rely on DOM elements. Make sure that all the DOM elements are loaded before the script is executed.
  * __on-page-script:__ Add script at the bottom of the page
  * __linked file _(preferred)_:__ Wrap your script in an event listener
    ``document.addEventListener("DOMContentLoaded", function(e) { // Your D3 code });``
* Your drawings are rendered on the SVG canvas: If you go outside of that range, it gets cut off.
  * Expand your SVG canvas
  * Auto-resize your image to fit canvas
* D3 is an extensive library with many geometric configurations, shapes and styles. Make sure to understand what you are doing: Don't recycle given examples from the D3 code base.