importPackage(Packages.org.csstudio.opibuilder.scriptUtil);


var positionPV = pvs[1];
var position = PVUtil.getDouble(pvs[1]);
var stop = PVUtil.getDouble(pvs[2]);



if(stop != 1){
	positionPV.setValue((position-20)%666);
	widget.setPropertyValue("x", position+666);
	widget.setPropertyValue("no_animation", false);	

	
}else
	widget.setPropertyValue("no_animation", true);
	