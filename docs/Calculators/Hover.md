# AH-1G Hover Performance Calculator

Modeled flight limits using Lycoming T53-L-13 data profiles.

<div class="ah1g-performance-calculator">

<div class="app-container">

<div class="input-row">

<div class="field">
<label for="gw">Gross Weight (lbs)</label>
<input type="number" id="gw" value="8500" min="6000" max="10000">
<div class="hint">Range: 6,000 - 9,500 lbs</div>
</div>

<div class="field">
<label for="pa">Pressure Altitude (ft)</label>
<input type="number" id="pa" value="3000" min="0" max="15000">
<div class="hint">Altitude dial setting</div>
</div>

<div class="field">
<label for="oat">Outside Air Temp (°C)</label>
<input type="number" id="oat" value="15" min="-30" max="50">
<div class="hint">Environmental air temperature</div>
</div>

<div class="field">
<label for="ice">Engine Anti-Ice</label>
<select id="ice">
<option value="0">OFF</option>
<option value="1">ON (Reduces Max Power)</option>
</select>
<div class="hint">Bleed-air consumption status</div>
</div>

</div>

<div class="actions">
<button onclick="runCalculations()">
Compute Flight Data
</button>
</div>

<div class="output-panel">

<div class="output-header">
Performance Metrics Results
</div>

<div class="row">
<span>Density Altitude</span>
<span id="outDA">Press compute</span>
</div>

<div class="row">
<span>Max Available Engine Torque</span>
<span id="outMaxTq">-</span>
</div>

<div class="row">
<span>HIGE Torque Required</span>
<span id="outHIGETq">-</span>
</div>

<div class="row">
<span>HOGE Torque Required</span>
<span id="outHOGETq">-</span>
</div>

<div class="row">
<span>HIGE Status</span>
<span id="outHIGEStat">-</span>
</div>

<div class="row">
<span>HOGE Status</span>
<span id="outHOGEStat">-</span>
</div>

</div>
</div>
</div>