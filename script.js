/* API link to use in function:  https://zenquotes.io/api/quotes/, this link only gave error and asked for a key despite the page stating that it would not need one */
/*Trying this link instead: https://type.fit/api/quotes */

/*After multiple problems with the other links followed by troubleshooting, 
I decided to test if the same issues occur if I tried with the pokemon api that was 
suggested in the assigment.
Still just gives info in the console log and "undefined as output*/


//collects the div-cards class, so it can be manipulated
const inspirationCard = document.querySelector(".outputCard");

//fetches data from the url and pushes/displays it browser(MY code!)
//  function getQuote() {
//      fetch("https://type.fit/api/quotes")
//      .then((response) => response.json())
//      .then((data) => {
//          inspirationCard.innerHTML = "";
//          console.log(data);
//          const newQuote = document.createElement("p");
//          newQuote.innerText = data;
//          inspirationCard.appendChild(newQuote);
//      })
//      .catch((error) => console.log(error));
// }


/*Got a code from chatGPT that seems to work, tho I'm not clear on if I comprehend this code. Also it 
only collects one of the values from the API*/
// function getQuote() {
//     fetch("https://type.fit/api/quotes")
//     .then((response) => {
//         if (!response.ok) {
//             throw new Error("Network response was not ok");
//         }
//         return response.json();
//     })
//     .then((data) => {
//         console.log(data);
//         if (data.length > 0) {
//             const newQuote = document.createElement("p");
//             newQuote.innerText = data[0].text;
//             inspirationCard.innerHTML = "";
//             inspirationCard.appendChild(newQuote);
//         } else {
//             console.error("No quotes found in the API response");
//         }
//     })
//     .catch((error) => console.error("Error fetching data:", error));
// }

//copy pasting another code from chatGPT to see if it runs correctly and if it does, I'll need to dissect it and figure out what makes it work
function getQuote() {
    fetch("https://type.fit/api/quotes")
    .then((response) => {
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.json();
    })
    .then((data) => {
        console.log(data);
        if (data.length > 0) {
            const randomIndex = Math.floor(Math.random() * data.length);
            const randomQuote = data[randomIndex].text;

            const newQuote = document.createElement("p");
            newQuote.innerText = randomQuote;

            inspirationCard.innerHTML = "";
            inspirationCard.appendChild(newQuote);
        } else {
            console.error("No quotes found in the API response");
        }
    })
    .catch((error) => console.error("Error fetching data:", error));
}

//The last chatGPT code does work, but it has code in it that is foreign to me...