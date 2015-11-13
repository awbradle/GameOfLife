//the individual cell unit of the life game.
//contains its status on whether it is alive and whether it is alive the next turn.
//neighbors is how many surrounding cells are alive.
var lifeUnit = function(){
	this.alive = false;
	this.nextTurn = false;
	this.neighbors = 0;

}
//this creates a game object made up of individual cells
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
	this.setNextTurn = function(){
		var rowLength = this.cell.length;
		for (var i = 1; i < rowLength - 1; i++){
			for (var j = 1; j < rowLength -1 ; j++){ 
				this.cell[i][j].neighbors = this.cell[i-1][j-1].alive + this.cell[i-1][j].alive + 
					this.cell[i-1][j+1].alive + this.cell[i][j-1].alive + this.cell[i][j+1].alive +
					this.cell[i+1][j-1].alive + this.cell[i+1][j].alive + this.cell[i+1][j+1].alive;
	
				if (this.cell[i][j].neighbors < 2 || this.cell[i][j].neighbors >= 4)
					this.setNextTurnDead(i,j);
				if (this.cell[i][j].neighbors == 3)
					this.setNextTurnAlive(i,j);
			}
		}
	}
}
	


// arr[1][2].alive = true;
// console.log(arr[0][0].alive);
// //console.log(arr[1][2].alive);
// console.log(arr[-1] == undefined);

var myLifeGame = new lifeGame(50);
myLifeGame.setAlive(4,3);
myLifeGame.setAlive(5,4);
console.log(myLifeGame.cell[4][3]);
myLifeGame.setNextTurn();
console.log(myLifeGame.cell[5][3]);


