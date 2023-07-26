const wordDisplay = document.querySelector(".word")
const hintDisplay = document.querySelector(".detail span")
const refreshBtn = document.querySelector(".refresh-word")
const checkBtn = document.querySelector(".check-word")
const inputField= document.querySelector("input")
const timeText= document.querySelector(".detail b")
const modalBox = document.querySelector(".modal-dialog")
const modalTitle = document.querySelector(".modal-title")
const modalText = document.querySelector(".modal-text")
const btn1 = document.querySelector("#btn1")
const btn2 = document.querySelector("#btn2")
let correctWord,timer,modalWrap;


// const showModal = (checkCondition) => {
    
//     if (checkCondition == 1) {
//         modalTitle.innerHTML="Congratulations!"
//         modalText.innerHTML = "Your answer is correct"
//         btn1.innerHTML = "Close"
//         btn2.innerHTML = "Next"
//         console.log(modalBox);
//     }
    
// }

const initTimer = maxtTime => {
    clearInterval(timer);
    timer = setInterval(() => {
        if(maxtTime>0){
            maxtTime--;
            return timeText.innerHTML = maxtTime
        }
        clearInterval(timer);
        alert(`Time out! ${correctWord.toLocaleUpperCase()} was the correct answer.`);
        initGame();
    },1000)
}

const initGame = () => {
    initTimer(30);
    let randomObj = words[Math.floor(Math.random() * words.length)]
    let wordArray = randomObj.word.split("");
    for (let i = 0; i < wordArray.length; i++) {
        let j = Math.floor(Math.random() * (i+1));
        [wordArray[i],wordArray[j]] = [wordArray[j],wordArray[i]]
    }
    wordDisplay.innerHTML = wordArray.join("");
    hintDisplay.innerHTML = randomObj.hint;
    correctWord = randomObj.word.toLocaleLowerCase();
    inputField.value= "";
}

initGame();

const checkWord = () => {
    let userWord = inputField.value.toLocaleLowerCase();
    if (!userWord) {
        return alert(`Please enter a word.`);
    }else if (userWord !== correctWord){
        return alert(`Oops! ${userWord} is not a correct answer.`);
    }else {
        alert(`Congratulations ${userWord.toLocaleUpperCase()} is a correct answer.`);
        // showModal(1);
    }
    initGame();
}
refreshBtn.addEventListener("click",initGame);
checkBtn.addEventListener("click",checkWord);