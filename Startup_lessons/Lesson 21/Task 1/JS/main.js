let answer;
let age = prompt("What is your age ?")
if (+age <= 17) {
    answer = "Do you study at school?";
}else if (+age > 17 && +age < 25) {
    answer = "Do you study at university?"
}else if (+age >= 25 && +age < 60) {
    answer = "Do you have a job?"
}else if (+age >=60) {
    answer = "What are you doing?"
}
alert(answer);