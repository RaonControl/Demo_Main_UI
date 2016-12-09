importPackage(Packages.org.csstudio.opibuilder.scriptUtil);
importPackage(Packages.org.eclipse.jface.dialogs);
importPackage(Packages.org.csstudio.platform.data);
importPackage(Packages.java.lang);


var title= PVUtil.getString(pvs[0]);

if(title == "Main.opi") {
widget.setPropertyValue("text", "SCL-Demo Main");

} else if(title == "Subsystem/ECR-IS/ECR-IS_Main.opi") {
widget.setPropertyValue("text", "ECR-IS");

} else if(title == "Subsystem/LEBT/LEBT_Main.opi")  {
widget.setPropertyValue("text", "LEBT");

} else if(title == "Subsystem/LLRF/LLRF_Main.opi")  {
widget.setPropertyValue("text", "LLRF");

} else if(title == "Subsystem/RFQ/RFQ_Main.opi")  {
widget.setPropertyValue("text", "RFQ");

} else if(title == "Subsystem/MEBT/MEBT_Main.opi")  {
widget.setPropertyValue("text", "MEBT");

} else if(title == "Subsystem/QWR/QWR_Main.opi")  {
widget.setPropertyValue("text", "QWR");

} else if(title == "Subsystem/Cryogenics/Cryo_Main.opi")  {
widget.setPropertyValue("text", "Cryo");

//} else if(title == "Subsystem/Vacuum/Vacuum_Main.opi")  {
//widget.setPropertyValue("text", "Vacuum");

} else if(title == "Subsystem/Vacuum/Vacuum_Main_.opi")  {
widget.setPropertyValue("text", "Vacuum");

} else if(title == "Subsystem/BeamPhysics/BeamPhysics_Main.opi")  {
widget.setPropertyValue("text", "Beam Physics");

} else if(title == "Subsystem/Beamdiagnosis/Beamdiagnosis_Main.opi")  {
widget.setPropertyValue("text", "Beam diagnosis");

} else {
widget.setPropertyValue("text", "SCL-Demo Main");
}
