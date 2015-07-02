/**
 * Created by admin on 2015/6/25.
 */
var osmLayer, birmingham, view, map,vectorLayer;
$().ready(function () {
    /*初始化设置地图区域高度*/
    $('#map').height($(window).height() - 80);

    /*菜单栏切换*/
    $('.sidebar-toggle').click(function () {
        alert('menu');
    });
    $('.navbar-custom-menu>.navbar-nav li a').click(function () {
        alert('定位');
    });
    geoMap.initMap();
    geoMap.iniTools();
    geoMap.initVector();
    geoMap.initwmsLayer();
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
            zoom: 6
        });
// Instanciate a Map, set the object target to the map DOM id
        map = new ol.Map({
            target: 'map'
        });
// Add the created layer to the Map
        map.addLayer(osmLayer);
// Set the view for the map
        map.setView(view);
    },
    iniTools: function () {
        map.addControl(new ol.control.ZoomSlider());//缩放滑块
        map.addControl(new ol.control.ScaleLine);//比例尺
        map.addControl(new ol.control.FullScreen);//全屏
        map.addControl(new ol.control.OverviewMap);//鹰眼
    },
    initVector:function() {

    },
    initwmsLayer:function() {

    }
};


