let data = [
    {
        "question": "Pick a Food!",
        "answerA": "fries",
        "answerB": "edamame"
    },
    {
        "question": "Pick another",
        "answerA": "icecream",
        "answerB": "chips"
    }
];

document.addEventListener("DOMContentLoaded", () => {
    loadQuestions();
});

loadQuestions = () => {
    let questionNumber = 0;
    let questions = document.querySelector(".questions");
    for (let i = 0; i < data.length; i++) {
        let newQuestion = document.createElement("span");
        newQuestion.className = "title";
        newQuestion.innerText = data[i].question;

        let optionA = document.createElement("button");
        optionA.className = "btn";
        optionA.id = data[i].answerA;
        optionA.innerText = data[i].answerA;

        let optionB = document.createElement("button");
        optionB.className = "btn";
        optionB.id = data[i].answerB;
        optionB.innerText = data[i].answerB;
        
        questions[questionNumber].appendChild(newQuestion);
        questions[questionNumber].appendChild(optionA);
        questions[questionNumber].appendChild(optionB);
        questionNumber++;
    }

    let answerFries = document.querySelector("#fries");
    answerFries.addEventListener("click", () => {
        let background = document.querySelector(".container");
        background.style.backgroundColor = "gold";

        let questionTwo = document.querySelector("#questionTwo");
        questionTwo.style.display = "block";

        let questionOne = document.querySelector("#questionOne");
        questionOne.style.display = "none";

        let pickFood = document.querySelector("#pickFood");
        pickFood.style.display = "block";
        pickFood.innerText = "Fries are the best!";

    });

    let answerEdamame = document.querySelector("#edamame");
    answerEdamame.addEventListener("click", () => {
        let background = document.querySelector(".container");
        background.style.backgroundColor = "green";

        let questionTwo = document.querySelector("#questionTwo");
        questionTwo.style.display = "block";

        let questionOne = document.querySelector("#questionOne");
        questionOne.style.display = "none";

        let pickFood = document.querySelector("#pickFood");
        pickFood.style.display = "block";
        pickFood.innerText = "Oh you're the healthy kind";

    });

    let answerIcecream = document.querySelector("#icecream");
    answerIcecream.addEventListener("click", () => {
        let background = document.querySelector(".container");
        background.style.backgroundColor = "wheat";

        let questionTwo = document.querySelector("#questionTwo");
        questionTwo.style.display = "none";

        let questionOne = document.querySelector("#questionOne");
        questionOne.style.display = "block";

        let pickFood = document.querySelector("#pickFood");
        pickFood.style.display = "block";
        pickFood.innerText = "Nothing like Icecream!";

    });

    let answerChips = document.querySelector("#chips");
    answerChips.addEventListener("click", () => {
        let background = document.querySelector(".container");
        background.style.backgroundColor = "pink";

        let questionTwo = document.querySelector("#questionTwo");
        questionTwo.style.display = "none";

        let questionOne = document.querySelector("#questionOne");
        questionOne.style.display = "block";

        let pickFood = document.querySelector("#pickFood");
        pickFood.style.display = "block";
        pickFood.innerText = "You can never get enough";

    });
};