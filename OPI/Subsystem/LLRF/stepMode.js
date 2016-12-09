importPackage(Packages.org.csstudio.opibuilder.scriptUtil);


var stepMode = display.getWidget("StepMode");

var step_mode = PVUtil.getString(pvArray[0]);

var mode_amp = display.getWidget("AmpMode");
var mode_phase = display.getWidget("PhaseMode");



if(step_mode == "Amp" ) 
{
	mode_phase.setPropertyValue("visible" , false);
	mode_amp.setPropertyValue("visible" , true);
	
} else if( step_mode == "Phase" ) {

	mode_amp.setPropertyValue("visible" , false);
	mode_phase.setPropertyValue("visible" , true);
	
}
