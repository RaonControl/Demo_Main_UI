importPackage(Packages.org.csstudio.opibuilder.scriptUtil);

var powerSelect = display.getWidget("PowerSelect");

var power_sel = PVUtil.getString(pvArray[0]);


var power2 = display.getWidget("Power2");
var meter_power2 = display.getWidget("Meter_Power2");


var dBm_power2 = display.getWidget("dBmPower2");
var meter_dBm_power2 = display.getWidget("Meter_dBmPower2");



if(power_sel == "Amplitude (mV)" ) 
{
	dBm_power2.setPropertyValue("visible" , false);
	meter_dBm_power2.setPropertyValue("visible" , false);
	
	power2.setPropertyValue("visible" , true);
	meter_power2.setPropertyValue("visible" , true);
	
} else if( power_sel == "Power (dBm)" ) {


	dBm_power2.setPropertyValue("visible" , true);
	meter_dBm_power2.setPropertyValue("visible" , true);
	

	power2.setPropertyValue("visible" , false);
	meter_power2.setPropertyValue("visible" , false);
	
}
