const colorPalette = document.getElementById("color-palette");
const generatePaletteBtn = document.getElementById("generate-palette-btn");

const colors = ["color1", "color2", "color3", "color4", "color5"];

// Generates a random hex code
function getRandomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Generates harmonious color combinations
function generateColors() {
  let baseColor = getRandomColor();
  let color1 = LightenDarkenColor(baseColor, -30);
  let color2 = LightenDarkenColor(baseColor, -20);
  let color3 = LightenDarkenColor(baseColor, 10);
  let color4 = LightenDarkenColor(baseColor, 20);
  let color5 = LightenDarkenColor(baseColor, 30);
  let generatedColors = [color1, color2, color3, color4, color5];
  return generatedColors;
}

// Lightens or darkens a color
function LightenDarkenColor(col, amt) {
  let usePound = false;

  if (col[0] == "#") {
    col = col.slice(1);
    usePound = true;
  }

  let num = parseInt(col, 16);

  let r = (num >> 16) + amt;

  if (r > 255) r = 255;
  else if (r < 0) r = 0;

  let b = ((num >> 8) & 0x00ff) + amt;

  if (b > 255) b = 255;
  else if (b < 0) b = 0;

  let g = (num & 0x0000ff) + amt;

  if (g > 255) g = 255;
  else if (g < 0) g = 0;

  return (usePound ? "#" : "") + (g | (b << 8) | (r << 16)).toString(16);
}

// Applies generated colors to the color palette
// Applies generated colors to the color palette
function applyColors() {
    let generatedColors = generateColors();
    for (let i = 0; i < colors.length; i++) {
      document.getElementById(colors[i]).style.backgroundColor = generatedColors[i];
    }
}
  
// Call the function to apply the colors when the page loads
window.onload = function() {
    applyColors();
};
  
// Add event listener to the button to generate a new palette when clicked
generatePaletteBtn.addEventListener("click", function() {
    applyColors();
});