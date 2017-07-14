# Leaflet.zoomhome

A [Leaflet](http://leafletjs.com/)-plugin that provides a zoom control with a
"Home" button to reset the view. [Demo](https://torfsen.github.io/leaflet.zoomhome/)

Based on [code by toms](https://gis.stackexchange.com/a/127383/48264) and
licensed under [CC-BY-SA 3.0](http://creativecommons.org/licenses/by-sa/3.0/).


## Usage

This plugin requires [Font-Awesome](https://fortawesome.github.io/Font-Awesome/):

```xml
<link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"/>
```

Copy `Leaflet.zoomhome.min.js` and `Leaflet.zoomhome.css` from the `dist` folder to
your project folder and include them in your HTML (you need to include Leaflet before
including the plugin):

```xml
<link rel="stylesheet" href="leaflet.zoomhome.css"/>
<script src="leaflet.zoomhome.min.js"></script>
```

Alternatively, you can install the plugin via [Bower](http://bower.io):

    bower install leaflet.zoomhome --save

or NPM for webpack

    npm install leaflet.zoomhome --save-dev

When you create your map, pass `{zoomControl: false}` to disable the standard
zoom control:

```js
var map = L.map('map', {zoomControl: false});
```

Then create the zoomhome-control and add it to the map:

```js
var zoomHome = new ZoomHome();
zoomHome.addTo(map);
```


## Options

You can pass additional options when you create the control:

```js
var zoomHome = new ZoomHome({position: 'topright'});
```

In addition to the [options supported by the standard zoom control](http://leafletjs.com/reference.html#control-zoom),
the zoomhome-control supports the following options:

`zoomHomeIcon`: Font-Awesome icon name for the home button (default: `'home'`).

`zoomHomeTitle`: Tooltip-text of the home button (default: `'Home'`).

`homeCoordinates`: Coordinates on which the map is centered when the home button
is pressed (default: the location which the map displayed when the control was
added to the map).

`homeZoom`: The zoom level to which the map zooms when the home button is pressed
(default: the zoom level that was active when the control was added to the map).


## History

- *0.3.0:* Add modularization (contributed by
  [Justin Hamade](https://github.com/fingerfoodstudios/leaflet.zoomhome))

- *0.2.0:* Fix mouse-over issues with zoom-in and zoom-out buttons (contributed by
  [Patrick McKinney](https://github.com/pmacMaps))

- *0.1.0:* First release

