//the individual cell unit of the life game.
//contains its status on whether it is alive and whether it is alive the next turn.
//neighbors is how many surrounding cells are alive.
var lifeUnit = function(){
	this.alive = false;
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
	this.setDead = function(x,y){
		this.cell[x][y].alive = false;
	}
	//
	this.setNextTurn = function(){
		var rowLength = this.cell.length - 1;
		for (var i = 1; i < rowLength; i++){
			for (var j = 1; j < rowLength; j++){ 
				this.cell[i][j].neighbors = this.cell[i-1][j-1].alive + this.cell[i-1][j].alive + 
					this.cell[i-1][j+1].alive + this.cell[i][j-1].alive + this.cell[i][j+1].alive +
					this.cell[i+1][j-1].alive + this.cell[i+1][j].alive + this.cell[i+1][j+1].alive;
			}
			
			this.cell[0][i].neighbors = this.cell[0][i-1].alive + this.cell[0][i+1].alive +
				this.cell[1][i-1].alive + this.cell[1][i].alive + this.cell[1][i+1].alive;
			this.cell[rowLength][i].neighbors = this.cell[rowLength-1][i-1].alive + this.cell[rowLength-1][i].alive + 
				this.cell[rowLength-1][i+1].alive + this.cell[rowLength][i-1].alive + this.cell[rowLength][i+1].alive;
			this.cell[i][0].neighbors = this.cell[i-1][0].alive + this.cell[i-1][1].alive + this.cell[i][1].alive 
					+ this.cell[i+1][0].alive + this.cell[i+1][1].alive;
			this.cell[i][rowLength].neighbors = this.cell[i-1][rowLength-1].alive + this.cell[i-1][rowLength].alive + 
					this.cell[i][rowLength-1].alive + this.cell[i+1][rowLength-1].alive + this.cell[i+1][rowLength].alive;
		}
		this.cell[0][0].neighbors = this.cell[0][1].alive + this.cell[1][1].alive +
				this.cell[1][0].alive;
		this.cell[rowLength][0].neighbors = this.cell[rowLength-1][0].alive + this.cell[rowLength-1][1].alive +
				this.cell[rowLength][1].alive; 
		this.cell[0][rowLength].neighbors = this.cell[0][rowLength-1].alive + this.cell[1][rowLength-1].alive +
				this.cell[1][rowLength].alive; 
		this.cell[rowLength][rowLength].neighbors = this.cell[rowLength][rowLength-1].alive + this.cell[rowLength-1][rowLength-1].alive +
				this.cell[rowLength-1][rowLength].alive;  
	}
	
	this.doTurn = function(){
		var rowLength = this.cell.length;
		for (var i = 0; i < rowLength; i++){
			for (var j = 0; j < rowLength; j++){
				if (this.cell[i][j].neighbors >= 4 || this.cell[i][j].neighbors < 2)
					this.setDead(i,j);
				if (this.cell[i][j].neighbors == 3)
					this.setAlive(i,j);
			}
		}
	}
// 	this.toConsole =  function(){
// 		var rowLength = this.cell.length;
// 		for (var i = 0; i < rowLength; i++){
// 			var str = "";
// 			for (var j = 0; j < rowLength; j++){ 
// 				if (this.cell[i][j].alive)
// 					str += "1";
// 				else
// 					str += "0";
// 			}
// 			console.log(str);
// 		}
// 	}
}
	


// arr[1][2].alive = true;
// console.log(arr[0][0].alive);
// //console.log(arr[1][2].alive);
// console.log(arr[-1] == undefined);

var myLifeGame = new lifeGame(50);
//myLifeGame.setAlive(4,3);
//myLifeGame.setAlive(5,4);
//myLifeGame.setAlive(0,0);
//myLifeGame.setAlive(49,3);
//console.log(myLifeGame.cell[4][3]);
//myLifeGame.setNextTurn();
//console.log(myLifeGame.cell[5][3]);
//console.log(myLifeGame.cell[49][3]);
//console.log(myLifeGame.cell[49][2]);


