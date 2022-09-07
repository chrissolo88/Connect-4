let player = 1;
let player1 = [];
let player2 = [];
let connect4 = [];
const player1Color = 'yellow';
const player2Color = 'red';
const col1 = [11,12,13,14,15,16];
const col2 = [21,22,23,24,25,26];
const col3 = [31,32,33,34,35,36];
const col4 = [41,42,43,44,45,46];
const col5 = [51,52,53,54,55,56];
const col6 = [61,62,63,64,65,66];
const col7 = [71,72,73,74,75,76];
const btn1 = document.getElementById('col-1');
const btn2 = document.getElementById('col-2');
const btn3 = document.getElementById('col-3');
const btn4 = document.getElementById('col-4');
const btn5 = document.getElementById('col-5');
const btn6 = document.getElementById('col-6');
const btn7 = document.getElementById('col-7');
const btnReset = document.getElementById('reset');
const dropDivs = document.querySelectorAll('.hold');

window.addEventListener('load', () => {
    createBoard(7,6);
    buttonsClick();
})
dropDivs.forEach((dropDiv) => {
    dropDiv.addEventListener('mouseover',() => {
        player === 1 ? dropDiv.classList.add('drop','chip','yellow'):dropDiv.classList.add('drop','chip','red');
    })
    dropDiv.addEventListener('mouseout',() => {
        player === 1 ? dropDiv.classList.remove('drop','chip','yellow'):dropDiv.classList.remove('drop','chip','red');
    })
})

function checkWin(id) {
    let winArr =[[(id - 3),(id - 2),(id - 1),(id),(id + 1),(id + 2),(id + 3)],
        [(id - 30),(id - 20),(id - 10),(id),(id + 10),(id + 20),(id + 30)],
        [(id - 27),(id - 18),(id - 9),(id),(id + 9),(id + 18),(id + 27)],
        [(id - 33),(id - 22),(id - 11),(id),(id + 11),(id + 22),(id + 33)]];
    let winCount = [];

    winArr.forEach((directionArr) => {
        directionArr.forEach((val) => {
            if(player === 1) {
                player1.includes(val) ? winCount.push(val) : winCount = [];
                if (winCount.length === 4){
                    connect4 = winCount
                    setTimeout(() => winAlert(connect4,2),300)
                }
            } else {
                player2.includes(val) ? winCount.push(val) : winCount = [];
                if (winCount.length === 4){
                    connect4 = winCount
                    setTimeout(() => winAlert(connect4,2),300)
                }
            }
        });
        winCount = [];
    });

};

function winAlert(arr,num) {
    buttonsOff();
    alert(`Player ${num} WINS!!!`);
    arr.forEach((val) => {
        document.getElementById(`${val}`).parentNode.classList.add('pulse')
    })
    dropDivs.forEach((dropDiv) => {
        dropDiv.classList.remove('red','yellow','chip','drop');
    })
};

function createBoard(columns,rows) {
    const boardDiv = document.querySelector('#board');
    for(let i = 0; i < rows; i++) {
        for(let j = 0; j < columns; j++) {
            const id = (j + 1).toString() + (i + 1).toString();
            const newDivSection = document.createElement("div");
            const newDivChip = document.createElement("div");
            newDivSection.classList.add("section");
            newDivChip.classList.add("chip");
            newDivChip.setAttribute("id", `${id}`);
            newDivSection.appendChild(newDivChip);
            boardDiv.appendChild(newDivSection);
        };
    };  
};

function dropChip(arr) {
    const col = arr;
    let chip = document.getElementById(`${col[0].toString()}`);
    let chip2 = '';
    if(chip.classList.contains('red') || chip.classList.contains('yellow')) {
        alert("can not place chip here");
        return;
    } else {
        col.forEach((val,i,arr) => {
            chip = document.getElementById(`${val}`)
            arr[i + 1] ? chip2 = document.getElementById(`${arr[i+1]}`):document.getElementById(`${val}`);
            if(chip.classList.contains('red') || chip.classList.contains('yellow')) {
                
            } else {
                player === 1 ? chip.classList.add(player1Color):chip.classList.add(player2Color);
                if (chip2.classList.contains('red') || chip2.classList.contains('yellow')) {
                    player === 1 ? player1.push(val) : player2.push(val);
                    playMoves();
                    checkWin(val);
                } else {
                    player === 1 ? chip.classList.remove(player1Color):chip.classList.remove(player2Color);
                };
            };
        });
        player === 1 ? player = 2 : player = 1
        dropDivs.forEach((dropDiv) => {
            dropDiv.classList.remove('red','yellow','chip','drop');
        })
    };

 

};
const resetGame = () => {
    const boardDiv = document.querySelector('#board');
    boardDiv.innerHTML = '';
    player1 = [];
    player2 = [];
    player = 1;
    playMoves();
    createBoard(7,6);
    buttonsOn();
    dropDivs.forEach((dropDiv) => {
        dropDiv.classList.remove('red','yellow','chip','drop');
    })
}
const playMoves = () => document.getElementById('moves').innerText = `Player 1 moves: ${player1.length} || Player 2 moves: ${player2.length}`;

function buttonsClick() {
    btn1.addEventListener('click', () => dropChip(col1));
    btn2.addEventListener('click', () => dropChip(col2));
    btn3.addEventListener('click', () => dropChip(col3));
    btn4.addEventListener('click', () => dropChip(col4));
    btn5.addEventListener('click', () => dropChip(col5));
    btn6.addEventListener('click', () => dropChip(col6));
    btn7.addEventListener('click', () => dropChip(col7));
    btnReset.addEventListener('click', () => resetGame());
}
function buttonsOff() {
    btn1.disabled = true;
    btn2.disabled = true;
    btn3.disabled = true;
    btn4.disabled = true;
    btn5.disabled = true;
    btn6.disabled = true;
    btn7.disabled = true;
}
function buttonsOn() {
    btn1.disabled = false;
    btn2.disabled = false;
    btn3.disabled = false;
    btn4.disabled = false;
    btn5.disabled = false;
    btn6.disabled = false;
    btn7.disabled = false;
}
