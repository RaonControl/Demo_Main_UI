<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<databrowser>
    <title>RCCS Room Environment - Temp</title>
    <save_changes>true</save_changes>
    <show_legend>true</show_legend>
    <show_toolbar>false</show_toolbar>
    <grid>true</grid>
    <scroll>true</scroll>
    <update_period>1.0</update_period>
    <scroll_step>1</scroll_step>
    <start>-1.00 days</start>
    <end>now</end>
    <archive_rescale>NONE</archive_rescale>
    <background>
        <red>255</red>
        <green>255</green>
        <blue>255</blue>
    </background>
    <title_font>Droid Sans|20|1</title_font>
    <label_font>Droid Sans|16|1</label_font>
    <scale_font>Droid Sans|16|0</scale_font>
    <legend_font>Droid Sans|16|0</legend_font>
    <axes>
        <axis>
            <visible>true</visible>
            <name>Temperature</name>
            <use_axis_name>true</use_axis_name>
            <use_trace_names>false</use_trace_names>
            <right>false</right>
            <color>
                <red>0</red>
                <green>0</green>
                <blue>0</blue>
            </color>
            <label_font>Droid Sans|14|1</label_font>
            <scale_font>Droid Sans|14|0</scale_font>
            <min>5.0</min>
            <max>30.0</max>
            <grid>false</grid>
            <autoscale>false</autoscale>
            <log_scale>false</log_scale>
        </axis>
        <axis>
            <visible>false</visible>
            <name>Value 2</name>
            <use_axis_name>false</use_axis_name>
            <use_trace_names>false</use_trace_names>
            <right>false</right>
            <color>
                <red>0</red>
                <green>0</green>
                <blue>0</blue>
            </color>
            <label_font>Droid Sans|14|0</label_font>
            <scale_font>|10|0</scale_font>
            <min>23.9734395750332</min>
            <max>27.9734395750332</max>
            <grid>false</grid>
            <autoscale>false</autoscale>
            <log_scale>false</log_scale>
        </axis>
        <axis>
            <visible>false</visible>
            <name>Value 3</name>
            <use_axis_name>false</use_axis_name>
            <use_trace_names>false</use_trace_names>
            <right>true</right>
            <color>
                <red>0</red>
                <green>0</green>
                <blue>0</blue>
            </color>
            <label_font>|10|0</label_font>
            <scale_font>|10|0</scale_font>
            <min>23.9734395750332</min>
            <max>27.9734395750332</max>
            <grid>false</grid>
            <autoscale>false</autoscale>
            <log_scale>false</log_scale>
        </axis>
    </axes>
    <annotations>
    </annotations>
    <pvlist>
        <pv>
            <display_name>RFQ1-TFC:ENV001:TempR</display_name>
            <visible>true</visible>
            <name>RFQ1-TFC:ENV001:TempR</name>
            <axis>0</axis>
            <color>
                <red>255</red>
                <green>0</green>
                <blue>128</blue>
            </color>
            <trace_type>SINGLE_LINE</trace_type>
            <linewidth>2</linewidth>
            <point_type>NONE</point_type>
            <point_size>2</point_size>
            <waveform_index>0</waveform_index>
            <period>0.0</period>
            <ring_size>30000</ring_size>
            <request>OPTIMIZED</request>
            <archive>
                <name>EPICS Archiver Appliance</name>
                <url>pbraw://192.168.2.251:17668/retrieval</url>
                <key>1</key>
            </archive>
        </pv>
        <pv>
            <display_name>RFQ1-TFC:ENV002:TempR</display_name>
            <visible>true</visible>
            <name>RFQ1-TFC:ENV002:TempR</name>
            <axis>0</axis>
            <color>
                <red>0</red>
                <green>128</green>
                <blue>192</blue>
            </color>
            <trace_type>SINGLE_LINE</trace_type>
            <linewidth>2</linewidth>
            <point_type>NONE</point_type>
            <point_size>2</point_size>
            <waveform_index>0</waveform_index>
            <period>0.0</period>
            <ring_size>30000</ring_size>
            <request>OPTIMIZED</request>
            <archive>
                <name>EPICS Archiver Appliance</name>
                <url>pbraw://192.168.2.251:17668/retrieval</url>
                <key>1</key>
            </archive>
        </pv>
        <pv>
            <display_name>RFQ1-TFC:ENV003:TempR</display_name>
            <visible>true</visible>
            <name>RFQ1-TFC:ENV003:TempR</name>
            <axis>0</axis>
            <color>
                <red>64</red>
                <green>0</green>
                <blue>128</blue>
            </color>
            <trace_type>SINGLE_LINE</trace_type>
            <linewidth>2</linewidth>
            <point_type>NONE</point_type>
            <point_size>2</point_size>
            <waveform_index>0</waveform_index>
            <period>0.0</period>
            <ring_size>30000</ring_size>
            <request>OPTIMIZED</request>
            <archive>
                <name>EPICS Archiver Appliance</name>
                <url>pbraw://192.168.2.251:17668/retrieval</url>
                <key>1</key>
            </archive>
        </pv>
    </pvlist>
</databrowser>