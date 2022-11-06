// Player with a value of 1 is red and yellow, while player with value of 2 is green and blue
const side1 =1;
const side2 = 2;
let dice1Value;
let dice2Value;
let currentTurn;
let human
let cpu

const pawns = {
    dot_green_1: {
        position: -1,
        isInFinalLap: false,
        killed: null,
        killedBy:[]
    },
    dot_green_2: {
        position: -1,
        isInFinalLap: false,
        killed: null,
        killedBy:[]
    },
    dot_green_3: {
        position: -1,
        isInFinalLap: false,
        killed: null,
        killedBy:[]
    },
    dot_green_4: {
        position: -1,
        isInFinalLap: false,
        killed: null,
        killedBy:[]
    },
    dot_red_1: {
        position: -1,
        isInFinalLap: false,
        killed: null,
        killedBy:[]
    },
    dot_red_2: {
        position: -1,
        isInFinalLap: false,
        killed: null,
        killedBy:[]
    },
    dot_red_3: {
        position: -1,
        isInFinalLap: false,
        killed: null,
        killedBy:[]
    },
    dot_red_4: {
        position: -1,
        isInFinalLap: false,
        killed: null,
        killedBy:[]
    },
    dot_yellow_1: {
        position: -1,
        isInFinalLap: false,
        killed: null,
        killedBy:[],
        totalMoves: 0,
        isDone: false
    },
    dot_yellow_2: {
        position: -1,
        isInFinalLap: false,
        killed: null,
        killedBy:[],
        totalMoves: 0,
        isDone: false
    },
    dot_yellow_3: {
        position: -1,
        isInFinalLap: false,
        killed: null,
        killedBy:[],
        totalMoves: 0,
        isDone: false
    },
    dot_yellow_4: {
        position: -1,
        isInFinalLap: false,
        killed: null,
        killedBy:[],
        totalMoves: 0,
        isDone: false
    },
    dot_blue_1: {
        position: -1,
        isInFinalLap: false,
        killed: null,
        killedBy:[],
        totalMoves: 0,
        isDone: false
    },
    dot_blue_2: {
        position: -1,
        isInFinalLap: false,
        killed: null,
        killedBy:[],
        totalMoves: 0,
        isDone: false
    },
    dot_blue_3: {
        position: -1,
        isInFinalLap: false,
        killed: null,
        killedBy:[],
        totalMoves: 0,
        isDone: false
    },
    dot_blue_4: {
        position: -1,
        isInFinalLap: false,
        killed: null,
        killedBy:[],
        totalMoves: 0,
        isDone: false
    },
    
}

let currentMaze = [];
updateDiceView(6, 6);

function rollDice(timer = 200){
    if(currentTurn){
        let i = 0;
        let  diceRollingInterval = setInterval(()=>{
            if(i == 6){
                clearInterval(diceRollingInterval)
            }
            dice1Value = Math.floor(Math.random() * 6) + 1
            dice2Value = Math.floor(Math.random() * 6) + 1
            updateDiceView(dice1Value, dice2Value);
            i++;
        },timer)
    }
}

function updateDiceView(v1, v2) {
    const d1 = document.querySelector('.dice1');
    const d2 = document.querySelector('.dice2');
    const d1v = document.querySelector('.d1v');
    const d2v = document.querySelector('.d2v');
    const dSumV = document.querySelector('.dSumV');

    d1.innerHTML = v1;
    d1v.innerHTML = v1;
    d2.innerHTML = v2;
    d2v.innerHTML = v2;
    dSumV.innerHTML = v1 + v2;
}

function start(){
    assignSides()
    assignTurn()
}

function assignTurn(){
    currentTurn =  Math.floor(Math.random() * 2) + 1;;
    setTurn(currentTurn)
    if(currentTurn == cpu){
        cpuPlay()
    }
}

function assignSides() {
    const rand = Math.floor(Math.random() * 2) + 1;
    if(rand == 1) {
       
        human = side1;
        cpu = side2;
        updateSideLabel(human, cpu)
    }else{
        human = side2;
        cpu = side1;
        updateSideLabel(human, cpu)
    }
}

function cpuPlay() {
    rollDice();
}

function updateSideLabel(side1, side2){
    const yellow = document.querySelector('.yellow_p');
    const red = document.querySelector('.red_p')
    const blue = document.querySelector('.blue_p');
    const green = document.querySelector('.green_p')
    yellow.innerHTML = side1 == 1  ? 'Player 1' : 'CPU';
    red.innerHTML = side1 == 1  ? 'Player 1' : 'CPU'
    blue.innerHTML = side2 == 2  ?   'CPU' : 'Player 1';
    green.innerHTML = side2 == 2  ? 'CPU' : 'Player 1';
}

function setTurn(player){
    const turn = document.querySelector('.turn');
    turn.innerHTML = player == human ? 'Player': 'CPU';
}

const dot = document.querySelector('.dotm');
let numOfMovesSelected = 50;


let i = 0 ;
let currPosition = 0;

function fire() {
    const interval = setInterval(()=>{
        ++i;
        
        
        
        // console.log(nextLocation, `.item_${i}`)
        if(i >= 52){
            if(currPosition <= 4){
               
                let nextLocation = document.querySelector(`.item_red_${ currPosition}`)
                nextLocation.appendChild(dot)
                currPosition++
            }else{
                clearInterval(interval)
            }
        }else{
            let nextLocation = document.querySelector(`.item_${i}`)
            nextLocation.innerHTML='';
            nextLocation.appendChild(dot)
        }
    }, 500);
}


fire();


