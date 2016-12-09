importPackage(Packages.org.csstudio.opibuilder.scriptUtil);

var powerSelect = display.getWidget("PowerSelect");

var power_sel = PVUtil.getString(pvArray[0]);

var power0 = display.getWidget("Power0");
var power1 = display.getWidget("Power1");
var power2 = display.getWidget("Power2");

var dBm_power0 = display.getWidget("dBmPower0");
var dBm_power1 = display.getWidget("dBmPower1");
var dBm_power2 = display.getWidget("dBmPower2");



if(power_sel == "Amplitude (mV)" ) 
{
	dBm_power0.setPropertyValue("visible" , false);
	dBm_power1.setPropertyValue("visible" , false);
	dBm_power2.setPropertyValue("visible" , false);
	
	power0.setPropertyValue("visible" , true);
	power1.setPropertyValue("visible" , true);
	power2.setPropertyValue("visible" , true);
	
} else if( power_sel == "Power (dBm)" ) {

	dBm_power0.setPropertyValue("visible" , true);
	dBm_power1.setPropertyValue("visible" , true);
	dBm_power2.setPropertyValue("visible" , true);
	
	power0.setPropertyValue("visible" , false);
	power1.setPropertyValue("visible" , false);
	power2.setPropertyValue("visible" , false);
	
}
