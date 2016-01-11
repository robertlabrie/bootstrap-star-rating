# bootstrap-star-rating
A pure jQuery bootstrap star rating - no extra icons or CSS please  - [Try it on JSFiddle](https://jsfiddle.net/robertlabrie/73on78ff/4/)

Why? Because it took me less time to make this than I wasted Googling for one. It doesn't do half stars because I don't care. It doesn't do AJAX because that's on you. It doesn't ship with a CSS file because you already have bootstrap. It doesn't ship with separate icons, because you already have bootstrap. It's the simplest possible star rating system ... it uses the glyphs already in bootstrap! Yay! It works great on mobile, also Yay!

More to come, I needed a place to part the WIP.


| Property  | Default value | description |
| ------------- | ------------- | ------------- |
| limit | 5 | The maximum rating |
| value | 0 | The starting value if not set on the div |
| glyph | "glyphicon-star" | The Bootstrap glyph to use |
| coloroff | "gray" | Color if a glpyh is "off" |
| coloron | "gold" | Color if a glyph is "on" |
| size | "2.0em" | font-size for the span containing the glyph |
| cursor | "default" | cursor when hovering |
| onClick | function () {} | here's a nice onclick function for you |
