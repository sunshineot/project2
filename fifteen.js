window.onload = Start;
this.unsolved = [];
this.solved = [];
shuffled = false;
this.match=false;

function Start(){
	var puzzle = document.getElementById("puzzlearea");
	this.pieces = puzzle.getElementsByTagName("div");
	for (i=0; i<pieces.length; i++){
		pieces[i].className = "puzzlepiece";
	}
	this.blank = document.createElement("div");
	puzzle.appendChild(blank);
	this.puzzlepieces = puzzle.getElementsByTagName("div");
	UnShuffled();
	this.shuffler = document.getElementById("shufflebutton");
	shuffler.onclick = Shuffled; //click shuffle button to shuffle puzzle
	for (i=0; i<puzzlepieces.length; i++){
		unsolved.push(new Object(puzzlepieces[i]));
		solved.push(new Object(puzzlepieces[i]));
	}
}

function UnShuffled(){
	setBoard(puzzlepieces);
	puzzlepieces[0].style.backgroundPosition = "0px 0px";
	puzzlepieces[1].style.backgroundPosition = "-96px 0px";
	puzzlepieces[2].style.backgroundPosition = "-192px 0px";
	puzzlepieces[3].style.backgroundPosition = "-288px 0px";
	puzzlepieces[4].style.backgroundPosition = "0px 288px";
	puzzlepieces[5].style.backgroundPosition = "-96px 288px";
	puzzlepieces[6].style.backgroundPosition = "-192px 288px";
	puzzlepieces[7].style.backgroundPosition = "-288px 288px";
	puzzlepieces[8].style.backgroundPosition = "0px 192px";
	puzzlepieces[9].style.backgroundPosition = "-96px 192px";
	puzzlepieces[10].style.backgroundPosition = "-192px 192px";
	puzzlepieces[11].style.backgroundPosition = "-288px 192px";
	puzzlepieces[12].style.backgroundPosition = "0px 96px";
	puzzlepieces[13].style.backgroundPosition = "-96px 96px";
	puzzlepieces[14].style.backgroundPosition = "-192px 96px";
}

function setBoard(array){
	i=0; //changing value of left
	j=0; //changes value of bottom
	p=0; //puzzle counter
	while(p<array.length){
		array[p].style.bottom = (300-j) + "px";
		array[p].style.left = i + "px";
		i=i+100;
		p++;
		if(i>=400){
			i=0;
			j=j+100; //change the position of bottom
		}}
}

function ReadyToPlay(unsortedPuzzle){
	if(shuffled){
		setBoard(unsortedPuzzle);  //set the board with the unsorted tiles
		checkWinner();
		while(!match){
			for (i=0; i<unsortedPuzzle.length; i++){
				unsortedPuzzle[i].onclick = TileMove(unsortedPuzzle[i]);  //check to see if mouse moves over any of the tiles
			}
			checkWinner();
		}
	}		
}

function Shuffled(){
	//for(var i=0; i<unsolved.length; i++){unsolved[i] = i;}
	unsolved.sort(randOrder);
	var nSum = 0;

	for(var i=0; i<unsolved.length; i++){
		for (var j=i; j<unsolved.length; j++){
			if(unsolved[j] < unsolved[i]){
				nSum++;}}}
	if (Math.floor(nSum/2) != nSum/2){
		needSwap = true;	// puzzle is not solvable make one more swap of values
		for (var i = 0; (i < unsolved.length) && needSwap; i++) {
			for (var j = i; j<unsolved.length && needSwap; j++) {
				if (unsolved[j] > unsolved[i]){
					temp=unsolved[j];
					unsolved[j]=unsolved[i];
					unsolved[i]=temp; 
					needSwap=false;}
			}}}
	shuffled = true;
	ReadyToPlay(unsolved);
}

function randOrder(){
   return 0.5 - Math.random();
}

function TileMove(tile){
	if(shuffled){
		if((parseInt(tile.style.bottom)) === (parseInt(blank.style.top))){
			Movable(tile);
			tile.onclick = TileDown(tile, blank);
		}else if((parseInt(tile.style.top)) === (parseInt(blank.style.bottom))){
			Movable(tile);
			tile.onclick = TileUp(tile, blank);
		}else if(tile.style.left === blank.style.right){
			Movable(tile)
			tile.onclick = TileRight(tile, blank);
		}else if(tile.style.right === blank.style.left){
			Movable(tile)
			tile.onclick = TileLeft(tile, blank);		
		}
	}else{ alert("Click the shuffle button.");}
}

function Movable(tile){
	tile.className = "movablepiece";
}

function checkWinner(){  
	for(var i=0; i<unsolved.length; i++){
		if(unsolved[i] != solved[i]){
			match = false;}      //game not won   
		else{
			match = true;   //game won
			console.log('puzzle complete!');
			var body = document.getElementByTagName('body')
			body.style.backgroundImage = "url(https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTro_my883-cb88z7-3TJ9rPUwOGCA8OvSmeY6CF13nG-JiB7E-wA)";}
	}}
