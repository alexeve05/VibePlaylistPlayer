function goToVibe(vibe){
    localStorage.setItem("selectedVibe", vibe);
    window.location.href = "vibe.hmtl";
}
function goToHome(){
    window.location.href = "index.html";
}
function goToQuiz(){
    window.location.href = "quiz.html";
}