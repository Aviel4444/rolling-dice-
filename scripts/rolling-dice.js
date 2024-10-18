const dicefaces = [
    [4],
    [0, 8],
    [0, 4, 8],
    [0, 2, 6, 8],
    [0, 2, 4, 6, 8],
    [0, 1, 2, 6, 7, 8]
];

const dice = document.getElementById("dice");

function createdots(face) {
    dice.innerHTML = '';
    for (let i = 0; i < 9; i++) {
        console.log(i);
        const dot = document.createElement('div');
        if (face.includes(i)) {
            dot.classList.add('dot');
        }
        dice.appendChild(dot);
    }
}

function rolldice() {
    dice.style.transform = 'rotate(720deg)';
    setTimeout(() => {
        const randomface = Math.floor(Math.random() * 6);
        createdots(dicefaces[randomface]);
        dice.style.transform = 'rotate(0)';
    }, 600);
}

createdots(dicefaces[0]);