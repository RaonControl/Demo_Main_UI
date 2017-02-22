importPackage(Packages.org.csstudio.opibuilder.scriptUtil); 
importPackage(Packages.org.csstudio.opibuilder.scriptUtil); 
importPackage(Packages.org.eclipse.jface.dialogs);
importPackage(Packages.org.csstudio.platform.data);
importPackage(Packages.java.lang);

var pvStr0 = PVUtil.getString(pvs[0]);
if(pvStr0=="All")
display.getWidget("db").setPropertyValue("opi_file", "[LC]Vacuum_Main_DB.opi");
else if(pvStr0=="50kV")
display.getWidget("db").setPropertyValue("opi_file", "[LC]Vacuum_50Kv_DB.opi");
else if(pvStr0=="70kV")
display.getWidget("db").setPropertyValue("opi_file", "[LC]Vacuum_70Kv_DB.opi");
else if(pvStr0=="Ground")
display.getWidget("db").setPropertyValue("opi_file", "[LC]Vacuum_Ground_DB.opi");
else if(pvStr0=="LEBT")
display.getWidget("db").setPropertyValue("opi_file", "[LC]Vacuum_LEBT2_DB.opi");
else if(pvStr0=="RFQ")
display.getWidget("db").setPropertyValue("opi_file", "[LC]Vacuum_RFQ_DB.opi");
else if(pvStr0=="MEBT")
display.getWidget("db").setPropertyValue("opi_file", "[LC]Vacuum_MEBT_DB.opi");
else if(pvStr0=="QWR")
display.getWidget("db").setPropertyValue("opi_file", "[LC]Vacuum_QWR_DB.opi");
else
display.getWidget("db").setPropertyValue("opi_file", "[LC]Vacuum_Main_DB.opi");
