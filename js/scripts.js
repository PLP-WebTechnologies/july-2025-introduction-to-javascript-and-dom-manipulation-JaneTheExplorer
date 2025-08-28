// Variables 
let userName = "Jane";
let isLoggedIn = false;

if (isLoggedIn) {
  document.getElementById("main-heading").textContent = `Welcome back, ${userName}!`;
} else {
  document.getElementById("main-heading").textContent = `Hello, ${userName}!`;
}

// Functions
function changeColor() {
  document.body.style.backgroundColor = getRandomColor();
}

function getRandomColor() {
  const colors = ["#FFDDC1", "#C1FFD7", "#C1D4FF", "#FFD1DC", "#FFFACI"];
  return colors[Math.floor(Math.random() * colors.length)];
}

//  Loops
function showItems() {
  const items = ["HTML", "CSS", "Javascript", "Python"];
  let outputHTML = "<ul>";

  // Use of for loop
  for (let i = 0; i < items.length; i++) {
    outputHTML += `<li>${items[i]}</li>`;
  }

  outputHTML += "</ul>";

  // Use of each loop
  items.forEach(item => console.log("Item:", item));

  // Interactions
  const outputDiv = document.getElementById("output");
  outputDiv.innerHTML = outputHTML;
  outputDiv.style.color = "#333";
  outputDiv.style.fontWeight = "bold";
}
