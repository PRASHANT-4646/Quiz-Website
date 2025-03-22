const quizData = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
      correct:2,
    },
    {
        question: "Which programming language is used for web development?",
        options: ["Python", "Java", "JavaScript", "C++"],
        correct:2,
    },
    {
        question: "What is 5 + 3?",
        options: ["5", "8", "12", "15"],
        correct:1,
        
    },
    {
        question: "What will be the output of the following code snippet? print(typeof(Nan)",
        options: ["Object", "Number", "String", "None of the above"],
        correct:1,
    },
    {
        question: "What will be the output of the following code snippet?const obj1={first:20,second:30,first:50,consloe.log(obj1)",
        options: ["{first:20,second:30}", "{first:50,second:30}", "{first:20,second:30,first:50}", "Syntax.error"],
        correct:1,

    },
    {
        question: "Which type of JavaScript language is ___?",
        options: ["Object-Oriented", "Object-Based", "Assembly-language", "High-level"],
        correct: "Object-Based"
    },
    {
        question: "Which one is the correct syntax for ‘for’ loop?",
        options: [
            "for(i=0; i<=5; i++)",
            "for(i=0; i<=5)",
            "for i=0; i<=5; i++",
            "for(i<=5; i++)"
        ],
        correct: "for(i=0; i<=5; i++)"
    },
    {
        question: "Which JavaScript method is used to access an HTML element by id?",
        options: [
            "getElementById()",
            "getElement(id)",
            "getElementByClass()",
            "querySelector()"
        ],
        correct: "getElementById()"
    },
    {
        question: "Which symbol is used for single-line comments in JavaScript?",
        options: ["//", "/* */", "#", "--"],
        correct: "//"
    },
    {
        question: "Which of the following is NOT a JavaScript data type?",
        options: ["String", "Number", "Boolean", "Float"],
        correct: "Float"
    }

];

//step2//javascript initialization
const quiz=document.querySelector("#quiz");
const scores=document.querySelector("#scores");

const answerElm=document.querySelectorAll('.answer')
const [questionElm,option_1,option_2,option_3,option_4]=document.querySelectorAll('#question,.option_1,.option_2,.option_3,.option_4');

//const prevBtn = document.getElementById("previous");
const submitbtn=document.getElementById('submit')
const prevBtn=document.getElementById('previous')

let currentQuiz=0;
let score=0;

//step3 load quiz function

const loadQuiz=()=>{
    const {question,options}=quizData[currentQuiz]
    console.log(options)

    questionElm.innerText=`${currentQuiz+1}: ${question}`
      scores.innerText=`Score: ${score}/${quizData.length}`
   // options.forEach((curOption,index)=>(option_1.innerText=curOption))
options.forEach(
    (curOption,index)=>{(window[`option_${index + 1}`].innerText=curOption)

})
if(prevBtn){
    prevBtn.disabled = currentQuiz === 0;

}
}

loadQuiz();


//? step 4  Get Selected Answer Function on Button Click
 const getSelectedOption =()=>{
// let ans_index;

//     answerElm.forEach((curOption,index)=>{
//         if(curOption.checked){
//             ans_index=index;
//         }
//     });
//     return ans_index;
//  }ORRR
let answerElement=Array.from(answerElm)
return answerElement.findIndex((curElm)=>curElm.checked)
}


//deselectedAnswer

const   deselectedAnswer=()=>{
    answerElm.forEach((curElm)=>curElm.checked=false);
}


submitbtn.addEventListener("click",()=>{
    const selectOpIndex=getSelectedOption();
    console.log(selectOpIndex)



if(selectOpIndex===quizData[currentQuiz].correct){
    score=score+1;
}
currentQuiz ++;

    if(currentQuiz<quizData.length){

        deselectedAnswer();
        loadQuiz();

    }
    else{
        quiz.innerHTML=`
        <div class="result">
    <h2> Your Score:${score}/${quizData.length} COrrect Answer</h2>
    <p>Congratulations on completing the quiz! </p>
    <button class="reload-button " onclick="location.reload()">Play Again</button>
    </div>
    
        `;
    }
});


// Previous button click event
if (prevBtn) {
    prevBtn.addEventListener("click", () => {
        if (currentQuiz > 0) {
            currentQuiz--;
            loadQuiz();
        }
    });
}