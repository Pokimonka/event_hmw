export default class Play {
  constructor(field) {
    this.field = field;
    this.killeGoblin = document.getElementById("dead");
    this.missGoblin = document.getElementById("lost");
    this.startPlay();
  }

  startPlay() {
    this.score = 0;
    this.miss = 0;
    console.log(this.field);
    this.field.addEventListener("click", (hole) => {
      if (hole.target.classList.contains("has_goblin")) {
        this.killeGoblin.textContent = ++this.score;
      } else {
        this.missGoblin.textContent = ++this.miss;
      }
      this.check();
    });
  }

  check() {
    //можно сделать бесконечно
    if (this.score === 10) {
      this.endPlay("Победа");
    } else if (this.miss === 5) {
      this.endPlay("Проигрыш");
    }
  }

  endPlay(msg) {
    alert(msg);
    this.score = 0;
    this.miss = 0;
    this.killeGoblin.textContent = this.score;
    this.missGoblin.textContent = this.miss;
  }
}
