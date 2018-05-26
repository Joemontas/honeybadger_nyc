const express = require('express');
const app = express();
const bodyParser = require('body-parser');


app.set("view engine", "ejs");
app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended: true}));



app.get("/", function(req, res) {
    res.render("home");
});

app.get("/playground", function(req, res) {
	app.render("..public/scketch.js");
    
    const wigman = {
        x: 8,
        y: 8
    }

	function drawField() {
		document.getElementById('world').innerHTML = "";
		for(let y = 0; y < field.length; y = y + 1){
			// console.log(map[y])
			for(let x = 0; x < field[y].length; x = x + 1){
				console.log(field[y][x])
				if (field[y][x] === 1){
					document.getElementById('world').innerHTML += "<div class='wall'></div>";
				} 
				else if (field[y][x] === 2){
					document.getElementById('world').innerHTML += "<div class='coin'></div>";
				} 
				if (field[y][x] === 3){
					document.getElementById('world').innerHTML += "<div class='ground'></div>";
				} 
				else if (field[y][x] === 5){
					document.getElementById('world').innerHTML += "<div class='wigman'></div>";
				} 
			}
			document.getElementById('world').inneHTML += '<br>'
		}	
	}

	document.onkeydown = function(e){
		// console.log(e.keyCode);
		if (e.keyCode === 37){
			// left
			(field[wigman.y+1][wigman.x] !== 1)
			 field[wigman.y][wigman.x] = 3;
	  	 	 wigman.x = wigman.x -1;
			 field[wigman.y][wigman.x] = 5;
			 drawField();
		}
		else if (e.keyCode === 38){
			// up
			field[wigman.y][wigman.x] = 3;
			wigman.y = wigman.y -1;
			field[wigman.y][wigman.x] = 5;
			drawField(); 
		}
		else if (e.keyCode === 39){
			// right
			field[wigman.y][wigman.x] = 3;
			wigman.x = wigman.x +1;
			field[wigman.y][wigman.x] = 5;
			drawField();
		}
		else if (e.keyCode === 40){
			// down
			if (field[wigman.y+1][wigman.x] !== 1) {
				field[wigman.y][wigman.x] = 3;
				field.y = wigman.y + 1;
				field[wigman.y][wigman.x] =5;
				drawField();
			}
		}

	} 

    drawField();
    
    res.render("playground", {field:field});
});





app.listen(3000, function() {
    console.log("Server Started!")
});