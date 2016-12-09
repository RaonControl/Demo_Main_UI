importPackage(Packages.org.csstudio.opibuilder.scriptUtil);
importPackage(Packages.org.eclipse.jface.dialogs);
importPackage(Packages.org.csstudio.platform.data);
importPackage(Packages.java.lang);

var info= PVUtil.getString(pvs[0]);

if(info == "Main.opi") {
widget.setPropertyValue("text", "*MJ. Park (mijoy0909@ibs.re.kr), Control group, AET    *Last modified : 2016/11/17");

} else if(info == "Subsystem/ECR-IS/ECR-IS_Main.opi") {
widget.setPropertyValue("text", "*MJ. Park (mijoy0909@ibs.re.kr), Control Group, AET / MJ.Kim (mjkim@ibs.re.kr), RH Group, RI exp.   *Last modified : 2016/11/29");

} else if(info == "Subsystem/LEBT/LEBT_Main.opi")  {
widget.setPropertyValue("text", "*MJ. Park (mijoy0909@ibs.re.kr), Control Group, AET / MJ.Kim (mjkim@ibs.re.kr), RH Group, RI exp.   *Last modified : 2016/11/29");

} else if(info == "Subsystem/LLRF/LLRF_Main.opi")  {
widget.setPropertyValue("text", "*MJ. Park (mijoy0909@ibs.re.kr), Control Group, AET /  ??, RF Group, AET   *Last modified : 2016/11/17");

} else if(info == "Subsystem/RFQ/RFQ_Main.opi")  {
widget.setPropertyValue("text", "*MJ. Park (mijoy0909@ibs.re.kr), Control Group, AET /  BH.Choi (123cbh@ibs.re.kr ), Injector Group, AFT   *Last modified : 2016/11/29");

} else if(info == "Subsystem/MEBT/MEBT_Main.opi")  {
widget.setPropertyValue("text", "*MJ. Park (mijoy0909@ibs.re.kr), Control group, AET/   HJ.Kim (hjkim87@ibs.re.kr ), Injector Group, AFT   *Last modified : 2016/11/29");

} else if(info == "Subsystem/QWR/QWR_Main.opi")  {
widget.setPropertyValue("text", "*MJ. Park (mijoy0909@ibs.re.kr), Control group, AET    *Last modified : 2016/11/17");

} else if(info == "Subsystem/Cryogenics/Cryo_Main.opi")  {
widget.setPropertyValue("text", "*MJ. Park (mijoy0909@ibs.re.kr), Control group, AET    *Last modified : 2016/11/17");

} else if(info == "Subsystem/Vacuum/Vacuum_Main_.opi")  {
widget.setPropertyValue("text", "MJ. Park (mijoy0909@ibs.re.kr), Control Group, AET /  HJ.Son (hjson@ibs.re.kr ), Vacuum Group, AET   *Last modified : 2016/11/29");


//} else if(info == "Subsystem/Vacuum/Vacuum_Main.opi")  {
//widget.setPropertyValue("text", "MJ. Park (mijoy0909@ibs.re.kr), Control Group, AET /  HJ.Son (hjson@ibs.re.kr ), Vacuum Group, AET   *Last modified : 2016/11/29");

} else if(info == "Subsystem/Beamdiagnosis/Beamdiagnosis_Main.opi")  {
widget.setPropertyValue("text", "*MJ. Park (mijoy0909@ibs.re.kr), Control group, AET    *Last modified : 2016/11/17");

} else {
widget.setPropertyValue("text", "*MJ. Park (mijoy0909@ibs.re.kr), Control group, AET    *Last modified : 2016/11/17");
}
