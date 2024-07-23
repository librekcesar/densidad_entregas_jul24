var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_kernel_density2km_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "kernel_density2km",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/kernel_density2km_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-11061920.460966, 2173416.506560, -11000805.999406, 2247589.866802]
                            })
                        });
var format_estaciones_24jul_2 = new ol.format.GeoJSON();
var features_estaciones_24jul_2 = format_estaciones_24jul_2.readFeatures(json_estaciones_24jul_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_estaciones_24jul_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_estaciones_24jul_2.addFeatures(features_estaciones_24jul_2);
var lyr_estaciones_24jul_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_estaciones_24jul_2, 
                style: style_estaciones_24jul_2,
                interactive: true,
                title: '<img src="styles/legend/estaciones_24jul_2.png" /> estaciones_24jul'
            });
var format_CENTROIDES_MX1_MX2_MX4_3 = new ol.format.GeoJSON();
var features_CENTROIDES_MX1_MX2_MX4_3 = format_CENTROIDES_MX1_MX2_MX4_3.readFeatures(json_CENTROIDES_MX1_MX2_MX4_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CENTROIDES_MX1_MX2_MX4_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CENTROIDES_MX1_MX2_MX4_3.addFeatures(features_CENTROIDES_MX1_MX2_MX4_3);
var lyr_CENTROIDES_MX1_MX2_MX4_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CENTROIDES_MX1_MX2_MX4_3, 
                style: style_CENTROIDES_MX1_MX2_MX4_3,
                interactive: true,
                title: '<img src="styles/legend/CENTROIDES_MX1_MX2_MX4_3.png" /> CENTROIDES_MX1_MX2_MX4'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_kernel_density2km_1.setVisible(true);lyr_estaciones_24jul_2.setVisible(true);lyr_CENTROIDES_MX1_MX2_MX4_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_kernel_density2km_1,lyr_estaciones_24jul_2,lyr_CENTROIDES_MX1_MX2_MX4_3];
lyr_estaciones_24jul_2.set('fieldAliases', {'id': 'id', 'estacion': 'estacion', 'station_code': 'station_code', 'station_name': 'station_name', 'direccion': 'direccion', });
lyr_CENTROIDES_MX1_MX2_MX4_3.set('fieldAliases', {'station_code': 'station_code', 'station_name': 'station_name', });
lyr_estaciones_24jul_2.set('fieldImages', {'id': 'Range', 'estacion': 'TextEdit', 'station_code': 'TextEdit', 'station_name': 'TextEdit', 'direccion': 'TextEdit', });
lyr_CENTROIDES_MX1_MX2_MX4_3.set('fieldImages', {'station_code': 'TextEdit', 'station_name': 'TextEdit', });
lyr_estaciones_24jul_2.set('fieldLabels', {'id': 'header label', 'estacion': 'header label', 'station_code': 'header label', 'station_name': 'header label', 'direccion': 'header label', });
lyr_CENTROIDES_MX1_MX2_MX4_3.set('fieldLabels', {'station_code': 'header label', 'station_name': 'header label', });
lyr_CENTROIDES_MX1_MX2_MX4_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});