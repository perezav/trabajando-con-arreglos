// Escribe tu solución aquí
document.addEventListener("DOMContentLoaded", (e) => {
  // Filtrar los elementos de tipo String
  const stringElements = strangeArray.filter((element) => typeof element === "string");

  // Ordenar alfabéticamente los elementos de tipo String
  stringElements.sort();

  // Mostrar la lista en el elemento "ul" de id "list"
  showList(stringElements);
});

// Resto del código (sin cambios)
const strangeArray = [
  "Zero",
  function () {
    alert("Hola soy una función en un array");
  },
  22,
  null,
  "Go lang",
  undefined,
  "Cobol",
  "I'm programmer",
  -2000,
  "Hello world",
  `One is ${1}`,
  { name: "Info", lastname: "last info" },
  () => true,
  function showNumbers() {
    return "1, 2, 3, 4";
  },
  "Another String",
  ["Hola mundo!"],
  "b is a letter",
  "JavaScript",
];

function showList(array) {
  const container = document.getElementById("list");
  container.innerHTML = "";
  array.forEach((element) => {
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(element));
    container.appendChild(li);
  });
}

document.addEventListener("DOMContentLoaded", (e) => {
  const strings = strangeArray.filter(elemento => typeof (elemento) === 'string');
  strings.sort(function(a, b){
    return a.localeCompare(b);
  });
  showList(strings);
});