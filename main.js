
let answersButton = document.querySelector("#checkanswers");
let radioButtons = document.querySelectorAll("[name='multipe']");
let container = document.querySelector("#content");
let questions = document.getElementsByClassName("question");

let resetButton = document.querySelector("#reset");
let darkModeButton = document.querySelector("#darkmode");
let lightModeButton = document.querySelector("#lightmode");

darkModeButton.addEventListener("click", function () {

    document.body.style.background = "tomato";
    document.body.style.color = "white";
})

lightModeButton.addEventListener("click", () => {
    document.body.style.background = "LightGray";
    document.body.style.color = "black";
})

answersButton.addEventListener("click", calculateScore);
function calculateScore() {
    let sum = 0;

    for (let i = 0; i < questions.length; i++) {
        let count = 0;
        let flag = 1;
        let answer = document.getElementsByName("answer" + (i + 1));
        for (let j = 0; j < answer.length; j++) {
            if (answer[j].checked) {
                if (parseInt(answer[j].value) < 0) {
                    flag = 0;
                    break;

                } else {
                    count += parseInt(answer[j].value) * 1;
                }
            }

        }
        if (flag == 1) {
            sum += count;
        }
    }
    if (document.querySelector("#multipe16").checked && document.querySelector("#multipe17").checked && document.querySelector("#multipe19").checked
    ) {

        sum += 1;
    }
    if (sum >= 7.5) {
        container.innerHTML = "you hade correct quantites: " + sum;
        container.style.color = "green";
    }
    else if (sum >= 5) {
        container.innerHTML = "you hade correct quantites: " + sum;
        container.style.color = "orange";
    } else {
        container.innerHTML = "you hade correct quantites: " + sum;
    }
}

resetButton.addEventListener("click", function () {
    for (let i = 0; i <= questions.length; i++) {
        let answer = document.getElementsByName("answer" + (i + 1));
        for (let j = 0; j < answer.length; j++) {
            if (answer[j].checked === true) {
                answer[j].checked = false;
            }
        }
    }

    radioButtons.forEach((item) => {
        if (item.checked === true) {
            item.checked = false;
        }
    }
    )
}

)