importPackage(Packages.org.csstudio.opibuilder.scriptUtil);
importPackage(Packages.org.csstudio.platform.data);

var p11 = PVUtil.getDouble(pvs[0]);
var n11 = PVUtil.getDouble(pvs[1]);

pvs[1].setValue(PVUtil.getDouble(pvs[0]));




var hv1 = PVUtil.getDouble(pvs[0]);
var hv2 = PVUtil.getDouble(pvs[1]);
var p11bool = PVUtil.getDouble(pvs[2]);
var n11bool = PVUtil.getDouble(pvs[3]);


pvs[1].setValue(PVUtil.getDouble(pvs[0]));
pvs[2].setValue(PVUtil.getDouble(pvs[0]));
pvs[3].setValue(PVUtil.getDouble(pvs[0]));
