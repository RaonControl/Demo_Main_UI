<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<databrowser>
    <title>Quadrupole Magnet1</title>
    <save_changes>true</save_changes>
    <show_legend>true</show_legend>
    <show_toolbar>false</show_toolbar>
    <grid>true</grid>
    <scroll>true</scroll>
    <update_period>1.0</update_period>
    <scroll_step>1</scroll_step>
    <start>-1 days</start>
    <end>now</end>
    <archive_rescale>NONE</archive_rescale>
    <background>
        <red>255</red>
        <green>255</green>
        <blue>255</blue>
    </background>
    <title_font>Droid Sans|15|1</title_font>
    <label_font>Droid Sans|10|1</label_font>
    <scale_font>Droid Sans|9|0</scale_font>
    <legend_font>Droid Sans|9|0</legend_font>
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
            <label_font>|10|0</label_font>
            <scale_font>|10|0</scale_font>
            <min>297.18</min>
            <max>301.61</max>
            <grid>false</grid>
            <autoscale>true</autoscale>
            <log_scale>false</log_scale>
        </axis>
    </axes>
    <annotations>
    </annotations>
    <pvlist>
        <pv>
            <display_name>RFQ1-TFc:ENV:TempR4</display_name>
            <visible>true</visible>
            <name>RFQ1-TFc:ENV:TempR4</name>
            <axis>0</axis>
            <color>
                <red>255</red>
                <green>0</green>
                <blue>0</blue>
            </color>
            <trace_type>AREA</trace_type>
            <linewidth>2</linewidth>
            <point_type>NONE</point_type>
            <point_size>2</point_size>
            <waveform_index>0</waveform_index>
            <period>0.0</period>
            <ring_size>5000</ring_size>
            <request>OPTIMIZED</request>
            <archive>
                <name>EPICS Archiver Appliance</name>
                <url>pbraw://192.168.2.251:17668/retrieval</url>
                <key>1</key>
            </archive>
        </pv>
    </pvlist>
</databrowser>