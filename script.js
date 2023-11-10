/* API link to use in function:  https://zenquotes.io/api/quotes/, this link only gave error and sked for a key despite the page stating that it would not need one */
/*Trying this link instead: https://type.fit/api/quotes */

/*After multiple problems with the other links followed by troubleshooting, I decided to test if the same issues occur if I tried with the pokemon api that was suggested in the assigment*/


//collects the div-cards class, so it can be manipulated
const inspirationCard = document.querySelector(".outputCard");

//fetches data from the url and pushes/displays it browser
function getQuote() {
    fetch("https://pokeapi.co/api/v2/pokemon/ditto")
    .then((response) => response.json())
    .then((data) => {
        inspirationCard.innerHTML = "";
        console.log(data);
        const newQuote = document.createElement("p");
        newQuote.innerText = data;
        inspirationCard.appendChild(newQuote);
    })
    .catch((error) => console.log(error));
}