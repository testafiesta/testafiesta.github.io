$(document).ready(function(){
	var firstToUpper = function(wholeString){
		wholeString = wholeString.substring(0, 1).toUpperCase() + wholeString.substring(1, wholeString.length);
		return wholeString;
	}
	
    $("#ssp").click(function(){
		var userChoice = prompt("Stein, saks eller papir?");
		var	computerChoice = Math.random();
		if(computerChoice <= 0.33){
			computerChoice = "stein";
		}
		else if(computerChoice <= 0.67){
			computerChoice = "saks";
		}
		else{
			computerChoice = "papir";
		}
		
		var compare = function(choice1, choice2){
			choice1 = choice1.toLowerCase();
			var result = "";
			var uavgjort = "uavgjort!"
			var vinn = "du vant!"
			var tap = "du tapte!"
			
			if (choice1 === choice2){
				result = "Uavgjort!";
			}
			else if(choice2 === "stein"){
				if(choice1 === "saks"){
					result = tap;
				}
				if (choice1 === "papir"){
					result = vinn;
				}
			}
			else if(choice2 === "saks"){
				if(choice1 === "papir"){
					result = tap;
				}
				if (choice1 === "stein"){
					result = vinn;
				}
			}
			else if(choice2 === "papir"){
				if(choice1 === "stein"){
					result = tap;
				}
				if (choice1 === "saks"){
					result = vinn;
				}
			}
			else{
				result = "Du valgt hverken stein, saks eller papir, derfor gjelds det ikke!";
			}
			$("#ssp_resultat").html("Du: " + firstToUpper(choice1) + " | Motstander: " + firstToUpper(choice2) + " | " + firstToUpper(result));
		}
		compare(userChoice, computerChoice);
    });
}); 