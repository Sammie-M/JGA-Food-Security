function calculateGarden() {
  const type = document.getElementById("gardenType").value;
  const length = parseFloat(document.getElementById("length").value);
  const width = parseFloat(document.getElementById("width").value);

  if (!type || isNaN(length) || isNaN(width) || length <= 0 || width <= 0) {
    document.getElementById("result").innerHTML =
      "⚠️ Please enter valid garden type, length, and width.";
    return;
  }

  // Calculate area
  const area = length * width;

  // Default values
  let waterPerPlant = 0.5;
  let fertilizerPerPlant = 0.2; // kg per plant
  let plantSpacing = 0.5;
  let plants = Math.floor(area / plantSpacing);
  let recommendedPlants = "";
  let estimatedBudget = 0;

  // Decision making by garden type
  switch (type) {
    case "Household Garden":
      waterPerPlant = 0.5;
      fertilizerPerPlant = 0.15;
      recommendedPlants = "Spinach, Lettuce, Tomatoes, Carrots";
      estimatedBudget = 652;
      break;

    case "School Garden":
      waterPerPlant = 0.7;
      fertilizerPerPlant = 0.25;
      recommendedPlants = "Cabbage, Beetroot, Spinach, Peas";
      estimatedBudget = 2100;
      break;

    case "Community Garden":
      waterPerPlant = 0.8;
      fertilizerPerPlant = 0.3;
      recommendedPlants = "Maize, Potatoes, Spinach, Onions";
      estimatedBudget = 3300;
      break;

    case "Urban Farming":
      waterPerPlant = 0.3;
      fertilizerPerPlant = 0.1;
      recommendedPlants = "Herbs, Lettuce, Strawberries, Chillies";
      estimatedBudget = 930;
      break;

    case "NGO Garden":
      waterPerPlant = 1.0;
      fertilizerPerPlant = 0.4;
      recommendedPlants = "Cabbage, Spinach, Beetroot, Carrots";
      estimatedBudget = 5200;
      break;

    default:
      document.getElementById("result").innerHTML =
        "⚠️ Invalid garden type selected.";
      return;
  }

  // Calculations
  const totalWaterPerWeek = plants * waterPerPlant * 7;
  const totalFertilizer = plants * fertilizerPerPlant;

  // Output using a simple loop for better structure
  const info = [
    
    `📏 Garden Area: ${area.toFixed(2)} m²`,
    `🌱 Estimated Plants: ${plants}`,
    `💧 Water Needed per Plant: ${waterPerPlant} L/day`,
    `💦 Total Water per Week: ${totalWaterPerWeek.toFixed(2)} L`,
    `🌾 Fertilizer per Plant: ${fertilizerPerPlant} kg`,
    `🧪 Total Fertilizer Needed: ${totalFertilizer.toFixed(2)} kg`,
    `🌿 Recommended Plants: ${recommendedPlants}`,
    `💰 Estimated Budget: R${estimatedBudget}`,
  ];

  let output =
    `<h3>🌻 Garden Summary</h3>🌍 <h4>Garden Type: ${type.charAt(0).toUpperCase() + type.slice(1)}</h4><ul>`;
  for (let i = 0; i < info.length; i++) {
    output += `<li>${info[i]}</li>`;
  }
  output += "</ul>";

  document.getElementById("result").innerHTML = output;
}
