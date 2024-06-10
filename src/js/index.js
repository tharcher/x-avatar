const btnNext = document.getElementById("btn-next");
const btnBack = document.getElementById("btn-back");
const cards = document.querySelectorAll(".card");
let selected = 0;

btnNext.addEventListener("click", function () {
    const lastCard = selected === cards.length - 1;
    if (lastCard) return;

    hideSelectedCard();
    selected++;
    showSelectedCard();
});


btnBack.addEventListener("click", function () {
    const firstCard = selected === 0;
    if (firstCard) return;

    hideSelectedCard();
    selected--;
    showSelectedCard();
});

function showSelectedCard() {
    cards[selected].classList.add("selected");
}

function hideSelectedCard() {
    const cardSelected = document.querySelector(".selected");
    cardSelected.classList.remove("selected");
}
