//the individual cell unit of the life game.
//contains its status on whether it is alive and whether it is alive the next turn.
var lifeUnit = function(){
	this.alive = false;
	this.nextTurn = false;
}

var lifeGame = function(x){
	this.x = x;
	this.cell = [];
	for (var i = 0; i < this.x; i++){
	  this.cell[i] = [];
		for (var j = 0; j < this.x; j++){ 
		this.cell[i][j] = new lifeUnit();
		}
	}
	this.setAlive = function(x,y){
		this.cell[x][y].alive = true;
	}
	this.setNextTurnAlive = function(x,y){
		this.cell[x][y].nextTurn = true;
	}
	this.setDead = function(x,y){
		this.cell[x][y].alive = false;
	}
	this.setNextTurnDead = function(x,y){
		this.cell[x][y].nextTurn = false;
	}
}

// arr[1][2].alive = true;
// console.log(arr[0][0].alive);
// //console.log(arr[1][2].alive);
// console.log(arr[-1] == undefined);

var myLifeGame = new lifeGame(50);
myLifeGame.setAlive(4,3);
console.log(myLifeGame.cell[4][3]);

