const words = ['aspersion',
    'cogent',
    'constituent',
    'IIT-JEE',
    'contusion',
    'debauch',
    'egregious',
    'equanimity',
    'extraneous',
    'fatuous',
    'gratuitous',
    'hapless',
    'hegemony',
    'history',
    'mining',
    'bridge',
    'phone',
    'application',
    'school',
    'life',
    'death'
]


const wordElement = document.getElementById('word');
const textElement = document.getElementById('input');
const scoreElement = document.getElementById('score');
const timeElement = document.getElementById('time');
const settingsElement = document.getElementById('settings');
const endgameElement = document.getElementById('endgamecontainer');
const settingsbtnElement = document.getElementById('settingsbtn');
const settingsformElement = document.getElementById('score');
const levelElement = document.getElementById('level');


let randomWord;
let level =
    localStorage.getItem('level') !== null ?
    localStorage.getItem('level') : 'human';
let score = 0;
let time = 10;
levelElement.value =
    localStorage.getItem('level') !== null ?
    localStorage.getItem('level') : 'human';
textElement.focus;
const timeinterval = setInterval(updateTime, 1000);

function getRanWords() {
    return words[Math.floor(Math.random() * words.length)];
}

function addWord() {
    randomWord = getRanWords();
    wordElement.innerHTML = randomWord;

}
addWord();

function updateTime() {
    time--;
    timeElement.innerHTML = time + 's';
    if (time === 0) {
        clearInterval(timeinterval);

        gameOver();
    }

}

textElement.addEventListener('input', e => {
    const insertedText = e.target.value;

    if (insertedText == randomWord) {
        score += 1;
        scoreElement.innerHTML = score
        addWord();
        e.target.value = '';


        if (level == 'god') {
            time += 1;
        } else if (level == 'legend') { time += 3 } else { time += 5 }
        updateTime();
    }
})

function gameOver() {
    endgameElement.innerHTML = `
      <h1>Time is up</h1>
      <p>Your final score is ${score}</p>
      <button onclick="location.reload()">Play Again</button>
    `;

    endgameElement.style.display = 'flex';
}

settingsbtnElement.addEventListener('click', () => {
    settingsElement.classList.toggle('hide');

    settingsformElement.addEventListener('change', e => {
        level = e.target.value;
        localStorage.setItem('level', level);

    })
})