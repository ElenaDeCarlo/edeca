
const card = document.querySelector(".card");

card.addEventListener("mousemove", cardMouseMove);

function cardMouseMove(event){
const cardWidth = card.offsetWidth;
const cardHeight = card.offsetHeight;
const centerX = card.offsetLeft + cardWidth/2;
const centerY = card.offsetTop + cardHeight/2;
const mouseX = event.clientX - centerX;
const mouseY = event.clientY - centerY;
const rotateX = ((+1)*20*mouseY/(cardHeight/3)).toFixed(2);
const rotateY = ((-1)*20*mouseX/(cardWidth/3)).toFixed(2);

card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateX}deg) scale3d(1.2, 1.2, 1.2)` ;



}