importPackage(Packages.org.csstudio.opibuilder.scriptUtil);


var stepval = display.getWidget("StepVal");

var step_size = PVUtil.getString(pvArray[0]);

var mode_amp = display.getWidget("StepSizeAmp");
var mode_phase = display.getWidget("StepSizePhase");


if(step_size == "Amp" ) 
{
	mode_amp.setPropertyValue("visible" , true);
	mode_phase.setPropertyValue("visible" , false);
	
} else {

	mode_amp.setPropertyValue("visible" , false);
	mode_phase.setPropertyValue("visible" , true);		
	
}