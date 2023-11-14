var contentArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

document.getElementById("save_card").addEventListener("click", () => {
    addFlashcard();
});

document.getElementById("delete_cards").addEventListener("click", () => {
    localStorage.clear();
    flashcards.innerHTML = '';
    contentArray = [];
});

document.getElementById("show_card_box").addEventListener("click", () => {
    document.getElementById("create_card").style.display = "block";
});

document.getElementById("close_card_box").addEventListener("click", () => {
    document.getElementById("create_card").style.display = "none";
});

flashcardMaker = (text) => {
    const flashcard = document.createElement("div");
    const question = document.createElement('h2');
    const answer = document.createElement('h2');

    flashcard.className = 'flashcard';

    question.setAttribute("style", "border-top:1px solid purple; padding: 15px; margin-top:30px");
    question.textContent = text.my_question;

    answer.setAttribute("style", "text-align:center; display:none; color:black; font-size:13pt; font-family:Georgia;");
    answer.textContent = text.my_answer;

    flashcard.appendChild(question);
    flashcard.appendChild(answer);

    flashcard.addEventListener("click", () => {
        if(answer.style.display == "none")
            answer.style.display = "block";
        else
            answer.style.display = "none";
    })

    document.querySelector("#flashcards").appendChild(flashcard);
}

contentArray.forEach(flashcardMaker);

addFlashcard = () => {
    const question = document.querySelector("#question");
    const answer = document.querySelector("#answer");

    let flashcard_info = {
        'my_question' : question.value,
        'my_answer'  : answer.value
    }

    contentArray.push(flashcard_info);
    localStorage.setItem('items', JSON.stringify(contentArray));
    flashcardMaker(contentArray[contentArray.length - 1]);
    question.value = "";
    answer.value = "";
}

function change() {
    if(document.getElementById("answer2").style.display == "none")
        document.getElementById("answer2").style.display = "block";
    else
        document.getElementById("answer2").style.display = "none";
}
function change1() {
    if(document.getElementById("answer3").style.display == "none")
        document.getElementById("answer3").style.display = "block";
    else
        document.getElementById("answer3").style.display = "none";
}
function change2() {
    if(document.getElementById("answer4").style.display == "none")
        document.getElementById("answer4").style.display = "block";
    else
        document.getElementById("answer4").style.display = "none";
}
function change3() {
    if(document.getElementById("answer5").style.display == "none")
        document.getElementById("answer5").style.display = "block";
    else
        document.getElementById("answer5").style.display = "none";
}
function change4() {
    if(document.getElementById("answer6").style.display == "none")
        document.getElementById("answer6").style.display = "block";
    else
        document.getElementById("answer6").style.display = "none";
}
function change5() {
    if(document.getElementById("answer7").style.display == "none")
        document.getElementById("answer7").style.display = "block";
    else
        document.getElementById("answer7").style.display = "none";
}