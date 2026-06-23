const currentMode = localStorage.getItem("Mode_local_name");
const mode_name = document.querySelector(".mode-name");
mode_name.textContent = currentMode

const question_name = document.querySelector(".question-name");
const answer_container = document.querySelector(".answer-container");
const answer_choice_top = document.querySelector(".answer-choice-top");
const answer_choice_bottom = document.querySelector(".answer-choice-bottom")
let currentQuestion = 0;
let q_choice = questions[currentQuestion].choice.length;
question_name.textContent = questions[currentQuestion].question;
console.log("PTA_CH"+ questions[1].choice.length)

for(let i = 0; i < q_choice-2; i++){
    let q_create_choice_top = 0;
    let q_create_choice_bottom = 0;
    let rnd_num;
    let arr_rnd_choice = questions[currentQuestion].choice
    
    if(q_create_choice_top < 2){
        q_create_choice_top += 1;
        rnd_num = Math.floor(Math.random() * arr_rnd_choice.length);
        const answer_choice = document.createElement("button");
        answer_choice.textContent = arr_rnd_choice[rnd_num];
        answer_choice.classList.add("answer-choice")
        answer_choice_top.appendChild(answer_choice);
        const del = arr_rnd_choice.splice(rnd_num,1);
    }
    if(q_create_choice_bottom < 2){
        q_create_choice_bottom += 1;
        rnd_num = Math.floor(Math.random() * arr_rnd_choice.length);
        const answer_choice = document.createElement("button");
        answer_choice.textContent = arr_rnd_choice[rnd_num];
        answer_choice.classList.add("answer-choice")
        answer_choice_bottom.appendChild(answer_choice);
        const del = arr_rnd_choice.splice(rnd_num,1);
    }
}
console.log("PTA_CH2 "+ questions[1].choice.length)
const answer_choice_correct = document.querySelector(".answer-choice-container");
const parent_next_question = document.querySelector(".parent-next-question");

answer_choice_correct.addEventListener("click", function(event){
    if(event.target.classList.contains("answer-choice")){
        if(event.target.textContent === questions[currentQuestion].answer){
            console.log("correct");
            question_name.textContent = "Correct!";
            questions[currentQuestion].is_correct = true;
            
            if(currentQuestion <= questions.length ){
                console.log("work");
                if(questions[currentQuestion].is_correct == true){
                    console.log("work");
                    const next_question = document.createElement("button");
                    next_question.classList.add("next-question");
                    parent_next_question.appendChild(next_question);
                    next_question.textContent = "Next!";

                    next_question.addEventListener("click", function(){
                        answer_choice_top.innerHTML = "";
                        answer_choice_bottom.innerHTML = "";
                        parent_next_question.innerHTML = "";
                        question_name.textContent = questions[currentQuestion].question;
                        
                        console.log("PTA_CH3 "+ questions[1].choice.length)
                        for(let i=0; i<questions[currentQuestion].choice.length; i++){
                            console.log("PTA_CH4 "+ questions[1].choice.length)
                            console.log("PTA"+questions[1].choice.length);
                            console.log("PTA"+q_choice);
                            let q_create_choice_top = 0;
                            let q_create_choice_bottom = 0;
                            let rnd_num;
                            let arr_rnd_choice = questions[currentQuestion].choice;
                            if(q_create_choice_top < 2){
                                q_create_choice_top += 1;
                                rnd_num = Math.floor(Math.random() * arr_rnd_choice.length);
                                const answer_choice = document.createElement("button");
                                answer_choice.textContent = arr_rnd_choice[rnd_num];
                                answer_choice.classList.add("answer-choice");
                                answer_choice_top.appendChild(answer_choice);
                                console.log("isTop = "+i+" "+rnd_num)
                                const del = arr_rnd_choice.splice(rnd_num,1);
                                console.log(del +"round = " + i)
                            }

                            if(q_create_choice_bottom < 2){
                                q_create_choice_bottom += 1;
                                
                                rnd_num = Math.floor(Math.random() * arr_rnd_choice.length);
                                const answer_choice = document.createElement("button");
                                answer_choice.textContent = arr_rnd_choice[rnd_num];
                                answer_choice.classList.add("answer-choice");
                                answer_choice_bottom.appendChild(answer_choice);
                                console.log("isBottom = "+i+" "+rnd_num)
                                console.log(arr_rnd_choice)
                                const del = arr_rnd_choice.splice(rnd_num,1);
                                console.log(del +"round = " + i)
                            }
                        }
                    });
                }
                // answer_choice_top.innerHTML = "";
                // answer_choice_bottom.innerHTML = "";
                // question_name.textContent = questions[currentQuestion].question;
                
            }
            currentQuestion += 1;
            console.log("PTA_CH5 "+ questions[1].choice.length)
        }
        else{
            console.log("bad!");
            question_name.textContent = "Uncorrect!";

        }
    };
});

