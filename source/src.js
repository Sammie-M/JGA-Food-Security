function calculateGarden() {
  const length = parseFloat(document.getElementById("length").value);
  const width = parseFloat(document.getElementById("width").value);
  const spacing = parseFloat(document.getElementById("spacing").value);
  const water = parseFloat(document.getElementById("water").value);

  if (
    isNaN(length) ||
    isNaN(width) ||
    isNaN(spacing) ||
    isNaN(water) ||
    spacing <= 0
  ) {
    document.getElementById("result").innerHTML =
      "⚠️ Please enter valid positive numbers for all fields.";
    return;
  }

  const area = length * width;
  const plants = Math.floor(area / spacing);
  const totalWater = plants * water * 7;

  document.getElementById("result").innerHTML = `
        <strong>Results:</strong><br>
        🌿 Garden Area: ${area.toFixed(2)} m²<br>
        🌱 Number of Plants: ${plants}<br>
        💧 Water Needed per Week: ${totalWater.toFixed(2)} litres
      `;
}
