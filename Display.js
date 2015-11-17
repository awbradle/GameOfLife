var timers = [],
	gameSpeed = 300,
	livingColor = "green";
var myLifeGame = new lifeGame(40);
var game = document.getElementById("game"); //gets the div with the Id "game"
var gameLength = myLifeGame.cell.length; //
//console.log(gameLength);
//This loop initializes the game board on the screen
for (var i = 0; i < gameLength; i++){
	var row = document.createElement('div');
	row.setAttribute('id', i);
	
	document.getElementById("game").appendChild(row);
	for(var j = 0; j < gameLength; j++){
		cell = document.createElement('div');
		this.cell.i = i;
		this.cell.j = j;
				if (myLifeGame.cell[i][j].alive)
			cell.style.backgroundColor = livingColor;
		else
			cell.style.backgroundColor = "white";

		cell.style.width = "10px";
		cell.style.height = "10px";
		cell.style.cssFloat = "left";
		if (myLifeGame.cell[i][j].alive)
			cell.style.backgroundColor = livingColor;
		else
			cell.style.backgroundColor = "white";
		cell.style.border = "thin solid";
		var cellName = "r" + i + "c" + j;
		cell.setAttribute('id', cellName);
		if (j == 0)
			cell.style.clear = "left";
		
		document.getElementById(i).appendChild(cell);
		this.cell.onclick = clickThisCell;
		}
		
}

//This updates the cells' appearance on the screen. Recently alive cells appear red for one
//turn, living cells are green, the rest of the non-living cells are white
function updateCells (){
	for (var i = 0; i < gameLength; i++){
		for (var j = 0; j < gameLength; j++){
			var cellName = "r" + i + "c" + j;
			if (myLifeGame.cell[i][j].alive)
				document.getElementById(cellName).style.backgroundColor = livingColor;
			else if (document.getElementById(cellName).style.backgroundColor == livingColor)
				document.getElementById(cellName).style.backgroundColor = "red";
			else
				document.getElementById(cellName).style.backgroundColor = "white";
				
		}
	}
}
//has the game perform a new turn
function playGame(){
	myLifeGame.setNextTurn();
	myLifeGame.doTurn();
	updateCells();
}
//This is the onclick event for clicking on a cell. Sets a living cell to dead and a dead
//cell to alive. 
function clickThisCell(){
	
	var i = this.i, j = this.j;
	if (myLifeGame.cell[i][j].alive)
		myLifeGame.setDead(i,j);
	else
		myLifeGame.setAlive(i,j);
	updateCells();
}

function startGame() {
	if (timers.length <= 0)
		timers.push(setInterval(playGame, gameSpeed));
}
function stopGame() {
	while(timers.length > 0){
		clearInterval(timers.pop());
	}
}
function speedUp(){
	if (gameSpeed > 100)
	gameSpeed -= 100;
	if (timers.length > 0){
		stopGame();
		startGame();
	}
	
}
function slowDown(){
	gameSpeed +=100
	if (timers.length > 0){
		stopGame();
		startGame();
	}
}
function changeColor(color){
	livingColor = color;
	updateCells();
}
function randomLife(){
	
	for (var i = 0; i < gameLength; i++){
		for(var j = 0; j < gameLength; j++){
			var num = (Math.floor(Math.random() * 2));
			if(num)
				myLifeGame.setAlive(i,j);
			else
				myLifeGame.setDead(i,j);
		}
		
	}
	updateCells();
}
