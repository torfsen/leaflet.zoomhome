describe('addTo', function () {

    it('uses the map center when no coordinates are given', async function () {
        var homeCoordinates = await page.evaluate(() => {
            var zoomHome = L.Control.zoomHome();
            zoomHome.addTo(map);
            return zoomHome.getHomeCoordinates();
        });
        var mapCenter = await page.evaluate(() => map.getCenter());
        assert.deepEqual(homeCoordinates, mapCenter);
    });

});

