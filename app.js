window.onload = function () {
    show(0);
    
}

let user_name = sessionStorage.getItem("Name")
let wel = document.getElementById('userNameId')
wel.innerHTML = user_name

// question and answer in object

var questions = [{
    id: 1,
    question: "Who is the inventor of JavaScript?",
    answer: "Brendan Eich",
    options: [
        "Dennis Ritchie",
        "Brendan Eich",
        "James Gosling",
        "Guido van Rossum"
    ]


},
{
    id: 2,
    question: "Who is the inventor of Apple?",
    answer: "Steve Jobs",
    options: [
        "Dennis Ritchie",
        "Steve Jobs",
        "James Gosling",
        "Guido van Rossum"
    ]

},
{
    id: 3,
    question: "Who is the founder of Google?",
    answer: "Larry Page",
    options: [
        "Dennis Ritchie",
        "Steve jobs",
        "Larry Page",
        "Guido van Rossum"
    ]

},
{
    id: 4,
    question: "Who is the inventer of Samsung?",
    answer: "Lee Byung-chul",
    options: [
        "Dennis Ritchie",
        "Steve jobs",
        "Larry Page",
        "Lee Byung-chul"
    ]

}

]



// next question button
let question_count = 0;
var point = 0;

function next() {
    let user_answer = document.querySelector('li.option.active').innerHTML;
    // user answer

    if (user_answer == questions[question_count].answer) {
        point += 10;
        sessionStorage.setItem("points",point)
    }

    if(question_count == questions.length -1){
        location.href = "end.html"
        return;
    }

    
    question_count++;
    show(question_count)
}


function show(e) {
    var ques = document.getElementById('questions')
    ques.innerHTML = `
    <h2 class="text">Q ${question_count + 1 +" : "}${questions[e].question}</h2>
        <ul class="ul" >
            <li class="option" >${questions[e].options[0]}</li>
            <li class="option">${questions[e].options[1]}</li>
            <li class="option">${questions[e].options[2]}</li>
            <li class="option">${questions[e].options[3]}</li>
        </ul>
        `;
        
    toggleActive()


}

function toggleActive() {
    let option = document.querySelectorAll("li.option")
    for (let i = 0; i < option.length; i++) {
        option[i].onclick = function () {
            for (let j = 0; j < option.length; j++) {
                if (option[j].classList.contains("active")) {
                    option[j].classList.remove("active")
                }
            }
            option[i].classList.add('active')

        }

    }
}

