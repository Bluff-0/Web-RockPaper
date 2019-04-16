let userScore=0;
let computerScore=0;

const userScore_span= document.getElementById("user-score");
const compScore_span= document.getElementById("computer-score");
const scoreBoard_div= document.querySelector(".score-board");
const result_div= document.querySelector(".result > p");
const rock_div= document.getElementById("r");
const paper_div= document.getElementById("p");
const sissor_div= document.getElementById("s");

function getComputerChoice() 
{
	const choices=  ['r','p','s'];
	const randomNumber= Math.floor(Math.random() * 3);
	return choices[randomNumber];
}

getComputerChoice();

function convertToWord(l)
{
	if(l==="r") return "Rock";
	if(l==="p") return "Paper";
	if(l==="s") return "Sissor";
}


function win(user, comp)
{
	userScore++;
	userScore_span.innerHTML= userScore;
	compScore_span.innerHTML= computerScore;
	result_div.innerHTML= convertToWord(user)+ "  Covers  "+ convertToWord(comp)+ ".  You Win !!";
	document.getElementById(user).classList.add('green-glow');
	//setTimeout(function(){document.getElementById(user).classList.remove('green-glow')},1000);
	setTimeout(() =>  document.getElementById(user).classList.remove('green-glow'),700);
}
function lose(user, comp)
{
	computerScore++;
	userScore_span.innerHTML= userScore;
	compScore_span.innerHTML= computerScore;
	result_div.innerHTML= convertToWord(comp)+ "  Covers  "+ convertToWord(user)+ ".  You Lose !!";
	document.getElementById(user).classList.add('red-glow');
	//setTimeout(function(){document.getElementById(user).classList.remove('red-glow')},1000);
	setTimeout(() =>  document.getElementById(user).classList.remove('red-glow'),700);
}
function draw(user, comp)
{
	userScore_span.innerHTML= userScore;
	compScore_span.innerHTML= computerScore;
	result_div.innerHTML= convertToWord(comp)+ "  Equals to  "+ convertToWord(user)+ ".  It's a Draw ...";
	document.getElementById(user).classList.add('grey-glow');
	//setTimeout(function(){document.getElementById(user).classList.remove('grey-glow')},1000);
	setTimeout(() =>  document.getElementById(user).classList.remove('grey-glow'),700);
}


function game(userChoice)
{
	console.log(":poop   " +  userChoice);
	computerChoice= getComputerChoice();
	switch(userChoice +  computerChoice)
	{
		case "rs":
		case "pr":
		case "sp":
			console.log("Winner !!!");
			win(userChoice, computerChoice);
			break;
		case "rp":
		case "ps":
		case "sr":
			console.log("Loser !!!");
			lose(userChoice, computerChoice);
			break;
		case "rr":
		case "pp":
		case "ss":
			console.log("Draw ...");
			draw(userChoice, computerChoice);
			break;
	}
}

function main() 
{

	rock_div.addEventListener('click', function(){
		game("r");
	})
	paper_div.addEventListener('click', function(){
		game("p");
	})
	sissor_div.addEventListener('click', function(){
		game("s");
	})

}

main();