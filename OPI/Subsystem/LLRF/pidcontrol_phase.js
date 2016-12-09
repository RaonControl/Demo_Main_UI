importPackage(Packages.org.csstudio.opibuilder.scriptUtil);


var selectPID = display.getWidget("SelectPID_Phase");

var pid = PVUtil.getString(pvArray[0]);

var pkp = display.getWidget("Pkp");
var pki = display.getWidget("Pki");
var pkd = display.getWidget("Pkd");


if(pid == "Pkp" ) 
{
	pkp.setPropertyValue("visible" , true);
	pki.setPropertyValue("visible" , false);
	pkd.setPropertyValue("visible" , false);
	
} else if( pid == "Pki" ) {

	pkp.setPropertyValue("visible" , false);
	pki.setPropertyValue("visible" , true);	
	pkd.setPropertyValue("visible" , false);
	
} else {

	pkp.setPropertyValue("visible" , false);
	pki.setPropertyValue("visible" , false);
	pkd.setPropertyValue("visible" , true);		
	
}

