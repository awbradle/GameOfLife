//Andrew Bradley COSC 221
//Fall 2015 Instructor: Gurnee
//
//This runs the game of life. The game is a 2d array of lifeUnit objects
//

//the individual cell unit of the life game.
//contains its status on whether it is alive and whether it is alive the next turn.
//neighbors is how many surrounding cells are alive.
var lifeUnit = function(){
	this.alive = false;
	this.neighbors = 0;

}
//this creates a game object made up of individual cells. Takes as an attribute the desired
//number of cells to create an x by x gameboard
var lifeGame = function(x){
	this.x = x;
	this.cell = [];
	for (var i = 0; i < this.x; i++){
	  this.cell[i] = [];
		for (var j = 0; j < this.x; j++){ 
			this.cell[i][j] = new lifeUnit();
		}
	}
	
	//bring cell to life
	this.setAlive = function(x,y){
		this.cell[x][y].alive = true;
	}
	
	//kill a cell
	this.setDead = function(x,y){
		this.cell[x][y].alive = false;
	}
	
	//This function goes through each cell and sets the number of alive neighboring cells
	//in the cells neighbor variable. Current setup has borders acting as boundaries.
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
	
	//This function takes the information in neighbors and uses it to set each cell to alive
	//or dead based on Conway's Game of Life Rules
	this.doTurn = function(){
		var rowLength = this.cell.length;
		for (var i = 0; i < rowLength; i++){
			for (var j = 0; j < rowLength; j++){
				if (this.cell[i][j].neighbors >= 4 || this.cell[i][j].neighbors < 2) //overpopulation and underpopulation
					this.setDead(i,j);
				if (this.cell[i][j].neighbors == 3) //come alive
					this.setAlive(i,j);
			}
		}
	}
}