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

const cards = [0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,9,9,9,9,10,10,10,10,11,11,11,11,12,12,12,12,13,13,13,13,14,14,14,14]


//========STATE VARIABLES========//

var playerSideDeck = [];
var compSideDeck = [];
var playerCard = [];
var compCard = [];
var shuffledDeck;
let playerDeck = []
let compDeck = []


//========CACHED ELEMENTS========//
// messageEl.ducument.getElementById()
        //this is where the elements would be grabbed from the HTML to be used in JS




//========EVENT LISTENERS========//
        // this will be where I will state the event listener for the player and also at the end of the game, I will state an event listener for the "play again" button.


//========FUNCTIONS========//
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
let perVal, compVal

function playCard() {
       let playerCard = playerDeck.splice(0,1);
        //       playerCard.toString()
        // console.log(playerCard,'<<<array of splice<<<<<')
        // console.log(playerCard[0])
        // console.log(playerDeck[playerCard])
       perVal = playerCard[0]
//        let compCard = compDeck.splice(0,1);
}

function computerVal() {
        let val = compDeck.splice(0,1);
        compVal = val[0]   
 }



function compareCards() {
        // var pCard = playerCard.toString();
        // var cCard = compCard.toString()
       
        if(perVal > compVal){
               playerSideDeck.push(perVal , compVal)
       } else if (compVal > perVal) {
               compSideDeck.push(compVal, perVal)
       } else if ()

}



        //if playerCard > compCard, player takes both cards and places them face up next to his/her current playing deck which is faced down.
        //if playerCard < compCard, comp takes bith cards and they are placed next to it's current playing deck which is faced down.
function warDuel(){

}

        //if playerCard == compCard,  top 5 cards from each deck will be placed face down on the play field and the 6th card will be faced up to declare winner.

//========DISPLAYED MESSAGES========//

        // this is where the massage will be displayed of who won the card battle, or   the whole game


//========DISPLAY IMAGES========//
        //if I have some images, I will include them during the game.