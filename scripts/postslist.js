//script to remove the card
var particularCard;
function getParentDiv(card) {
    particularCard = document.getElementById(card);

}
function removeDiv() {
    particularCard.remove();
}
