# Fragment Identifiers for finding things in HTML

The [Apache Annotator](http://annotator.apache.org/) project is currently
continuing the work on the
[Selectors and States](https://www.w3.org/TR/selectors-states/) work begun by
the [Web Annotation Working Group](https://www.w3.org/annotation/) at the W3C.

These experiments take a slightly different approach, but follow a similar
pattern of extensibility--both approaches follow the
[XPointer Framework syntax](https://www.w3.org/TR/2003/REC-xptr-framework-20030325/#syntax).

The approach taken here is to map existing JS APIs into the HTML Fragment
Identifier space while leaving the door open to other selection systems in the
future.

Selector examples--which you can test in `index.html`--are:

* `#querySelector(.content h3)`
* `#querySelectorAll(.content li)`
* `#evaluate(//*[@class='content']//li)`

The next steps would be to turn the found elements into DOM Selection
hilights and scroll the view port to the first visible element found following
the process describe in [Navigating to a fragment](https://html.spec.whatwg.org/multipage/browsing-the-web.html#scroll-to-fragid) in HTML.

# License

MIT
