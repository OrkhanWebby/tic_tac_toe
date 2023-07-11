// TARGETING ALL SQUARES AND H2
let mainContainer = document.querySelector(".main-container");
let squares = document.querySelectorAll(".square");
const h2 = document.querySelector("h2");

// ASSIGNING 'X' TO A VARIABLE
let a = "X";

let counter = 0;
function createClick(e) {
	if (e.target.textContent) return;

	e.target.textContent = a;
	if (a == "X") {
		a = "O";
		h2.textContent = "O's turn";
	} else {
		a = "X";
		h2.textContent = "X's turn";
	}
	counter++;
	const hasWinner = winnerFunct();
	if (counter == 9 && !hasWinner) {
		h2.textContent = "It's a tie!";
	}
}

for (let square of squares) {
	square.addEventListener("click", createClick);
}

// THE WINNER COMBINATIONS
const winner = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6],
];

function winnerFunct() {
	for (let win of winner) {
		if (
			squares[win[0]].innerHTML != "" &&
			squares[win[1]].innerHTML != "" &&
			squares[win[2]].innerHTML != "" &&
			squares[win[0]].innerHTML == squares[win[1]].innerHTML &&
			squares[win[0]].innerHTML == squares[win[2]].innerHTML
		) {
			h2.textContent = squares[win[0]].innerHTML + " won!";

			if (h2.textContent) {
				squares[win[0]].style.backgroundColor = "yellow";
				squares[win[1]].style.backgroundColor = "yellow";
				squares[win[2]].style.backgroundColor = "yellow";
			}

			for (let square of squares) {
				square.removeEventListener("click", createClick);
			}
			return true;
		}
	}
	return false;
}

const button = document.querySelector("button");

button.addEventListener("click", () => {
	squares.forEach((square) => {
		h2.textContent = "The winner is...";
		square.style.backgroundColor = "white";
		square.innerHTML = "";
		counter = 0;
		square.addEventListener("click", createClick);
	});
});
