/*
 * Leaflet zoom control with a home button for resetting the view.
 *
 * Based on code by toms (licensed under CC-BY-SA 3.0), see
 * https://gis.stackexchange.com/a/127383/48264.
 */
(function () {

    L.Control.ZoomHome = L.Control.extend({
        options: {
            position: 'topleft',
            zoomInText: '+',
            zoomInTitle: 'Zoom in',
            zoomOutText: '-',
            zoomOutTitle: 'Zoom out',
            zoomHomeText: '<i class="fa fa-home" style="line-height:1.65;"></i>',
            zoomHomeTitle: 'Home',
            homeCoordinates: null,
            homeZoom: null
        },

        onAdd: function (map) {
            var controlName = 'leaflet-control-zoomhome',
                container = L.DomUtil.create('div', controlName + ' leaflet-bar'),
                options = this.options;

            if (options.homeCoordinates === null) {
                options.homeCoordinates = map.getCenter();
            }
            if (options.homeZoom === null) {
                options.homeZoom = map.getZoom();
            }

            this._zoomInButton = this._createButton(options.zoomInText, options.zoomInTitle,
                controlName + '-in', container, this._zoomIn);
            this._zoomHomeButton = this._createButton(options.zoomHomeText,
                options.zoomHomeTitle, controlName + '-home', container, this._zoomHome);
            this._zoomOutButton = this._createButton(options.zoomOutText, options.zoomOutTitle,
                controlName + '-out', container, this._zoomOut);

            this._updateDisabled();
            map.on('zoomend zoomlevelschange', this._updateDisabled, this);

            return container;
        },

        onRemove: function (map) {
            map.off('zoomend zoomlevelschange', this._updateDisabled, this);
        },

        _zoomIn: function (e) {
            this._map.zoomIn(e.shiftKey ? 3 : 1);
        },

        _zoomOut: function (e) {
            this._map.zoomOut(e.shiftKey ? 3 : 1);
        },

        _zoomHome: function (e) {
            this._map.setView(this.options.homeCoordinates, this.options.homeZoom);
        },

        _createButton: function (html, title, className, container, fn) {
            var link = L.DomUtil.create('a', className, container);
            link.innerHTML = html;
            link.href = '#';
            link.title = title;

            L.DomEvent.on(link, 'mousedown dblclick', L.DomEvent.stopPropagation)
                .on(link, 'click', L.DomEvent.stop)
                .on(link, 'click', fn, this)
                .on(link, 'click', this._refocusOnMap, this);

            return link;
        },

        _updateDisabled: function () {
            var map = this._map,
                className = 'leaflet-disabled';

            L.DomUtil.removeClass(this._zoomInButton, className);
            L.DomUtil.removeClass(this._zoomOutButton, className);

            if (map._zoom === map.getMinZoom()) {
                L.DomUtil.addClass(this._zoomOutButton, className);
            }
            if (map._zoom === map.getMaxZoom()) {
                L.DomUtil.addClass(this._zoomInButton, className);
            }
        }
    });

    L.Control.zoomHome = function (options) {
        return new L.Control.ZoomHome(options);
    };

}());
