(function(){

angular
	.module("tttApp")
	.controller("GameController", GameControllerFunc);



	function GameControllerFunc(){
			// var cells= [" x","x"," "," "," "," "," "," "," "];
			var empty = true;



			var self = this;

			var turnCount =0;
			var turn = 1;
			var checkWin;
			var oWin = false;
			var xWin = false;
			var winAlert;
			var clearGame;
			var newGame;

			self.moves = 1;
			self.gameover = false;
			self.grid = [
				[" " ," "," "],
				[" " ," " ," "],
				[" " ," " ," "]

				];

			self.oneScore = 0;
			self.twoScore = 0;

			// self.cells = cells;

		// to insert x vs o
		self.playTurn = function(column, row){ 
	turnCount++;		
				if (self.grid[row][column]  == " "){



			if ( turnCount % 2 ==0){
				 self.grid[row][column] = "X";
				 


			} 

			else  {

				self.grid[row][column] ="O";
			

				}
			

			}

		}	
		
			
			var checkWin = function(){

			if (grid[0][0] == "x" && grid[0][1] =="x" && grid[0][2] =="x"){
			xWin();
			
			} else if (grid[1][0] == "x" && grid[1][1] =="x" && grid[1][2] =="x"){
			xWin();

			} else if (grid[2][0] == "x" && grid[2][1] =="x" && grid[2][2] =="x"){
			xWin();

			} else if (grid[0][0] == "x" && grid [1][0] == "x" && grid[2][0] =="x"){
			xWin();
				
			} else if (grid [0][1] == "x" && grid [1][1] =="x" && grid[2][1]=="x"){
			xWin();	

			} else if (grid [0][2] == "x" && grid [1][2] == "x" && grid[2][2]=="x"){
			xWin();
				
			} else if (grid [0][0] == "x" && grid [1][1] == "x" && grid[2][2]=="x"){
			xWin();

			} else if (grid [0][2] == "x" && grid [1][1] == "x" && grid[2][0]=="x"){
			xWin();


		// 	}

	

			// { 
			// 	xWin = true;
			// 	winAlert();



			} else if (grid [0][0] == "o" && grid [0][1] == "o" && grid[0][2]=="o"){
			oWin();

			} else if (grid [1][0] == "o" && grid [1][1] == "o" && grid[1][2]=="o"){
			oWin();

			} else if (grid [2][0] == "o" && grid [2][1] == "o" && grid[2][2]=="o"){
			oWin();

			} else if (grid [0][0] == "o" && grid [1][0] == "o" && grid[2][0]=="o"){
			oWin();

			} else if (grid [0][1] == "o" && grid [1][1] == "o" && grid[2][1]=="o"){
			oWin();

			} else if (grid [0][2] == "o" && grid [1][2] == "o" && grid[2][2]=="o"){
			oWin();

			} else if (grid [0][0] == "o" && grid [1][1] == "o" && grid[2][2]=="o"){
			oWin();

			} else if (grid [0][2] == "o" && grid [1][1] == "o" && grid[2][0]=="o"){
			oWin();

			}


			// { 
			// 	oWin = true;
			// 	winAlert();

			// };

				// if {
				// 	(turnCount >= 9){
				// 		(alert "It's a tie");
				// 	}
				// }


			// if this all nine are filled - Procedures for a draw.

			// } else if ( moves == 9){
			// 	var messageBox = document.getElementById("message");
			// 	self.oneMessage="Draw";
			// 	self.twoMessage = "Draw";
			// } else {
			// 	moves += 1;
			// }

			// message for if player using"X" wins

		// var xwins = function(){
		// 		self.player1message = self.player1name + " wins!";
		// 		gameover = true;
		// 		self.leftScore +=1;
		// 	};

		// // message for if player using "O" wins
		// 	var owins = function(){
		// 		self.player2message = self.player2name + " wins!";
		// 		gameover = true;
		// 		self.rightScore +=1;
		// 	};

		// };
	  
	  // trying to set the names of the players

			self.setName1 = function(player1name){
				self.player1name= " ";
			};

			self.setName2 = function(player2name){
				self.player2name =" ";
			};

				// found online-  apparently I need this
			// this.removeFocus1 = function(key) {
			// 	if (key.keycode == 13){
			// 		key.target.blur();
			// 	}
			// };
			// 	// same as above
			// this.removeFocus2 = function(key) {
			// 	if (key.keycode == 13) {
			// 		key.target.blur();
			// 	}
			// };

			

			// procedures to clear the board / attempts to clear the board
			self.clearGame = function(){
				console.log("you tried to clear the board");
				for (var i = 0; i < cells.length; i++){
					self.cells[i] = " ";	
				}

				self.player1message= "";
				self.player2message ="";
				playTurn = "o";
				var empty = true;
				moves =1;
				gameover = false;

				// grid = [
				// 		["", "", ""]
				// 		["", "", ""]
				// 		["", "", ""]
				// ];
	
			}
		}
	}
	
 })();		

