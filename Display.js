var game = document.getElementById("game");
var gameLength = myLifeGame.cell.length;
//console.log(gameLength);
//This loop initializes the game board
for (var i = 0; i < gameLength; i++){
	var row = document.createElement('div');
	row.setAttribute('id', i);
	
	//row.innerHTML = i;
	document.getElementById("game").appendChild(row);
	for(var j = 0; j < gameLength; j++){
		var cell = document.createElement('div');
		cell.style.width = "10px";
		cell.style.height = "10px";
		cell.style.cssFloat = "left";
		if (myLifeGame.cell[i][j].alive)
			cell.style.backgroundColor = "green";
		else
			cell.style.backgroundColor = "white";
		cell.style.border = "thin solid";
		var cellName = "r" + i + "c" + j;
		cell.setAttribute('id', cellName);
		if (j == 0)
			cell.style.clear = "left";
//		cell.addEventListener("click", myScript); change on click
		document.getElementById(i).appendChild(cell);
		
	}
}
function updateCells (){
	for (var i = 0; i < gameLength; i++){
		for (var j = 0; j < gameLength; j++){
			if (myLifeGame.cell[i][j].alive)
				document.getElementById(("r"+i+"c"+ j)).style.backgroundColor = "green";
			else if (document.getElementById(("r"+i+"c"+ j)).style.backgroundColor == "green")
				document.getElementById(("r"+i+"c"+ j)).style.backgroundColor = "red";
			else
				document.getElementById(("r"+i+"c"+ j)).style.backgroundColor = "white";
				
		}
	}
}

function playGame(){
	myLifeGame.setNextTurn();
	myLifeGame.doTurn();
	updateCells();
}