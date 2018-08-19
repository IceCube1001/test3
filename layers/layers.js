var wms_layers = [];

        var lyr_Google_0 = new ol.layer.Tile({
            'title': 'Google_0',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });var format_Mitre10_DerbyStreetBDY_1 = new ol.format.GeoJSON();
var features_Mitre10_DerbyStreetBDY_1 = format_Mitre10_DerbyStreetBDY_1.readFeatures(json_Mitre10_DerbyStreetBDY_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mitre10_DerbyStreetBDY_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Mitre10_DerbyStreetBDY_1.addFeatures(features_Mitre10_DerbyStreetBDY_1);var lyr_Mitre10_DerbyStreetBDY_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Mitre10_DerbyStreetBDY_1, 
                style: style_Mitre10_DerbyStreetBDY_1,
                title: '<img src="styles/legend/Mitre10_DerbyStreetBDY_1.png" /> Mitre10_DerbyStreet BDY'
            });

lyr_Mitre10_DerbyStreetBDY_1.setVisible(true);
var layersList = [lyr_Google_0,lyr_Mitre10_DerbyStreetBDY_1];
lyr_Mitre10_DerbyStreetBDY_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'SHAPE_Length': 'SHAPE_Length', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Mitre10_DerbyStreetBDY_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'SHAPE_Length': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_Mitre10_DerbyStreetBDY_1.set('fieldLabels', {'OBJECTID': 'inline label', 'SHAPE_Length': 'no label', 'SHAPE_Area': 'no label', });
lyr_Mitre10_DerbyStreetBDY_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});