//========CONSTANTS========//
// const cards = [   {key:'A', value: 14},
//                   {key:'B', value: 13},
//                   {key:'C', value: 12},
//                   {key:'D', value: 11},
//                   {key:'E', value: 10},
//                   {key:'F', value: 9},
//                   {key:'G', value: 8},
//                   {key:'H', value: 7},
//                   {key:'I', value: 6},
//                   {key:'J', value: 5},
//                   {key:'K', value: 4},
//                   {key:'L', value: 3},
//                   {key:'M', value: 2},
//                   {key:'N', value: 1},  ]

const cards = [0,0,0,0,0,0,1,1,1,1,1,1,2,2,2,2,2,2,3,3,3,3,3,3,4,4,4,4,4,4,5,5,5,5,5,5,6,6,6,6,6,6,7,7,7,7,7,7,8,8,8,8,8,8,9,9,9,9,9,9,10,10,10,10,10,10,11,11,11,11,11,11,12,12,12,12,12,12,13,13,13,13,13,13,14,14,14,14,14,14,15,15,15,15,15,15,16,16,16,16,16,16,17,17,17,17,17,17,18,18,18,18,18,18,19,19,19,19,19,19]


//========STATE VARIABLES========//



var playerSideDeck = [];
var compSideDeck = [];
// var playerCard = [];
// var compCard = [];
var shuffledDeck;
let playerDeck = []
let compDeck = []
let warField = []


//========CACHED ELEMENTS========//
// messageEl.ducument.getElementById()
        //this is where the elements would be grabbed from the HTML to be used in JS
const playAgain = document.getElementById('replay')
const startGame = document.getElementById('start')
const messageEl = document.querySelector('h2')
const deckEl = document.getElementById("player")
const cardFlip = document.getElementById("draw")


//========EVENT LISTENERS========//
        // this will be where I will state the event listener for the player and also at the end of the game, I will state an event listener for the "play again" button.

document.getElementById('start')
        .addEventListener('click', handleClick)

        document.getElementById("draw").addEventListener('click', handleDraw)



// playAgain.addEventListener('click', init);

//========FUNCTIONS========//
// init();

function handleClick(evt) {
        if(evt.target.tagName !== 'BUTTON') {
                return;
        }

        dealCards(cards)
        function dealCards(cards) {
                let count = 0
        while(cards.length) {
                let randomCard = Math.floor(Math.random() * (cards.length))
                let card = cards.splice(randomCard,1)[0]
        if(count % 2) {
                playerDeck.push(card)
        } else {
                compDeck.push(card)
        }
        count++
        }
   }

}

let playerVal, compVal, playerWarCards = [], compWarCards = [];



function handleDraw(evt) {
        if (evt.target.tagName === 'BUTTON') 
        drawCard()
        function drawCard() {
                let playerDraw = playerDeck.splice(0,1);
        playerVal = playerDraw[0]
                let compDraw = compDeck.splice(0,1);
        compVal = compDraw[0]
        console.log(playerVal)
        console.log(compVal)
        console.log(playerDeck)
        console.log(compDeck)
        console.log(playerSideDeck)
        console.log(compSideDeck)
        compareCards();
   }
}


function compareCards() {
       
        if (playerVal > compVal) {
                messageEl.textContent = "Player PoKemon wins!"
                playerSideDeck.push(playerVal , compVal)
        
               if (compDeck.length  === 0 && playerSideDeck.length > compSideDeck.length) {
                messageEl.textContent = "You are the PokeWar Master!"
           }
           console.log(warField);
               if (warField.length !== 0) {
                       warField.forEach( v => {
                               playerSideDeck.push(v);
                       })

                       warField = [];
               }
       } else if (compVal > playerVal) {
                messageEl.textContent = "Computer PoKemon wins!"
                compSideDeck.push(playerVal, compVal)

               if (playerDeck.length === 0 && compSideDeck.length > playerSideDeck.length) {
                messageEl.textContent = "Computer is the PokeWar Master!"
               }
               console.log(warField);
               if (warField.length !== 0) {
                        warField.forEach( v => {
                                compSideDeck.push(v);
                        })
                        
                        warField = [];
                }
       } else if (playerVal === compVal) {
                messageEl.textContent = "WAR!"

                tie()
        }      
    
}

// create the tie function 
function tie() {
        console.log('tie');
        warField.push(playerVal, compVal);
        
        if(playerDeck.length >= 5) {
                playerWarCards = playerDeck.splice(0,4)
        }
        if(compDeck.length >= 5) {
                compWarCards = compDeck.splice(0,4)
        }
        playerWarCards.forEach(v => {
            warField.push(v)
        })
        compWarCards.forEach(v => {
            warField.push(v)
        })


}




        //if playerCard > compCard, player takes both cards and places them face up next to his/her current playing deck which is faced down.
        //if playerCard < compCard, comp takes bith cards and they are placed next to it's current playing deck which is faced down.

        //if playerCard == compCard,  top 5 cards from each deck will be placed face down on the play field and the 6th card will be faced up to declare winner.

//========DISPLAYED MESSAGES========//

        // this is where the massage will be displayed of who won the card battle, or   the whole game


//========DISPLAY IMAGES========//
        //if I have some images, I will include them during the game.