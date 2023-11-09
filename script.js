/* API link to use in function:  https://zenquotes.io/api/quotes/, this link only gave error and sked for a key despite the page stating that it would not need one */
/*Trying this link instead: https://type.fit/api/quotes */


//collects the div-cards class, so it can be manipulated
const inspirationCard = document.querySelector(".inspoCard");

//fetches data from the url and pushes/displays it browser
function getQuote() {
    fetch("https://type.fit/api/quotes")
    .then((response) => response.json())
    .then((data) => {
        inspirationCard.innerHTML = "";
        console.log(data);
        const newQuote = document.createElement("p");
        newQuote.innerText = data.text/Math.random();
        inspirationCard.appendChild(newQuote);
    })
    .catch((error) => console.log(error));
}