importPackage(Packages.org.csstudio.opibuilder.scriptUtil);


var selectPID = display.getWidget("SelectPID_Amp");

var pid = PVUtil.getString(pvArray[0]);

var akp = display.getWidget("Akp");
var aki = display.getWidget("Aki");
var akd = display.getWidget("Akd");


if(pid == "Akp" ) 
{
	akp.setPropertyValue("visible" , true);
	aki.setPropertyValue("visible" , false);
	akd.setPropertyValue("visible" , false);
	
} else if( pid == "Aki" ) {

	akp.setPropertyValue("visible" , false);
	aki.setPropertyValue("visible" , true);	
	akd.setPropertyValue("visible" , false);	
	
} else {

	akp.setPropertyValue("visible" , false);
	aki.setPropertyValue("visible" , false);
	akd.setPropertyValue("visible" , true);	
	
}

