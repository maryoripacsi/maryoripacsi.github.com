var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_poste_lds_miraflores_1 = new ol.format.GeoJSON();
var features_poste_lds_miraflores_1 = format_poste_lds_miraflores_1.readFeatures(json_poste_lds_miraflores_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_poste_lds_miraflores_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_poste_lds_miraflores_1.addFeatures(features_poste_lds_miraflores_1);
var lyr_poste_lds_miraflores_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_poste_lds_miraflores_1, 
                style: style_poste_lds_miraflores_1,
                interactive: true,
                title: '<img src="styles/legend/poste_lds_miraflores_1.png" /> poste_lds_miraflores'
            });
var group_group1 = new ol.layer.Group({
                                layers: [lyr_OpenStreetMap_0,lyr_poste_lds_miraflores_1,],
                                title: "group1"});

lyr_OpenStreetMap_0.setVisible(true);lyr_poste_lds_miraflores_1.setVisible(true);
var layersList = [group_group1];
lyr_poste_lds_miraflores_1.set('fieldAliases', {'gid': 'gid', 'codigo': 'codigo', 'altura': 'altura', 'tipo': 'tipo', 'sifones': 'sifones', 'estado': 'estado', 'dirc_poste': 'dirc_poste', 'nom_dist': 'nom_dist', 'nom_prov': 'nom_prov', 'nom_dept': 'nom_dept', });
lyr_poste_lds_miraflores_1.set('fieldImages', {'gid': '', 'codigo': '', 'altura': '', 'tipo': '', 'sifones': '', 'estado': '', 'dirc_poste': '', 'nom_dist': '', 'nom_prov': '', 'nom_dept': '', });
lyr_poste_lds_miraflores_1.set('fieldLabels', {});
lyr_poste_lds_miraflores_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});