/* -- Uppgift 4 ---------------------------------------------------------------------- */

// Hämtar elementet på index 0 med name-attributet divStyle 
const checkbox = document.getElementsByName("divStyle")[0];

// Hämtar element med klassnamn textfield
const textfields = document.getElementsByClassName("textfield");

// Hämtar element från listan med element med klassnamnet textfield
const colorField = textfields[0];
const contentField = textfields[1];

// Hämtar button-elementet
const button = document.querySelector("button");

//Hämtar elementet med id result
const div = document.getElementById("result");

/* -- Uppgift 5 ---------------------------------------------------------------------- */

function handleInput(e) {
  // Ger utskrift i konsolen med vilket inputfält som fick input
  console.log(e.target);

  // Lagrar name-attributet i en variabel
  const inputName = e.target.name;

  // Om name-atttributet är "content" ska värdet i inputfältet lagras i div-elementet
  if (inputName == "content") {
    div.innerHTML = e.target.value;
  }
}

/* -- Uppgift 6 ---------------------------------------------------------------------- */

// Kopplar eventlyssnare till funktionen handleInput när någon skriver i respektive 
// input fält
colorField.addEventListener("input", handleInput);
contentField.addEventListener("input", handleInput);

// Kopplar en eventlyssnare till en anonym arrowfunktion när ändring görs (klickar i
// eller klickar ur) checkboxen
checkbox.addEventListener("change", (e) => {
  // Lagrar värdet i inputfältet för färg i variabeln color
  const color = colorField.value;
  // Ändrar bakgrundsfärgen på div-elementet till värdet med färgen
  div.style.backgroundColor = color;
});

// Kopplar eventlyssnare till en anonym arrowfunktion när knappen trycks på
button.addEventListener("click", (e) => {
  // Tar bort div-elementet från DOM-trädet
  div.remove();
});

/* ----------------------------------------------------------------------------------- */