// Remove the <main id="main"> element
const main = document.getElementById("main");
main.remove();

// Create the new <h1> element
const newHeader = document.createElement("h1");

// Set its id to 'victory'
newHeader.id = "victory";

// Set the text content (your name here)
newHeader.textContent = "Alex Ndaula is the champion";

// Append the new h1 to the body
document.body.append(newHeader);
