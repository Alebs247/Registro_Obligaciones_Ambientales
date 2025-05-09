var wms_layers = [];

var format_Paises_America_del_Sur_GEOGPSPERU_SuyoPomalia_0 = new ol.format.GeoJSON();
var features_Paises_America_del_Sur_GEOGPSPERU_SuyoPomalia_0 = format_Paises_America_del_Sur_GEOGPSPERU_SuyoPomalia_0.readFeatures(json_Paises_America_del_Sur_GEOGPSPERU_SuyoPomalia_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Paises_America_del_Sur_GEOGPSPERU_SuyoPomalia_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Paises_America_del_Sur_GEOGPSPERU_SuyoPomalia_0.addFeatures(features_Paises_America_del_Sur_GEOGPSPERU_SuyoPomalia_0);
var lyr_Paises_America_del_Sur_GEOGPSPERU_SuyoPomalia_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Paises_America_del_Sur_GEOGPSPERU_SuyoPomalia_0, 
                style: style_Paises_America_del_Sur_GEOGPSPERU_SuyoPomalia_0,
                popuplayertitle: 'Paises_America_del_Sur_GEOGPSPERU_SuyoPomalia',
                interactive: true,
    title: 'Paises_America_del_Sur_GEOGPSPERU_SuyoPomalia<br />\
    <img src="styles/legend/Paises_America_del_Sur_GEOGPSPERU_SuyoPomalia_0_0.png" /> Argentina<br />\
    <img src="styles/legend/Paises_America_del_Sur_GEOGPSPERU_SuyoPomalia_0_1.png" /> Bolivia<br />\
    <img src="styles/legend/Paises_America_del_Sur_GEOGPSPERU_SuyoPomalia_0_2.png" /> Brasil<br />\
    <img src="styles/legend/Paises_America_del_Sur_GEOGPSPERU_SuyoPomalia_0_3.png" /> Chile<br />\
    <img src="styles/legend/Paises_America_del_Sur_GEOGPSPERU_SuyoPomalia_0_4.png" /> Colombia<br />\
    <img src="styles/legend/Paises_America_del_Sur_GEOGPSPERU_SuyoPomalia_0_5.png" /> Costa Rica<br />\
    <img src="styles/legend/Paises_America_del_Sur_GEOGPSPERU_SuyoPomalia_0_6.png" /> Ecuador<br />\
    <img src="styles/legend/Paises_America_del_Sur_GEOGPSPERU_SuyoPomalia_0_7.png" /> French Guiana<br />\
    <img src="styles/legend/Paises_America_del_Sur_GEOGPSPERU_SuyoPomalia_0_8.png" /> Guyana<br />\
    <img src="styles/legend/Paises_America_del_Sur_GEOGPSPERU_SuyoPomalia_0_9.png" /> Oceano Pacifico<br />\
    <img src="styles/legend/Paises_America_del_Sur_GEOGPSPERU_SuyoPomalia_0_10.png" /> Panama<br />\
    <img src="styles/legend/Paises_America_del_Sur_GEOGPSPERU_SuyoPomalia_0_11.png" /> Paraguay<br />\
    <img src="styles/legend/Paises_America_del_Sur_GEOGPSPERU_SuyoPomalia_0_12.png" /> Perú<br />\
    <img src="styles/legend/Paises_America_del_Sur_GEOGPSPERU_SuyoPomalia_0_13.png" /> Suriname<br />\
    <img src="styles/legend/Paises_America_del_Sur_GEOGPSPERU_SuyoPomalia_0_14.png" /> Uruguay<br />\
    <img src="styles/legend/Paises_America_del_Sur_GEOGPSPERU_SuyoPomalia_0_15.png" /> Venezuela<br />\
    <img src="styles/legend/Paises_America_del_Sur_GEOGPSPERU_SuyoPomalia_0_16.png" /> <br />' });
var format_Union_ODE_1 = new ol.format.GeoJSON();
var features_Union_ODE_1 = format_Union_ODE_1.readFeatures(json_Union_ODE_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Union_ODE_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Union_ODE_1.addFeatures(features_Union_ODE_1);
var lyr_Union_ODE_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Union_ODE_1, 
                style: style_Union_ODE_1,
                popuplayertitle: 'Union_ODE',
                interactive: true,
    title: 'Union_ODE<br />\
    <img src="styles/legend/Union_ODE_1_0.png" /> <br />\
    <img src="styles/legend/Union_ODE_1_1.png" /> ODE Amazonas<br />\
    <img src="styles/legend/Union_ODE_1_2.png" /> ODE Ancash<br />\
    <img src="styles/legend/Union_ODE_1_3.png" /> ODE Apurímac<br />\
    <img src="styles/legend/Union_ODE_1_4.png" /> ODE Arequipa<br />\
    <img src="styles/legend/Union_ODE_1_5.png" /> ODE Ayacucho<br />\
    <img src="styles/legend/Union_ODE_1_6.png" /> ODE Cajamarca<br />\
    <img src="styles/legend/Union_ODE_1_7.png" /> ODE Cusco<br />\
    <img src="styles/legend/Union_ODE_1_8.png" /> ODE Huancavelica<br />\
    <img src="styles/legend/Union_ODE_1_9.png" /> ODE Huánuco<br />\
    <img src="styles/legend/Union_ODE_1_10.png" /> ODE Ica<br />\
    <img src="styles/legend/Union_ODE_1_11.png" /> ODE Junín<br />\
    <img src="styles/legend/Union_ODE_1_12.png" /> ODE La Libertad<br />\
    <img src="styles/legend/Union_ODE_1_13.png" /> ODE Lambayeque<br />\
    <img src="styles/legend/Union_ODE_1_14.png" /> ODE Loreto<br />\
    <img src="styles/legend/Union_ODE_1_15.png" /> ODE Madre de Dios<br />\
    <img src="styles/legend/Union_ODE_1_16.png" /> ODE Moquegua<br />\
    <img src="styles/legend/Union_ODE_1_17.png" /> ODE Pasco<br />\
    <img src="styles/legend/Union_ODE_1_18.png" /> ODE Piura<br />\
    <img src="styles/legend/Union_ODE_1_19.png" /> ODE Puno<br />\
    <img src="styles/legend/Union_ODE_1_20.png" /> ODE San Martín<br />\
    <img src="styles/legend/Union_ODE_1_21.png" /> ODE Tacna<br />\
    <img src="styles/legend/Union_ODE_1_22.png" /> ODE Tumbes<br />\
    <img src="styles/legend/Union_ODE_1_23.png" /> ODE Ucayali<br />\
    <img src="styles/legend/Union_ODE_1_24.png" /> ODE VRAEM<br />\
    <img src="styles/legend/Union_ODE_1_25.png" /> OE Chimbote<br />\
    <img src="styles/legend/Union_ODE_1_26.png" /> OE Cora Cora<br />\
    <img src="styles/legend/Union_ODE_1_27.png" /> OE Cotabambas<br />\
    <img src="styles/legend/Union_ODE_1_28.png" /> OE Espinar<br />\
    <img src="styles/legend/Union_ODE_1_29.png" /> OE Pichanaki<br />\
    <img src="styles/legend/Union_ODE_1_30.png" /> OE Talara<br />\
    <img src="styles/legend/Union_ODE_1_31.png" /> OI La Convención<br />\
    <img src="styles/legend/Union_ODE_1_32.png" /> Sede Central<br />' });
var format_DEPARTAMENTOig_departamento_2 = new ol.format.GeoJSON();
var features_DEPARTAMENTOig_departamento_2 = format_DEPARTAMENTOig_departamento_2.readFeatures(json_DEPARTAMENTOig_departamento_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DEPARTAMENTOig_departamento_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DEPARTAMENTOig_departamento_2.addFeatures(features_DEPARTAMENTOig_departamento_2);
var lyr_DEPARTAMENTOig_departamento_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DEPARTAMENTOig_departamento_2, 
                style: style_DEPARTAMENTOig_departamento_2,
                popuplayertitle: 'DEPARTAMENTO — ig_departamento',
                interactive: true,
                title: '<img src="styles/legend/DEPARTAMENTOig_departamento_2.png" /> DEPARTAMENTO — ig_departamento'
            });
var format_DISTRITOig_distrito_3 = new ol.format.GeoJSON();
var features_DISTRITOig_distrito_3 = format_DISTRITOig_distrito_3.readFeatures(json_DISTRITOig_distrito_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DISTRITOig_distrito_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DISTRITOig_distrito_3.addFeatures(features_DISTRITOig_distrito_3);
var lyr_DISTRITOig_distrito_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DISTRITOig_distrito_3, 
                style: style_DISTRITOig_distrito_3,
                popuplayertitle: 'DISTRITO — ig_distrito',
                interactive: true,
                title: '<img src="styles/legend/DISTRITOig_distrito_3.png" /> DISTRITO — ig_distrito'
            });

lyr_Paises_America_del_Sur_GEOGPSPERU_SuyoPomalia_0.setVisible(true);lyr_Union_ODE_1.setVisible(true);lyr_DEPARTAMENTOig_departamento_2.setVisible(true);lyr_DISTRITOig_distrito_3.setVisible(true);
var layersList = [lyr_Paises_America_del_Sur_GEOGPSPERU_SuyoPomalia_0,lyr_Union_ODE_1,lyr_DEPARTAMENTOig_departamento_2,lyr_DISTRITOig_distrito_3];
lyr_Paises_America_del_Sur_GEOGPSPERU_SuyoPomalia_0.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NOMBRE': 'NOMBRE', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'url': 'url', 'correo': 'correo', });
lyr_Union_ODE_1.set('fieldAliases', {'fid': 'fid', 'Oficina_Desconcentrada': 'Oficina Desconcentrada', 'layer': 'layer', 'path': 'path', });
lyr_DEPARTAMENTOig_departamento_2.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'OBJECTID': 'OBJECTID', 'CCDD': 'CCDD', 'NOMBDEP': 'NOMBDEP', 'SHAPE_Length': 'SHAPE_Length', 'SHAPE_Area': 'SHAPE_Area', });
lyr_DISTRITOig_distrito_3.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'OBJECTID': 'OBJECTID', 'UBIGEO': 'UBIGEO', 'CCDD': 'CCDD', 'CCPP': 'CCPP', 'CCDI': 'CCDI', 'NOMBDEP': 'NOMBDEP', 'NOMBPROV': 'NOMBPROV', 'NOMBDIST': 'NOMBDIST', 'CAPITAL': 'CAPITAL', 'SHAPE_Length': 'SHAPE_Length', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Paises_America_del_Sur_GEOGPSPERU_SuyoPomalia_0.set('fieldImages', {'OBJECTID': 'TextEdit', 'NOMBRE': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'url': 'TextEdit', 'correo': 'TextEdit', });
lyr_Union_ODE_1.set('fieldImages', {'fid': 'TextEdit', 'Oficina_Desconcentrada': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_DEPARTAMENTOig_departamento_2.set('fieldImages', {'fid': 'TextEdit', 'id': 'Range', 'OBJECTID': 'TextEdit', 'CCDD': 'TextEdit', 'NOMBDEP': 'TextEdit', 'SHAPE_Length': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_DISTRITOig_distrito_3.set('fieldImages', {'fid': 'TextEdit', 'id': 'Range', 'OBJECTID': 'TextEdit', 'UBIGEO': 'TextEdit', 'CCDD': 'TextEdit', 'CCPP': 'TextEdit', 'CCDI': 'TextEdit', 'NOMBDEP': 'TextEdit', 'NOMBPROV': 'TextEdit', 'NOMBDIST': 'TextEdit', 'CAPITAL': 'TextEdit', 'SHAPE_Length': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_Paises_America_del_Sur_GEOGPSPERU_SuyoPomalia_0.set('fieldLabels', {'OBJECTID': 'no label', 'NOMBRE': 'header label - always visible', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'url': 'no label', 'correo': 'no label', });
lyr_Union_ODE_1.set('fieldLabels', {'fid': 'no label', 'Oficina_Desconcentrada': 'header label - always visible', 'layer': 'no label', 'path': 'no label', });
lyr_DEPARTAMENTOig_departamento_2.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'OBJECTID': 'no label', 'CCDD': 'no label', 'NOMBDEP': 'header label - always visible', 'SHAPE_Length': 'no label', 'SHAPE_Area': 'no label', });
lyr_DISTRITOig_distrito_3.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'OBJECTID': 'no label', 'UBIGEO': 'no label', 'CCDD': 'no label', 'CCPP': 'no label', 'CCDI': 'no label', 'NOMBDEP': 'no label', 'NOMBPROV': 'no label', 'NOMBDIST': 'header label - always visible', 'CAPITAL': 'no label', 'SHAPE_Length': 'no label', 'SHAPE_Area': 'no label', });
lyr_DISTRITOig_distrito_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});