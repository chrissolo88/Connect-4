let player = 1;
const player1 = [];
const player2 = [];
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

createBoard(7,6);


function checkWin(id) {
    let vertArr = [(id - 3),(id - 2),(id - 1),(id),(id + 1),(id + 2),(id + 3)];
    let horiArr = [(id - 30),(id - 20),(id - 10),(id),(id + 10),(id + 20),(id + 30)];
    let diagUpArr = [(id - 27),(id - 18),(id - 9),(id),(id + 9),(id + 18),(id + 27)];
    let diagDwArr = [(id - 33),(id - 22),(id - 11),(id),(id + 11),(id + 22),(id + 33)];
    let winCount = 0;
    if(player === 1) {
        vertArr.forEach((val) => {
            player1.includes(val) ? winCount += 1 : winCount = 0;
            winCount === 4 ? setTimeout(() => alert("PLAYER 1 WINS!!"),500) : false;
        });
        horiArr.forEach((val) => {
            player1.includes(val) ? winCount += 1 : winCount = 0;
            winCount === 4 ? setTimeout(() => alert("PLAYER 1 WINS!!"),500): false;
        });
        diagUpArr.forEach((val) => {
            player1.includes(val) ? winCount += 1 : winCount = 0;
            winCount === 4 ? setTimeout(() => alert("PLAYER 1 WINS!!"),500): false;
        });
        diagDwArr.forEach((val) => {
            player1.includes(val) ? winCount += 1 : winCount = 0;
            winCount === 4 ? setTimeout(() => alert("PLAYER 1 WINS!!"),500): false;
        });
    } else {
        vertArr.forEach((val) => {
            player2.includes(val) ? winCount += 1 : winCount = 0;
            winCount === 4 ? setTimeout(() => alert("PLAYER 2 WINS!!"),500): false;
        });
        horiArr.forEach((val) => {
            player2.includes(val) ? winCount += 1 : winCount = 0;
            winCount === 4 ? setTimeout(() => alert("PLAYER 2 WINS!!"),500): false;
        });
        diagUpArr.forEach((val) => {
            player2.includes(val) ? winCount += 1 : winCount = 0;
            winCount === 4 ? setTimeout(() => alert("PLAYER 2 WINS!!"),500): false;
        });
        diagDwArr.forEach((val) => {
            player2.includes(val) ? winCount += 1 : winCount = 0;
            winCount === 4 ? setTimeout(() => alert("PLAYER 2 WINS!!"),500): false;
        });
    };
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
                    checkWin(val);
                } else {
                    player === 1 ? chip.classList.remove(player1Color):chip.classList.remove(player2Color);
                };
            };
        });
        player === 1 ? player = 2 : player = 1
    };

 

};

btn1.addEventListener('click', () => dropChip(col1));
btn2.addEventListener('click', () => dropChip(col2));
btn3.addEventListener('click', () => dropChip(col3));
btn4.addEventListener('click', () => dropChip(col4));
btn5.addEventListener('click', () => dropChip(col5));
btn6.addEventListener('click', () => dropChip(col6));
btn7.addEventListener('click', () => dropChip(col7));