/**
 * Created by admin on 2015/6/25.
 */
var osmLayer, birmingham, view, map,vectorSource,vectorLayer;
$().ready(function () {
    /*初始化设置地图区域高度*/
    $('#map').height($(window).height() - 80);

    /*菜单栏切换*/
    $('.sidebar-toggle').click(function () {
        //alert('menu');
    });
    $('.navbar-custom-menu>.navbar-nav li a').click(function () {
        if ($(this)[0].innerText == "加载") {
            geoMap.addWFSGetFeature();
        }else if ($(this)[0].innerText == "定位"){
            //alert('locate to london!');
            var london = ol.proj.fromLonLat([-0.12755, 51.507222]);
            var pan = ol.animation.pan({
                duration: 2000,
                source: /** @type {ol.Coordinate} */ (view.getCenter())
            });
            map.beforeRender(pan);
            view.setCenter(london);
        }
    });
    geoMap.initMap();
    geoMap.iniTools();
    geoMap.initVector();
    geoMap.initwmsLayer();

    //搜索
    $('#polygonToggle').on('click', function () {
        var search = $('#searchkey').val();
        alert(search);
    });
    //菜单
    $('.sidebar-menu>.treeview li a').click(function () {
        var aText = $(this)[0].innerText;
        if (aText == "沉积物") {
            BootstrapDialog.show({
                message: "沉积物"
            });
        }
    });
})

var geoMap = {
    initMap: function () {
// Declare a Tile layer with an OSM source
        osmLayer = new ol.layer.Tile({
            source: new ol.source.OSM()
        });
// Create latitude and longitude and convert them to default projection
        birmingham = ol.proj.transform([-99.96840,39.21393], 'EPSG:4326', 'EPSG:3857');
// Create a View, set it center and zoom level
        view = new ol.View({
            center: birmingham,
            zoom: 4
        });
        map = new ol.Map({
            target: 'map'
        });
// Add the created layer to the Map
        map.addLayer(osmLayer);
// Set the view for the map
        map.setView(view);

        map.on('click', function(evt) {
            geoMap.displayFeatureInfo(evt.coordinate,evt.pixel,'click');
        });
    },
    iniTools: function () {
        /*add control*/
        map.addControl(new ol.control.ZoomSlider());//缩放滑块
        map.addControl(new ol.control.ScaleLine);//比例尺
        map.addControl(new ol.control.FullScreen);//全屏
        map.addControl(new ol.control.OverviewMap);//鹰眼
        /*add addInteraction*/
        map.addInteraction(new ol.interaction.Select());
        map.addInteraction(new ol.interaction.DragRotateAndZoom());
    },
    initVector:function() {
        vectorSource = new ol.source.Vector({
            url: 'data/geojson/countries.geojson',
            format: new ol.format.GeoJSON()
        });
        vectorLayer = new ol.layer.Vector({
            source: vectorSource
        });
        map.addLayer(vectorLayer);

    },
    initwmsLayer:function() {
        var wmsSource = new ol.source.TileWMS({
            url: 'http://localhost:8080/geoserver/ssh/wms',
            params: {'LAYERS': 'ssh:states'},
            serverType: 'geoserver',
            crossOrigin: ''
        });

        var wmsLayer = new ol.layer.Tile({
            source: wmsSource
        });
        map.addLayer(wmsLayer);
    },
    displayFeatureInfo: function (coordinate,pixel,eventType) {
        var features = [];
        map.forEachFeatureAtPixel(pixel, function(feature, layer) {
            features.push(feature);
        });
        if (features.length > 0) {
            var info = [];
            var i, ii;
            for (i = 0, ii = features.length; i < ii; ++i) {
                info.push(features[i].get('name'));
            }
            alert(eventType+'--'+info.join(', ') || '(unknown)');

            geoMap.popWindow(coordinate);
        } else {
            console.log(eventType+'--'+'&nbsp;');
        }
    },
    addWFSGetFeature: function () {
        var wmsSource = new ol.source.TileWMS({
            url: 'http://localhost:8080/geoserver/ssh/wms',
            params: {'LAYERS': 'ssh:shenghui'},
            serverType: 'geoserver'
        });

        var wmsLayer = new ol.layer.Tile({
            source: wmsSource
        });

        map.addLayer(wmsLayer);
        // format used to parse WFS GetFeature responses
        var geojsonFormat = new ol.format.GeoJSON();

        var vectorSource = new ol.source.Vector({
            loader: function(extent, resolution, projection) {
                var url = 'http://demo.boundlessgeo.com/geoserver/wfs?service=WFS&' +
                    'version=1.1.0&request=GetFeature&typename=osm:water_areas&' +
                    'outputFormat=text/javascript&format_options=callback:loadFeatures' +
                    '&srsname=EPSG:3857&bbox=' + extent.join(',') + ',EPSG:3857';
                // use jsonp: false to prevent jQuery from adding the "callback"
                // parameter to the URL
                $.ajax({url: url, dataType: 'jsonp', jsonp: false});
            },
            strategy: ol.loadingstrategy.tile(ol.tilegrid.createXYZ({
                maxZoom: 19
            }))
        });


        /**
         * JSONP WFS callback function.
         * @param {Object} response The response object.
         */
        window.loadFeatures = function(response) {
            vectorSource.addFeatures(geojsonFormat.readFeatures(response));
        };

        var vector = new ol.layer.Vector({
            source: vectorSource,
            style: new ol.style.Style({
                stroke: new ol.style.Stroke({
                    color: 'rgba(0, 0, 255, 1.0)',
                    width: 2
                })
            })
        });
        map.addLayer(vector);
        map.getView().setZoom(12);
        map.getView().getCenter();
        map.getView().setCenter([-8908887.277395891, 5381918.072437216]);
        map.getView().setRotation(Math.PI);

    },
    popWindow: function (coordinate) {
        /**
         * Elements that make up the popup.
         */
        var container = document.getElementById('popup');
        var content = document.getElementById('popup-content');
        var closer = document.getElementById('popup-closer');
        /**
         * Add a click handler to hide the popup.
         * @return {boolean} Don't follow the href.
         */
        closer.onclick = function() {
            overlay.setPosition(undefined);
            closer.blur();
            return false;
        };


        /**
         * Create an overlay to anchor the popup to the map.
         */
        var overlay = new ol.Overlay(/** @type {olx.OverlayOptions} */ ({
            element: container,
            autoPan: true,
            autoPanAnimation: {
                duration: 250
            }
        }));
        map.addOverlay(overlay);

        var element = overlay.getElement();
        $(element).popover('destroy');
        overlay.setPosition(coordinate);
        var hdms = ol.coordinate.toStringHDMS(ol.proj.transform(
            coordinate, 'EPSG:3857', 'EPSG:4326'));
        // the keys are quoted to prevent renaming in ADVANCED mode.
        $(element).popover({
            'placement': 'top',
            'animation': false,
            'html': true,
            'content': '<p>点击坐标:</p><code>' + hdms + '</code>'
        });
        $(element).popover('show');
    }
};


