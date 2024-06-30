const exercises = [
    { question: "______ ragazzo è molto alto.", answer: "Il", translation: "The boy is very tall.", fullAnswer: "Il ragazzo è molto alto." },
    { question: "______ amica di Maria è simpatica.", answer: "L'", translation: "Maria's friend is nice.", fullAnswer: "L'amica di Maria è simpatica." },
    { question: "______ studenti sono in classe.", answer: "Gli", translation: "The students are in class.", fullAnswer: "Gli studenti sono in classe." },
    { question: "______ macchina è rossa.", answer: "La", translation: "The car is red.", fullAnswer: "La macchina è rossa." },
    { question: "______ libro è sul tavolo.", answer: "Il", translation: "The book is on the table.", fullAnswer: "Il libro è sul tavolo." },
    { question: "______ amico di Paolo è italiano.", answer: "L'", translation: "Paolo's friend is Italian.", fullAnswer: "L'amico di Paolo è italiano." },
    { question: "______ ragazze stanno giocando.", answer: "Le", translation: "The girls are playing.", fullAnswer: "Le ragazze stanno giocando." },
    { question: "______ zaino è nuovo.", answer: "Lo", translation: "The backpack is new.", fullAnswer: "Lo zaino è nuovo." },
    { question: "______ donna parla inglese.", answer: "La", translation: "The woman speaks English.", fullAnswer: "La donna parla inglese." },
    { question: "______ cane è fedele.", answer: "Il", translation: "The dog is loyal.", fullAnswer: "Il cane è fedele." },
    { question: "______ signora ha una bella casa.", answer: "La", translation: "The lady has a beautiful house.", fullAnswer: "La signora ha una bella casa." },
    { question: "______ studenti hanno finito i compiti.", answer: "Gli", translation: "The students finished their homework.", fullAnswer: "Gli studenti hanno finito i compiti." },
    { question: "______ ragazzi sono andati al parco.", answer: "I", translation: "The boys went to the park.", fullAnswer: "I ragazzi sono andati al parco." },
    { question: "______ amiche di Luisa sono italiane.", answer: "Le", translation: "Luisa's friends are Italian.", fullAnswer: "Le amiche di Luisa sono italiane." },
    { question: "______ uomo è gentile con tutti.", answer: "L'", translation: "The man is kind to everyone.", fullAnswer: "L'uomo è gentile con tutti." },
    { question: "______ ragazze hanno comprato i biglietti.", answer: "Le", translation: "The girls bought the tickets.", fullAnswer: "Le ragazze hanno comprato i biglietti." },
    { question: "______ libro è interessante da leggere.", answer: "Il", translation: "The book is interesting to read.", fullAnswer: "Il libro è interessante da leggere." },
    { question: "______ studente ha scritto una poesia.", answer: "Lo", translation: "The student wrote a poem.", fullAnswer: "Lo studente ha scritto una poesia." },
    { question: "______ signore ha una macchina sportiva.", answer: "Il", translation: "The gentleman has a sports car.", fullAnswer: "Il signore ha una macchina sportiva." },
    { question: "______ gatti sono neri.", answer: "I", translation: "The cats are black.", fullAnswer: "I gatti sono neri." },
    { question: "______ amiche di Marta vanno in palestra.", answer: "Le", translation: "Marta's friends go to the gym.", fullAnswer: "Le amiche di Marta vanno in palestra." },
    { question: "______ cane è sempre allegro.", answer: "Il", translation: "The dog is always cheerful.", fullAnswer: "Il cane è sempre allegro." },
    { question: "______ signora ha comprato un vestito nuovo.", answer: "La", translation: "The lady bought a new dress.", fullAnswer: "La signora ha comprato un vestito nuovo." },
    { question: "______ studenti hanno vinto il torneo.", answer: "Gli", translation: "The students won the tournament.", fullAnswer: "Gli studenti hanno vinto il torneo." },
    { question: "______ ragazzi vanno a sciare ogni inverno.", answer: "I", translation: "The boys go skiing every winter.", fullAnswer: "I ragazzi vanno a sciare ogni inverno." },
    { question: "______ amiche di Sara sono simpatiche.", answer: "Le", translation: "Sara's friends are nice.", fullAnswer: "Le amiche di Sara sono simpatiche." },
    { question: "______ uomo ha una bicicletta rossa.", answer: "L'", translation: "The man has a red bicycle.", fullAnswer: "L'uomo ha una bicicletta rossa." },
    { question: "______ ragazze ballano al concerto.", answer: "Le", translation: "The girls dance at the concert.", fullAnswer: "Le ragazze ballano al concerto." },
    { question: "______ libro è scritto da un famoso autore.", answer: "Il", translation: "The book is written by a famous author.", fullAnswer: "Il libro è scritto da un famoso autore." },
    { question: "______ studente ha dimenticato i libri a casa.", answer: "Lo", translation: "The student forgot the books at home.", fullAnswer: "Lo studente ha dimenticato i libri a casa." },
    { question: "______ signore parla tre lingue.", answer: "Il", translation: "The gentleman speaks three languages.", fullAnswer: "Il signore parla tre lingue." },
    { question: "______ gatti dormono sul divano.", answer: "I", translation: "The cats sleep on the couch.", fullAnswer: "I gatti dormono sul divano." },
    { question: "______ amiche di Giulia hanno un negozio di moda.", answer: "Le", translation: "Giulia's friends have a fashion store.", fullAnswer: "Le amiche di Giulia hanno un negozio di moda." },
    { question: "______ cane è molto obbediente.", answer: "Il", translation: "The dog is very obedient.", fullAnswer: "Il cane è molto obbediente." },
    { question: "______ signora ha un gatto bianco.", answer: "La", translation: "The lady has a white cat.", fullAnswer: "La signora ha un gatto bianco." },
    { question: "______ studenti vanno in piscina dopo scuola.", answer: "Gli", translation: "The students go to the pool after school.", fullAnswer: "Gli studenti vanno in piscina dopo scuola." },
    { question: "______ ragazze ballano il tango.", answer: "Le", translation: "The girls dance the tango.", fullAnswer: "Le ragazze ballano il tango." },
    { question: "______ libro è stato pubblicato quest'anno.", answer: "Il", translation: "The book was published this year.", fullAnswer: "Il libro è stato pubblicato quest'anno." },
    { question: "______ studente ha perso l'autobus.", answer: "Lo", translation: "The student missed the bus.", fullAnswer: "Lo studente ha perso l'autobus." },
    { question: "______ signore ha una casa in montagna.", answer: "Il", translation: "The gentleman has a house in the mountains.", fullAnswer: "Il signore ha una casa in montagna." },
    { question: "______ gatti giocano nel giardino.", answer: "I", translation: "The cats play in the garden.", fullAnswer: "I gatti giocano nel giardino." }
];

let selectedExercises = [];
let currentExercise = 0;
let correctAnswers = 0;
let userAnswers = [];

function startExercises() {
    const exerciseCount = parseInt(document.getElementById('exercise-count').value);
    selectedExercises = getRandomExercises(exerciseCount);
    currentExercise = 0;
    correctAnswers = 0;
    userAnswers = [];
    document.getElementById('start-container').style.display = 'none';
    document.getElementById('exercise-container').style.display = 'block';
    loadExercise();
}

function loadExercise() {
    const exerciseElement = document.getElementById('exercise');
    exerciseElement.textContent = selectedExercises[currentExercise].question;
}

function checkAnswer() {
    const userAnswer = document.getElementById('answer').value.trim();
    const feedbackElement = document.getElementById('feedback');
    const correctAnswer = selectedExercises[currentExercise].answer;
    const translation = selectedExercises[currentExercise].translation;
    const fullAnswer = selectedExercises[currentExercise].fullAnswer;

    if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
        feedbackElement.innerHTML = `<span style="color: green;">Correct! ${correctAnswer} - ${translation} (${fullAnswer})</span>`;
        correctAnswers++;
    } else {
        feedbackElement.innerHTML = `<span style="color: red;">Incorrect. The correct answer is ${correctAnswer}. ${translation} (${fullAnswer})</span>`;
    }

    updateProgressBar();

    setTimeout(() => {
        currentExercise++;
        if (currentExercise < selectedExercises.length) {
            document.getElementById('answer').value = '';
            feedbackElement.textContent = '';
            loadExercise();
        } else {
            showSummary();
        }
    }, 2000);
}

function updateProgressBar() {
    const progress = ((currentExercise + 1) / selectedExercises.length) * 100;
    document.getElementById('progress').style.width = `${progress}%`;
}

function showSummary() {
    const summaryContainer = document.getElementById('summary-container');
    const exerciseContainer = document.getElementById('exercise-container');
    const exerciseList = document.getElementById('exercise-list');
    const summary = document.getElementById('summary');

    exerciseContainer.style.display = 'none';
    summaryContainer.style.display = 'block';

    summary.innerHTML = `<p>Your success rate: ${correctAnswers} out of ${selectedExercises.length}</p>`;
    exerciseList.innerHTML = '';

    userAnswers.forEach((exercise) => {
        if (exercise.userAnswer.toLowerCase() !== exercise.correctAnswer.toLowerCase()) {
            exerciseList.innerHTML += `<li>${exercise.question} <br> Your answer: ${exercise.userAnswer || "No answer"} <br> Correct answer: ${exercise.fullAnswer} (${exercise.translation})</li>`;
        }
    });
}

function restart() {
    document.getElementById('summary-container').style.display = 'none';
    document.getElementById('start-container').style.display = 'block';
    document.getElementById('exercise-list').innerHTML = '';
}

function getRandomExercises(count) {
    const shuffled = exercises.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}
