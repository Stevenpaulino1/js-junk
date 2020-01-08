// function makeDeck() {
//   const cardValue = "2,3,4,5,6,7,8,9,10,J,Q,K,A";
//   const suits = ["clubs", "spades", "hearts", "diamonds"];
//
//   const cardValueArr = cardValue.split(",");
//   const deck = [];
//   for (let value of suits) {
//     for (let i = 0; i < cardValueArr.length; i++) {
//       deck.push({ [value]: cardValueArr[i] });
//     }
//   }
//
//   return deck;
// }
//
// const myDeck = makeDeck();
//
// function drawCard(deck) {
//   return deck.pop();
// }

const myDeck = {
  deck: [],
  drawnCards: [],
  suits: ["clubs", "spades", "hearts", "diamonds"],
  cardValue: "2,3,4,5,6,7,8,9,10,J,Q,K,A",
  initializeDeck() {
    const { suits, cardValue, deck } = this;
    const cardValueArr = cardValue.split(",");
    for (let suit of suits) {
      for (let i = 0; i < cardValueArr.length; i++) {
        deck.push({ suit: suit, value: cardValueArr[i] });
      }
    }
  },
  drawCard() {
    const card = this.deck.pop();
    this.drawnCards.push(card);
    return card;
  },
  drawMultiple(num) {
    const drawnArr = [];
    for (let i = 0; i < num; i++) {
      drawnArr.push(this.drawCard());
    }
    return drawnArr;
  },
  shuffle() {
    console.log("IN SHUFFLE METHOD");
    const { deck } = this;

    for (let i = deck.length - 1; i > 0; i--) {
      console.log("BEGINNING OF LOOP");
      let j = Math.floor(Math.random() * (i + 1));
      [deck[i], deck[j]] = [deck[j], deck[i]];
    }
  }
};
