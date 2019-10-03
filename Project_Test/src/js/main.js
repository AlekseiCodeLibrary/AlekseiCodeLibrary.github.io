const cards = document.querySelectorAll('.price_block');
for(i = 0; i < cards.length; i++) {
    let card = cards[i];
    card.addEventListener('mousemove', startRotate);
    card.addEventListener('mouseout', stopRotate);
}
function startRotate(event) {
    const cardImg = this.querySelector('.price_card');
    const halfHeight = cardImg.offsetHeight / 2;
    const halfWidth = cardImg.offsetWidth / 2;

    cardImg.style.transform = 'rotateX('+ -(event.offsetY - halfHeight) / 5 + 'deg) rotateY('+ (event.offsetX - halfWidth) / 5 +'deg)';
}
function stopRotate(event) {
    const cardImg = this.querySelector('.price_card');

    cardImg.style.transform = 'rotate(0)';
}