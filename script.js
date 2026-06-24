const btn_math_subject = document.querySelector(".btn-math-subject");
if(btn_math_subject){
    
        btn_math_subject.addEventListener("click",function(){
    window.location.href = "math-page.html";
});
};

const btn_main_page = document.querySelector(".btn-main-page");
if(btn_main_page){
    btn_main_page.addEventListener("click", function(){
    window.location.href = "main.html";
});
};

const lessons = document.querySelectorAll(".lesson");
for(let i = 0; i<lessons.length; i++){
    lessons[i].addEventListener("click", function(){
        localStorage.setItem("topic", lessons[i].dataset.topic);
        window.location.href = "Mode.html";
    });
};




const btn_difficult_mode = document.querySelector(".btn-difficult-mode");
if (btn_difficult_mode) {
    btn_difficult_mode.addEventListener("click", function(){
        currentMode = "Difficult Mode";
        localStorage.setItem("Mode_local_name",currentMode);
        console.log(currentMode);
        window.location.href = "Exam-page.html";
    });
};
