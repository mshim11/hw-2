/*define first array & user input*/
let firstArray = [];

for (let i = 0; i < 3; i++) firstArray.push(prompt("Enter a word"));

document.getElementById("li").innerHTML =
  firstArray.join("</li><li>") + "</li>";

/* scramble button*/
let button = document.createElement("button");
button.innerHTML = "scramble!";
let body = document.getElementsByTagName("body")[0];
body.appendChild(button);

/*define second array*/
let secondArray = firstArray.map(function(oneWord) {
  return (
    oneWord.charAt(oneWord.length - 1) +
    oneWord.substring(1, oneWord.length - 1) +
    oneWord.charAt(0)
  );
});

/*hide*/
function hideIt() {
  let obj = document.getElementById("section1");
  if (obj.style.display == "block") obj.style.display = "none";
  else obj.style.display = "none";
}

/*button onclick action*/
button.addEventListener("click", function() {
  (document.getElementById("ul").innerHTML =
    secondArray.join("</ul><ul>") + "</ul>"),
    hideIt();
});
