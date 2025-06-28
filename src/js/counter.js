const killeGoblin = document.getElementById("dead");
const missGoblin = document.getElementById("lost");
let cells = document.querySelectorAll(".cell");
let score = 0;
let miss = 0;

function play(hole) {
  if (hole.target.classList.contains("has_goblin")) {
    killeGoblin.textContent = ++score;
  } else {
    missGoblin.textContent = ++miss;
  }
  if (score === 10) {
    endPlay("Победа");
  } else if (miss === 5) {
    endPlay("Проигрыш");
  }
}

function endPlay(msg) {
  alert(msg);
  score = 0;
  miss = 0;
  killeGoblin.textContent = score;
  missGoblin.textContent = miss;
}

cells.forEach((hole) => {
  hole.addEventListener("click", play);
});
