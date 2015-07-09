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
        }else{
            alert('locate to london!');
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
    //Select “start” and “destination”

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
            geoMap.displayFeatureInfo(evt.pixel,'click');
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
    displayFeatureInfo: function (pixel,eventType) {
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

        map.on('singleclick', function(evt) {
            var fap = map.forEachFeatureAtPixel(evt.pixel,
                function (feature, layer) {
                    if (feature) {
                        var geometry = feature.getGeometry();
                        var coord = geometry.getCoordinates();

                        console.log('coord: ' + coord); // coord 307225.8888888889,361595.6666666666

                        console.log('id: ' + feature.get('name')); // name undefined
                        var ft = wmsSource.getClosestFeatureToCoordinate(coord);
                        console.log('name ' + ft.get('name')); // name Shefton
                    }
                });
         });
    }
};


