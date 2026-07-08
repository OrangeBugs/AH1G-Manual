function runCalculations() {
    try {
        // Retrieve explicit values
        const grossWeight = Number(document.getElementById('gw').value) || 8500;
        const pressAlt = Number(document.getElementById('pa').value) || 0;
        const temperature = Number(document.getElementById('oat').value) || 0;
        const antiIceOn = document.getElementById('ice').value === "1";

        // 1. Calculate Density Altitude
        const standardTempAtAlt = 15 - (pressAlt * 0.00198);
        const densityAlt = pressAlt + (120 * (temperature - standardTempAtAlt));
        document.getElementById('outDA').textContent = Math.round(densityAlt).toLocaleString() + " ft";

        // 2. Compute Maximum Engine Torque Limit (Standard T53-L-13 structural limit is 50 PSI / 100%)
        let maxAvailableTq = 50.0;
        if (densityAlt > 4000) {
            maxAvailableTq = maxAvailableTq - ((densityAlt - 4000) * 0.0012);
        }
        if (antiIceOn) {
            maxAvailableTq = maxAvailableTq - 2.5; 
        }
        // Force logical minimum and structural maximum caps
        if (maxAvailableTq < 20) { maxAvailableTq = 20; }
        if (maxAvailableTq > 50) { maxAvailableTq = 50; }
        
        document.getElementById('outMaxTq').textContent = maxAvailableTq.toFixed(1) + " PSI (" + Math.round(maxAvailableTq * 2) + "%)";

        // 3. Compute Operational Torque Demands (Robust Linear Modifiers)
        const weightFactor = grossWeight / 8500;
        const altFactor = 1 + (densityAlt * 0.000025);
        
        // HIGE base mapping formula
        let higeTorque = 33.5 * weightFactor * altFactor;
        let hogeTorque = higeTorque * 1.15;

        document.getElementById('outHIGETq').textContent = higeTorque.toFixed(1) + " PSI (" + Math.round(higeTorque * 2) + "%)";
        document.getElementById('outHOGETq').textContent = hogeTorque.toFixed(1) + " PSI (" + Math.round(hogeTorque * 2) + "%)";

        // 4. Update Visual Evaluation Badges
        setBadge('outHIGEStat', maxAvailableTq - higeTorque);
        setBadge('outHOGEStat', maxAvailableTq - hogeTorque);

    } catch (error) {
        alert("An error occurred during calculations: " + error.message);
    }
}

function setBadge(elementId, margin) {
    const container = document.getElementById(elementId);
    if (margin > 3.0) {
        container.innerHTML = '<span class="badge go">GO (Clear Margin)</span>';
    } else if (margin >= 0) {
        container.innerHTML = '<span class="badge caution">MARGINAL LIMITS</span>';
    } else {
        container.innerHTML = '<span class="badge nogo">NO GO (Over Torque)</span>';
    }
}

