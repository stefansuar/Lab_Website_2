/*
	players is an array to hold each player's information.
	Fields:
		name - Football player's name
		img  - The relative/absolute path to the image file.
		alt  - The alternative text that describes the image.
		year - The student's year in college (Freshman, Sophomore, Junior, Senior).
		major- The student's current college major.
		games_played    - The number of football games the student has played for the Buffs.
		pass_yards      - The total number of passing yards in the student's football career for the Buffs.
		rushing_yards   - The total number of rushing yards in the student's football career for the Buffs.
		receiving_yards - The total number of receiving yards in the student's football career for the Buffs.
*/
var players = [{ name: "John Doe", img: "../resources/img/player1.jpg", alt: "Image of Player 1", year: "Sophomore", major: "Art", games_played: 23, pass_yards: 435, rushing_yards: 200, receiving_yards: 88 },
{ name: "James Smith", img: "../resources/img/player2.jpg", alt: "Image of Player 2", year: "Junior", major: "Science", games_played: 17, pass_yards: 192, rushing_yards: 102, receiving_yards: 344 },
{ name: "Samuel Phillips", img: "../resources/img/player3.jpg", alt: "Image of Player 3", year: "Freshman", major: "Math", games_played: 8, pass_yards: 35, rushing_yards: 70, receiving_yards: 98 },
{ name: "Robert Myers", img: "../resources/img/player4.jpg", alt: "Image of Player 4", year: "Senior", major: "Computer Science", games_played: 31, pass_yards: 802, rushing_yards: 375, receiving_yards: 128 }];


/*
	Registration Page:
		viewStudentStats(id, toggle) method
			parameters:
				id - The css id of the html tag being updated.
				toggle - 
					0 - hide the html tag
					1 - make the html tag visible
			
			purpose: This method will accept the id of an html tag and a toggle value.
					 The method will then set the html tag's css visibility and height.  
					 To hide the html tag (toggle - 0), the visibility will be set to hidden and
					 the height will be set to 0.  
					 To reveal the html tag (toggle - 1), the visibility will be set to visible and
					 the height will be set to auto.
*/
function viewStudentStats(id, toggle) {
	// visibility="auto"
	// visible | hidden | collapse | initial | inert
	console.log("[start] viewStudentStats");
	console.log(id);
	console.log(toggle);
	// if(id == "student_status" & toggle == 1){
	// 	document.getElementById("student_status").style.display = "inline";
	// 	console.log("Daytime!");
	// }
	// else if(id == "student_status" & toggle == 0){
	// 	document.getElementById("student_status").style.display = "none";
	// 	console.log("Nighttime...");
	// }
	if (id == "student_status") {
		if (toggle) {
			// document.getElementById("student_status").style.display = "inline";
			document.getElementById("student_status").style.visibility = "visible";
			document.getElementById("student_status").style.height = "auto";
			console.log("..show(student status)");
		}
		else {
			// document.getElementById("student_status").style.display = "none";
			document.getElementById("student_status").style.visibility = "hidden";
			document.getElementById("student_status").style.height = "0";
			console.log("..hide(student status)");
		}
	}
	if (id == "undergrad_select") {
		if (toggle) {
			// document.getElementById("undergrad_select").style.display = "inline";
			document.getElementById("undergrad_select").style.visibility = "visible";
			document.getElementById("undergrad_select").style.height = "auto";
			console.log("..show(undergrad)");
		}
		else {
			// document.getElementById("undergrad_select").style.display = "none";
			document.getElementById("undergrad_select").style.visibility = "hidden";
			document.getElementById("undergrad_select").style.height = "0";
			console.log("..hide(undergrad)");
		}
	}
	if (id == "grad_select") {
		if (toggle) {
			// document.getElementById("grad_select").style.display = "inline";
			document.getElementById("grad_select").style.visibility = "visible";
			document.getElementById("grad_select").style.height = "auto";
			console.log("..show(grad)");
		}
		else {
			// document.getElementById("grad_select").style.display = "none";
			document.getElementById("grad_select").style.visibility = "hidden";
			document.getElementById("grad_select").style.height = "0";
			console.log("..hide(grad)");
		}
	}

	console.log("[stop] viewStudentStats");
}

/*
	Home Page: 
		changeColor(color) method
			parameter: 
				color- A css color
				
			purpose: This method will set the html body's background color to the 
					 provided parameter.
*/
function changeColor(color) {
	document.body.style.background = color;
}

/*
	Football Season Stats Page:
		loadStatsPage method:
			parameters: none

			purpose: This method will iterate through the stats table and
					 do the following:
						1. Read through each row of the table & determine which team won
						   the game.

						2. Update the winner column to the name of the winning team.

						3. Keep track of the number of wins/losses for the Buffs.

						4. Update the second table to show the total number of wins/losses for the Buffs.
*/
function loadStatsPage() {
	var table = document.getElementById("stats_table");
	var row_count;
	var col_count;
	var opp_team;
	var home_score;
	var opp_score;
	var winner;
	var buff_wins = 0;
	var buff_losses = 0;
	for(row_count = 2; row_count < table.rows.length; row_count++){
		opp_team = table.rows[row_count].cells[1].innerHTML;
		home_score = parseInt(table.rows[row_count].cells[2].innerHTML);
		opp_score = parseInt(table.rows[row_count].cells[3].innerHTML);
		// console.log("opp_team", opp_team);
		// console.log("home_score", home_score);
		// console.log("opp_score", opp_score);

		if(home_score > opp_score){
			buff_wins++;
			table.rows[row_count].cells[4].innerHTML = "CU Boulder";
		}
		else{
			buff_losses++;
			table.rows[row_count].cells[4].innerHTML = opp_team;
		}
		// console.log(buff_wins);

	}
	document.getElementById("wins").innerHTML = buff_wins;
	document.getElementById("losses").innerHTML = buff_losses;

}

/*
	Football Player Information Page
		loadPlayersPage method:
			parameters: none

			purpose: This method will populate the dropdown menu to allow the
					 user to select which player's information to view.

					 To handle this, you will need to iterate through the players array
					 and do the following for each player:
						1. Create an anchor tag
						2. Set the href to "#", this will make sure the
							anchor tag doesn't change pages
						3. Set the onclick to call switchPlayers method
							(this will need to pass in the index inside the players array)
						4. Set the anchor tag's text to the player's name.

					After setting all of the anchor tags, update the innerHTML of the dropdown menu.
					As a note, the id for the dropdown menu is player_selector.

		switchPlayers(playerNum) method:
			parameters:
				playerNum - The index of the football player in the players array.

			purpose:
				This method will update the the spans on the player's information pageX
				and calculate the average passing, rushing, and receiving yards.

				Span ids:
					p_year     - the player's year in college
					p_major    - the player's major in college
					g_played   - the number of games played for Buffs
					player_img - the player's photo (must set src and alt)
					p_yards    - the number of passing yards
					r_yards    - the number of rushing yards
					rec_yards  - the number of receiving yards

					Calculated values:
					  avg_p_yards   - the average number of passing yards for the player's Buff career
					  avg_r_yards   - the average number of rushing yards for the player's Buff career
					  avg_rec_yards - the average number of receiving yards for the player's Buff career
*/
function loadPlayersPage() {
	var player_index = 0;//Global variable!
	// function loadObjectData() {
	player1 = { p_name: 'Emeperor Kuzco', p_year: 'Freshman', p_major: 'Emperor', g_played: '4', player_img: '../resources/img/kuzco.jpg', p_yards: '100', r_yards: '345', rec_yards: '6' };
	player2 = { p_name: 'Pacha', p_year: 'Junior', p_major: 'Agriculture', g_played: '10', player_img: '../resources/img/pacha.jpg', p_yards: '63', r_yards: '548', rec_yards: '300' };
	player3 = { p_name: 'Yzma', p_year: 'Senior', p_major: 'Business', g_played: '14', player_img: '../resources/img/yzma.jpg', p_yards: '5', r_yards: '30', rec_yards: '6' };
	player4 = { p_name: 'Kronk', p_year: 'Sophomore', p_major: 'Culinary Arts', g_played: '8', player_img: '../resources/img/kronk.jpg', p_yards: '97', r_yards: '699', rec_yards: '999' };

	playerTable = [player1, player2, player3, player4];

	// document.getElementById('objectField1').innerHTML = playerTable[player_index].p_name;
	// document.getElementById('objectField2').innerHTML = playerTable[player_index].fruit_color;
	// player_index++;
	// if (player_index >= player.length)//If we've gone too far, reset the index to 0.
	// {
	// 	player_index = 0;
	// }
	// }

}

function switchPlayers(playerNum) {
	document.getElementById('p_year').innerHTML = playerTable[playerNum].p_year;
	document.getElementById('p_major').innerHTML = playerTable[playerNum].p_major;
	document.getElementById('g_played').innerHTML = playerTable[playerNum].g_played;
	document.getElementById('player_img').src = playerTable[playerNum].player_img;
	document.getElementById('p_yards').innerHTML = playerTable[playerNum].p_yards;
	document.getElementById('r_yards').innerHTML = playerTable[playerNum].r_yards;
	document.getElementById('rec_yards').innerHTML = playerTable[playerNum].rec_yards;

	document.getElementById('avg_p_yards').innerHTML = playerTable[playerNum].p_yards / playerTable[playerNum].g_played;
	document.getElementById('avg_r_yards').innerHTML = playerTable[playerNum].r_yards / playerTable[playerNum].g_played;
	document.getElementById('avg_rec_yards').innerHTML = playerTable[playerNum].rec_yards / playerTable[playerNum].g_played;

}

