importPackage(Packages.org.csstudio.opibuilder.scriptUtil);

var FC12= PVUtil.getDouble(pvs[0]);
var FC3= PVUtil.getDouble(pvs[1]);

var GV1= PVUtil.getString(pvs[2]);
var GV3= PVUtil.getString(pvs[3]);

var bool= PVUtil.getDouble(pvs[4]);

if(FC12 < 1.0E-6 && FC3 < 1.0E-6 && GV1=="On" && GV3=="On"){
pvs[5].setValue(1);
widget.setPropertyValue("on_color",ColorFontUtil.getColorFromRGB(0,255,0));
widget.setPropertyValue("on_label","Beam ON");
}

else if(FC12 > 1.0E-6 && FC3 < 1.0E-6 && GV1=="On" && GV3=="On"){
pvs[5].setValue(1);
widget.setPropertyValue("on_color",ColorFontUtil.getColorFromRGB(255,0,255));
widget.setPropertyValue("on_label","Beam Ready");
}

else {
pvs[5].setValue(0);
widget.setPropertyValue("on_label","");
widget.setPropertyValue("off_label","");
}	