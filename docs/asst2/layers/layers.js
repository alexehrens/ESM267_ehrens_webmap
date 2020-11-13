var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 0.500000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_NoData_1 = new ol.format.GeoJSON();
var features_NoData_1 = format_NoData_1.readFeatures(json_NoData_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NoData_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NoData_1.addFeatures(features_NoData_1);
var lyr_NoData_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NoData_1, 
                style: style_NoData_1,
                interactive: false,
                title: '<img src="styles/legend/NoData_1.png" /> No Data'
            });
var format_OtherNonAg_2 = new ol.format.GeoJSON();
var features_OtherNonAg_2 = format_OtherNonAg_2.readFeatures(json_OtherNonAg_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OtherNonAg_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OtherNonAg_2.addFeatures(features_OtherNonAg_2);
var lyr_OtherNonAg_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_OtherNonAg_2, 
                style: style_OtherNonAg_2,
                interactive: false,
                title: '<img src="styles/legend/OtherNonAg_2.png" /> Other Non-Ag.'
            });
var format_Urban_3 = new ol.format.GeoJSON();
var features_Urban_3 = format_Urban_3.readFeatures(json_Urban_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Urban_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Urban_3.addFeatures(features_Urban_3);
var lyr_Urban_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Urban_3, 
                style: style_Urban_3,
                interactive: false,
                title: '<img src="styles/legend/Urban_3.png" /> Urban'
            });
var format_CalaverasCountyWaterDistrict_4 = new ol.format.GeoJSON();
var features_CalaverasCountyWaterDistrict_4 = format_CalaverasCountyWaterDistrict_4.readFeatures(json_CalaverasCountyWaterDistrict_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CalaverasCountyWaterDistrict_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CalaverasCountyWaterDistrict_4.addFeatures(features_CalaverasCountyWaterDistrict_4);
var lyr_CalaverasCountyWaterDistrict_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CalaverasCountyWaterDistrict_4, 
                style: style_CalaverasCountyWaterDistrict_4,
                interactive: false,
                title: '<img src="styles/legend/CalaverasCountyWaterDistrict_4.png" /> Calaveras County Water District'
            });
var format_ClayWaterDistrict_5 = new ol.format.GeoJSON();
var features_ClayWaterDistrict_5 = format_ClayWaterDistrict_5.readFeatures(json_ClayWaterDistrict_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ClayWaterDistrict_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ClayWaterDistrict_5.addFeatures(features_ClayWaterDistrict_5);
var lyr_ClayWaterDistrict_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ClayWaterDistrict_5, 
                style: style_ClayWaterDistrict_5,
                interactive: false,
                title: '<img src="styles/legend/ClayWaterDistrict_5.png" /> Clay Water District'
            });
var format_GlennColusaIrrigationDistrict_6 = new ol.format.GeoJSON();
var features_GlennColusaIrrigationDistrict_6 = format_GlennColusaIrrigationDistrict_6.readFeatures(json_GlennColusaIrrigationDistrict_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GlennColusaIrrigationDistrict_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GlennColusaIrrigationDistrict_6.addFeatures(features_GlennColusaIrrigationDistrict_6);
var lyr_GlennColusaIrrigationDistrict_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_GlennColusaIrrigationDistrict_6, 
                style: style_GlennColusaIrrigationDistrict_6,
                interactive: false,
                title: '<img src="styles/legend/GlennColusaIrrigationDistrict_6.png" /> Glenn-Colusa Irrigation District'
            });
var format_AverageSurfaceWaterDeliveries20092019inacftacre_7 = new ol.format.GeoJSON();
var features_AverageSurfaceWaterDeliveries20092019inacftacre_7 = format_AverageSurfaceWaterDeliveries20092019inacftacre_7.readFeatures(json_AverageSurfaceWaterDeliveries20092019inacftacre_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AverageSurfaceWaterDeliveries20092019inacftacre_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AverageSurfaceWaterDeliveries20092019inacftacre_7.addFeatures(features_AverageSurfaceWaterDeliveries20092019inacftacre_7);
var lyr_AverageSurfaceWaterDeliveries20092019inacftacre_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AverageSurfaceWaterDeliveries20092019inacftacre_7, 
                style: style_AverageSurfaceWaterDeliveries20092019inacftacre_7,
                interactive: true,
    title: 'Average Surface Water Deliveries, 2009 - 2019 (in ac-ft/acre)<br />\
    <img src="styles/legend/AverageSurfaceWaterDeliveries20092019inacftacre_7_0.png" /> 0 - 1<br />\
    <img src="styles/legend/AverageSurfaceWaterDeliveries20092019inacftacre_7_1.png" /> 1 - 2<br />\
    <img src="styles/legend/AverageSurfaceWaterDeliveries20092019inacftacre_7_2.png" /> 2 - 3<br />\
    <img src="styles/legend/AverageSurfaceWaterDeliveries20092019inacftacre_7_3.png" /> 3 - 4<br />\
    <img src="styles/legend/AverageSurfaceWaterDeliveries20092019inacftacre_7_4.png" /> 4 - 6<br />\
    <img src="styles/legend/AverageSurfaceWaterDeliveries20092019inacftacre_7_5.png" /> > 6<br />'
        });
var format_SGMAGroundwaterBasins_8 = new ol.format.GeoJSON();
var features_SGMAGroundwaterBasins_8 = format_SGMAGroundwaterBasins_8.readFeatures(json_SGMAGroundwaterBasins_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SGMAGroundwaterBasins_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SGMAGroundwaterBasins_8.addFeatures(features_SGMAGroundwaterBasins_8);
var lyr_SGMAGroundwaterBasins_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SGMAGroundwaterBasins_8, 
                style: style_SGMAGroundwaterBasins_8,
                interactive: false,
                title: '<img src="styles/legend/SGMAGroundwaterBasins_8.png" /> SGMA Groundwater Basins'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_NoData_1.setVisible(true);lyr_OtherNonAg_2.setVisible(true);lyr_Urban_3.setVisible(true);lyr_CalaverasCountyWaterDistrict_4.setVisible(true);lyr_ClayWaterDistrict_5.setVisible(true);lyr_GlennColusaIrrigationDistrict_6.setVisible(true);lyr_AverageSurfaceWaterDeliveries20092019inacftacre_7.setVisible(true);lyr_SGMAGroundwaterBasins_8.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_NoData_1,lyr_OtherNonAg_2,lyr_Urban_3,lyr_CalaverasCountyWaterDistrict_4,lyr_ClayWaterDistrict_5,lyr_GlennColusaIrrigationDistrict_6,lyr_AverageSurfaceWaterDeliveries20092019inacftacre_7,lyr_SGMAGroundwaterBasins_8];
lyr_NoData_1.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'AGENCYNAME': 'AGENCYNAME', 'SOURCE': 'SOURCE', 'AGENCYUNIQ': 'AGENCYUNIQ', 'LASTMODIFI': 'LASTMODIFI', 'MODIFIEDBY': 'MODIFIEDBY', 'SOURCECOMM': 'SOURCECOMM', 'Date_Data_': 'Date_Data_', 'GlobalID': 'GlobalID', 'Status': 'Status', 'Status2': 'Status2', 'Area': 'Area', 'Acre_feet': 'Acre_feet', 'Ac_ft_acre': 'Ac_ft_acre', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_OtherNonAg_2.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'AGENCYNAME': 'Non-ag. Water User Name', 'SOURCE': 'SOURCE', 'AGENCYUNIQ': 'AGENCYUNIQ', 'LASTMODIFI': 'LASTMODIFI', 'MODIFIEDBY': 'MODIFIEDBY', 'SOURCECOMM': 'SOURCECOMM', 'Date_Data_': 'Date_Data_', 'GlobalID': 'GlobalID', 'Status': 'Status', 'Status2': 'Status2', 'Area': 'Area', 'Acre_feet': 'Acre_feet', 'Ac_ft_acre': 'Ac_ft_acre', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Urban_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'OBJECTID_1': 'OBJECTID_1', 'DWR_revise': 'DWR_revise', 'Symb_class': 'Symb_class', 'MULTIUSE': 'MULTIUSE', 'CLASS1': 'CLASS1', 'SUBCLASS1': 'SUBCLASS1', 'SPECOND1': 'SPECOND1', 'IRR_TYP1PA': 'IRR_TYP1PA', 'IRR_TYP1PB': 'IRR_TYP1PB', 'PCNT1': 'PCNT1', 'CLASS2': 'CLASS2', 'SUBCLASS2': 'SUBCLASS2', 'SPECOND2': 'SPECOND2', 'IRR_TYP2PA': 'IRR_TYP2PA', 'IRR_TYP2PB': 'IRR_TYP2PB', 'PCNT2': 'PCNT2', 'CLASS3': 'CLASS3', 'SUBCLASS3': 'SUBCLASS3', 'SPECOND3': 'SPECOND3', 'IRR_TYP3PA': 'IRR_TYP3PA', 'IRR_TYP3PB': 'IRR_TYP3PB', 'PCNT3': 'PCNT3', 'UCF_ATT': 'UCF_ATT', 'CROPTYP1': 'CROPTYP1', 'CROPTYP2': 'CROPTYP2', 'CROPTYP3': 'CROPTYP3', 'Region': 'Region', 'Acres': 'Acres', 'County': 'County', 'Comments': 'Comments', 'Source': 'Source', 'Crop2016': 'Land Use', 'Modified_B': 'Modified_B', 'Date_Data_': 'Date_Data_', 'Last_Modif': 'Last_Modif', 'GlobalID': 'GlobalID', 'Shape_Leng': 'Shape_Leng', 'Crop_Type': 'Crop_Type', 'Area__ac_': 'Area__ac_', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', });
lyr_CalaverasCountyWaterDistrict_4.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'DWR_revise': 'DWR_revise', 'Symb_class': 'Symb_class', 'MULTIUSE': 'MULTIUSE', 'CLASS1': 'CLASS1', 'SUBCLASS1': 'SUBCLASS1', 'SPECOND1': 'SPECOND1', 'IRR_TYP1PA': 'IRR_TYP1PA', 'IRR_TYP1PB': 'IRR_TYP1PB', 'PCNT1': 'PCNT1', 'CLASS2': 'CLASS2', 'SUBCLASS2': 'SUBCLASS2', 'SPECOND2': 'SPECOND2', 'IRR_TYP2PA': 'IRR_TYP2PA', 'IRR_TYP2PB': 'IRR_TYP2PB', 'PCNT2': 'PCNT2', 'CLASS3': 'CLASS3', 'SUBCLASS3': 'SUBCLASS3', 'SPECOND3': 'SPECOND3', 'IRR_TYP3PA': 'IRR_TYP3PA', 'IRR_TYP3PB': 'IRR_TYP3PB', 'PCNT3': 'PCNT3', 'UCF_ATT': 'UCF_ATT', 'CROPTYP1': 'CROPTYP1', 'CROPTYP2': 'CROPTYP2', 'CROPTYP3': 'CROPTYP3', 'Region': 'Region', 'Acres': 'Acres', 'County': 'County', 'Comments': 'Comments', 'Source': 'Source', 'Crop2016': 'Crop2016', 'Modified_B': 'Modified_B', 'Date_Data_': 'Date_Data_', 'Last_Modif': 'Last_Modif', 'GlobalID': 'GlobalID', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Crop_Type': 'Crop_Type', 'Area__ac_': 'Area__ac_', 'LAND_IQ_CR': 'LAND_IQ_CR', 'Field2': 'Field2', 'SWAP_crop': 'SWAP_crop', 'PPIC_crops': 'PPIC_crops', 'Field5': 'Field5', });
lyr_ClayWaterDistrict_5.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'AGENCYNAME': 'Water User Name', 'SOURCE': 'SOURCE', 'AGENCYUNIQ': 'AGENCYUNIQ', 'LASTMODIFI': 'LASTMODIFI', 'MODIFIEDBY': 'MODIFIEDBY', 'SOURCECOMM': 'SOURCECOMM', 'Date_Data_': 'Date_Data_', 'GlobalID': 'GlobalID', 'Status': 'Status', 'Status2': 'Status2', 'Area': 'Area', 'Acre_feet': 'Acre_feet', 'Ac_ft_acre': 'Average Surface Water Delivery, 2009 - 2019', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_GlennColusaIrrigationDistrict_6.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'DWR_revise': 'DWR_revise', 'Symb_class': 'Symb_class', 'MULTIUSE': 'MULTIUSE', 'CLASS1': 'CLASS1', 'SUBCLASS1': 'SUBCLASS1', 'SPECOND1': 'SPECOND1', 'IRR_TYP1PA': 'IRR_TYP1PA', 'IRR_TYP1PB': 'IRR_TYP1PB', 'PCNT1': 'PCNT1', 'CLASS2': 'CLASS2', 'SUBCLASS2': 'SUBCLASS2', 'SPECOND2': 'SPECOND2', 'IRR_TYP2PA': 'IRR_TYP2PA', 'IRR_TYP2PB': 'IRR_TYP2PB', 'PCNT2': 'PCNT2', 'CLASS3': 'CLASS3', 'SUBCLASS3': 'SUBCLASS3', 'SPECOND3': 'SPECOND3', 'IRR_TYP3PA': 'IRR_TYP3PA', 'IRR_TYP3PB': 'IRR_TYP3PB', 'PCNT3': 'PCNT3', 'UCF_ATT': 'UCF_ATT', 'CROPTYP1': 'CROPTYP1', 'CROPTYP2': 'CROPTYP2', 'CROPTYP3': 'CROPTYP3', 'Region': 'Region', 'Acres': 'Acres', 'County': 'County', 'Comments': 'Comments', 'Source': 'Source', 'Crop2016': 'Crop2016', 'Modified_B': 'Modified_B', 'Date_Data_': 'Date_Data_', 'Last_Modif': 'Last_Modif', 'GlobalID': 'GlobalID', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Crop_Type': 'Crop_Type', 'Area__ac_': 'Area__ac_', 'LAND_IQ_CR': 'LAND_IQ_CR', 'Field2': 'Field2', 'SWAP_crop': 'SWAP_crop', 'PPIC_crops': 'PPIC_crops', 'Field5': 'Field5', });
lyr_AverageSurfaceWaterDeliveries20092019inacftacre_7.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'AGENCYNAME': 'Water User Name', 'SOURCE': 'SOURCE', 'AGENCYUNIQ': 'AGENCYUNIQ', 'LASTMODIFI': 'LASTMODIFI', 'MODIFIEDBY': 'MODIFIEDBY', 'SOURCECOMM': 'SOURCECOMM', 'Date_Data_': 'Date_Data_', 'GlobalID': 'GlobalID', 'Status': 'Status', 'Status2': 'Status2', 'Area': 'Area', 'Acre_feet': 'Acre_feet', 'Ac_ft_acre': 'Avg. Surface Water Delivery, 2009 - 2019', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_SGMAGroundwaterBasins_8.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Basin_Numb': 'Basin_Numb', 'Basin_Subb': 'Basin_Subb', 'Basin_Name': 'Basin_Name', 'Basin_Su_1': 'Subbasin Name', 'Region_Off': 'Region_Off', 'GlobalID': 'GlobalID', 'Priority': 'Priority', });
lyr_NoData_1.set('fieldImages', {'OBJECTID_1': 'Hidden', 'OBJECTID': 'Hidden', 'AGENCYNAME': 'Hidden', 'SOURCE': 'Hidden', 'AGENCYUNIQ': 'Hidden', 'LASTMODIFI': 'Hidden', 'MODIFIEDBY': 'Hidden', 'SOURCECOMM': 'Hidden', 'Date_Data_': 'Hidden', 'GlobalID': 'Hidden', 'Status': 'Hidden', 'Status2': 'Hidden', 'Area': 'Hidden', 'Acre_feet': 'Hidden', 'Ac_ft_acre': 'Hidden', 'Shape_Leng': 'Hidden', 'Shape_Area': 'Hidden', });
lyr_OtherNonAg_2.set('fieldImages', {'OBJECTID_1': 'Hidden', 'OBJECTID': 'Hidden', 'AGENCYNAME': 'TextEdit', 'SOURCE': 'Hidden', 'AGENCYUNIQ': 'Hidden', 'LASTMODIFI': 'Hidden', 'MODIFIEDBY': 'Hidden', 'SOURCECOMM': 'Hidden', 'Date_Data_': 'Hidden', 'GlobalID': 'Hidden', 'Status': 'Hidden', 'Status2': 'Hidden', 'Area': 'Hidden', 'Acre_feet': 'Hidden', 'Ac_ft_acre': 'Hidden', 'Shape_Leng': 'Hidden', 'Shape_Area': 'Hidden', });
lyr_Urban_3.set('fieldImages', {'OBJECTID': 'Hidden', 'OBJECTID_1': 'Hidden', 'DWR_revise': 'Hidden', 'Symb_class': 'Hidden', 'MULTIUSE': 'Hidden', 'CLASS1': 'Hidden', 'SUBCLASS1': 'Hidden', 'SPECOND1': 'Hidden', 'IRR_TYP1PA': 'Hidden', 'IRR_TYP1PB': 'Hidden', 'PCNT1': 'Hidden', 'CLASS2': 'Hidden', 'SUBCLASS2': 'Hidden', 'SPECOND2': 'Hidden', 'IRR_TYP2PA': 'Hidden', 'IRR_TYP2PB': 'Hidden', 'PCNT2': 'Hidden', 'CLASS3': 'Hidden', 'SUBCLASS3': 'Hidden', 'SPECOND3': 'Hidden', 'IRR_TYP3PA': 'Hidden', 'IRR_TYP3PB': 'Hidden', 'PCNT3': 'Hidden', 'UCF_ATT': 'Hidden', 'CROPTYP1': 'Hidden', 'CROPTYP2': 'Hidden', 'CROPTYP3': 'Hidden', 'Region': 'Hidden', 'Acres': 'Hidden', 'County': 'Hidden', 'Comments': 'Hidden', 'Source': 'Hidden', 'Crop2016': 'TextEdit', 'Modified_B': 'Hidden', 'Date_Data_': 'Hidden', 'Last_Modif': 'Hidden', 'GlobalID': 'Hidden', 'Shape_Leng': 'Hidden', 'Crop_Type': 'Hidden', 'Area__ac_': 'Hidden', 'Shape_Le_1': 'Hidden', 'Shape_Area': 'Hidden', });
lyr_CalaverasCountyWaterDistrict_4.set('fieldImages', {'OBJECTID_1': 'Hidden', 'DWR_revise': 'Hidden', 'Symb_class': 'Hidden', 'MULTIUSE': 'Hidden', 'CLASS1': 'Hidden', 'SUBCLASS1': 'Hidden', 'SPECOND1': 'Hidden', 'IRR_TYP1PA': 'Hidden', 'IRR_TYP1PB': 'Hidden', 'PCNT1': 'Hidden', 'CLASS2': 'Hidden', 'SUBCLASS2': 'Hidden', 'SPECOND2': 'Hidden', 'IRR_TYP2PA': 'Hidden', 'IRR_TYP2PB': 'Hidden', 'PCNT2': 'Hidden', 'CLASS3': 'Hidden', 'SUBCLASS3': 'Hidden', 'SPECOND3': 'Hidden', 'IRR_TYP3PA': 'Hidden', 'IRR_TYP3PB': 'Hidden', 'PCNT3': 'Hidden', 'UCF_ATT': 'Hidden', 'CROPTYP1': 'Hidden', 'CROPTYP2': 'Hidden', 'CROPTYP3': 'Hidden', 'Region': 'Hidden', 'Acres': 'Hidden', 'County': 'Hidden', 'Comments': 'Hidden', 'Source': 'Hidden', 'Crop2016': 'Hidden', 'Modified_B': 'Hidden', 'Date_Data_': 'Hidden', 'Last_Modif': 'Hidden', 'GlobalID': 'Hidden', 'Shape_Leng': 'Hidden', 'Shape_Area': 'Hidden', 'Crop_Type': 'Hidden', 'Area__ac_': 'Hidden', 'LAND_IQ_CR': 'Hidden', 'Field2': 'Hidden', 'SWAP_crop': 'Hidden', 'PPIC_crops': 'Hidden', 'Field5': 'Hidden', });
lyr_ClayWaterDistrict_5.set('fieldImages', {'OBJECTID_1': 'Hidden', 'OBJECTID': 'Hidden', 'AGENCYNAME': 'TextEdit', 'SOURCE': 'Hidden', 'AGENCYUNIQ': 'Hidden', 'LASTMODIFI': 'Hidden', 'MODIFIEDBY': 'Hidden', 'SOURCECOMM': 'Hidden', 'Date_Data_': 'Hidden', 'GlobalID': 'Hidden', 'Status': 'Hidden', 'Status2': 'Hidden', 'Area': 'Hidden', 'Acre_feet': 'Hidden', 'Ac_ft_acre': 'TextEdit', 'Shape_Leng': 'Hidden', 'Shape_Area': 'Hidden', });
lyr_GlennColusaIrrigationDistrict_6.set('fieldImages', {'OBJECTID_1': 'Hidden', 'DWR_revise': 'Hidden', 'Symb_class': 'Hidden', 'MULTIUSE': 'Hidden', 'CLASS1': 'Hidden', 'SUBCLASS1': 'Hidden', 'SPECOND1': 'Hidden', 'IRR_TYP1PA': 'Hidden', 'IRR_TYP1PB': 'Hidden', 'PCNT1': 'Hidden', 'CLASS2': 'Hidden', 'SUBCLASS2': 'Hidden', 'SPECOND2': 'Hidden', 'IRR_TYP2PA': 'Hidden', 'IRR_TYP2PB': 'Hidden', 'PCNT2': 'Hidden', 'CLASS3': 'Hidden', 'SUBCLASS3': 'Hidden', 'SPECOND3': 'Hidden', 'IRR_TYP3PA': 'Hidden', 'IRR_TYP3PB': 'Hidden', 'PCNT3': 'Hidden', 'UCF_ATT': 'Hidden', 'CROPTYP1': 'Hidden', 'CROPTYP2': 'Hidden', 'CROPTYP3': 'Hidden', 'Region': 'Hidden', 'Acres': 'Hidden', 'County': 'Hidden', 'Comments': 'Hidden', 'Source': 'Hidden', 'Crop2016': 'Hidden', 'Modified_B': 'Hidden', 'Date_Data_': 'Hidden', 'Last_Modif': 'Hidden', 'GlobalID': 'Hidden', 'Shape_Leng': 'Hidden', 'Shape_Area': 'Hidden', 'Crop_Type': 'Hidden', 'Area__ac_': 'Hidden', 'LAND_IQ_CR': 'Hidden', 'Field2': 'Hidden', 'SWAP_crop': 'Hidden', 'PPIC_crops': 'Hidden', 'Field5': 'Hidden', });
lyr_AverageSurfaceWaterDeliveries20092019inacftacre_7.set('fieldImages', {'OBJECTID_1': 'Hidden', 'OBJECTID': 'Hidden', 'AGENCYNAME': 'TextEdit', 'SOURCE': 'Hidden', 'AGENCYUNIQ': 'Hidden', 'LASTMODIFI': 'Hidden', 'MODIFIEDBY': 'Hidden', 'SOURCECOMM': 'Hidden', 'Date_Data_': 'Hidden', 'GlobalID': 'Hidden', 'Status': 'Hidden', 'Status2': 'Hidden', 'Area': 'Hidden', 'Acre_feet': 'Hidden', 'Ac_ft_acre': 'TextEdit', 'Shape_Leng': 'Hidden', 'Shape_Area': 'Hidden', });
lyr_SGMAGroundwaterBasins_8.set('fieldImages', {'OBJECTID': 'Hidden', 'Basin_Numb': 'Hidden', 'Basin_Subb': 'Hidden', 'Basin_Name': 'Hidden', 'Basin_Su_1': 'TextEdit', 'Region_Off': 'Hidden', 'GlobalID': 'Hidden', 'Priority': 'Hidden', });
lyr_NoData_1.set('fieldLabels', {});
lyr_OtherNonAg_2.set('fieldLabels', {'AGENCYNAME': 'header label', });
lyr_Urban_3.set('fieldLabels', {'Crop2016': 'header label', });
lyr_CalaverasCountyWaterDistrict_4.set('fieldLabels', {});
lyr_ClayWaterDistrict_5.set('fieldLabels', {'AGENCYNAME': 'header label', 'Ac_ft_acre': 'header label', });
lyr_GlennColusaIrrigationDistrict_6.set('fieldLabels', {});
lyr_AverageSurfaceWaterDeliveries20092019inacftacre_7.set('fieldLabels', {'AGENCYNAME': 'header label', 'Ac_ft_acre': 'header label', });
lyr_SGMAGroundwaterBasins_8.set('fieldLabels', {'Basin_Su_1': 'header label', });
lyr_SGMAGroundwaterBasins_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});