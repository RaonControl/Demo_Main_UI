<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<databrowser>
    <title></title>
    <save_changes>true</save_changes>
    <show_legend>false</show_legend>
    <show_toolbar>true</show_toolbar>
    <grid>true</grid>
    <scroll>true</scroll>
    <update_period>3.0</update_period>
    <scroll_step>5</scroll_step>
    <start>-1.00 h</start>
    <end>now</end>
    <archive_rescale>NONE</archive_rescale>
    <background>
        <red>255</red>
        <green>255</green>
        <blue>255</blue>
    </background>
    <title_font>FontAwesome|15|1</title_font>
    <label_font>FontAwesome|10|1</label_font>
    <scale_font>FontAwesome|9|0</scale_font>
    <legend_font>FontAwesome|9|0</legend_font>
    <axes>
        <axis>
            <visible>true</visible>
            <name>Value 1</name>
            <use_axis_name>false</use_axis_name>
            <use_trace_names>true</use_trace_names>
            <right>false</right>
            <color>
                <red>0</red>
                <green>0</green>
                <blue>0</blue>
            </color>
            <label_font>|10|0</label_font>
            <scale_font>|10|0</scale_font>
            <min>-0.018518518518519045</min>
            <max>9.981481481481481</max>
            <grid>false</grid>
            <autoscale>true</autoscale>
            <log_scale>false</log_scale>
        </axis>
        <axis>
            <visible>true</visible>
            <name>Value 2</name>
            <use_axis_name>false</use_axis_name>
            <use_trace_names>true</use_trace_names>
            <right>false</right>
            <color>
                <red>0</red>
                <green>0</green>
                <blue>0</blue>
            </color>
            <label_font>|10|0</label_font>
            <scale_font>|10|0</scale_font>
            <min>-0.018518518518519045</min>
            <max>9.981481481481481</max>
            <grid>false</grid>
            <autoscale>true</autoscale>
            <log_scale>false</log_scale>
        </axis>
        <axis>
            <visible>true</visible>
            <name>Value 3</name>
            <use_axis_name>false</use_axis_name>
            <use_trace_names>true</use_trace_names>
            <right>true</right>
            <color>
                <red>0</red>
                <green>0</green>
                <blue>0</blue>
            </color>
            <label_font>|10|0</label_font>
            <scale_font>|10|0</scale_font>
            <min>-0.018518518518519045</min>
            <max>9.981481481481481</max>
            <grid>false</grid>
            <autoscale>true</autoscale>
            <log_scale>false</log_scale>
        </axis>
    </axes>
    <annotations>
    </annotations>
    <pvlist>
        <pv>
            <display_name>RFQ Inlet Coolant</display_name>
            <visible>true</visible>
            <name>RFQ1:RCCS:TempH05</name>
            <axis>0</axis>
            <color>
                <red>255</red>
                <green>0</green>
                <blue>0</blue>
            </color>
            <trace_type>SINGLE_LINE</trace_type>
            <linewidth>2</linewidth>
            <point_type>NONE</point_type>
            <point_size>2</point_size>
            <waveform_index>0</waveform_index>
            <period>0.0</period>
            <ring_size>5000</ring_size>
            <request>OPTIMIZED</request>
        </pv>
        <pv>
            <display_name>RFQ Outlet Coolant</display_name>
            <visible>true</visible>
            <name>RFQ1:RCCS:TempH06</name>
            <axis>1</axis>
            <color>
                <red>0</red>
                <green>255</green>
                <blue>0</blue>
            </color>
            <trace_type>SINGLE_LINE</trace_type>
            <linewidth>2</linewidth>
            <point_type>NONE</point_type>
            <point_size>2</point_size>
            <waveform_index>0</waveform_index>
            <period>0.0</period>
            <ring_size>5000</ring_size>
            <request>OPTIMIZED</request>
        </pv>
        <pv>
            <display_name>RFQ Vacuum Level</display_name>
            <visible>true</visible>
            <name>RFQ1-Vac:VGP1:Vacuum</name>
            <axis>2</axis>
            <color>
                <red>0</red>
                <green>0</green>
                <blue>255</blue>
            </color>
            <trace_type>SINGLE_LINE</trace_type>
            <linewidth>2</linewidth>
            <point_type>NONE</point_type>
            <point_size>2</point_size>
            <waveform_index>0</waveform_index>
            <period>0.0</period>
            <ring_size>5000</ring_size>
            <request>OPTIMIZED</request>
        </pv>
    </pvlist>
</databrowser>