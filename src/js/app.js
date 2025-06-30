import Play from "./counter";

export default class Game {
  constructor(field, size) {
    this.field = field;
    this.size = size ** 2;
    this.position = 0;
    this.new_position = 0;
    this.play = new Play(field);
  }

  createField() {
    for (let i = 0; i < this.size; i++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      cell.classList.add(`cell${i + 1}`);
      this.field.appendChild(cell);
    }
    this.GetRandomCell();
  }

  GetRandomCell() {
    setInterval(() => {
      while (this.position === this.new_position) {
        this.new_position = Math.floor(Math.random() * this.size) + 1;
      }
      if (this.position > 0) {
        document.querySelector(`.has_goblin`).classList.remove("has_goblin");
      }
      document
        .querySelector(`.cell${this.new_position}`)
        .classList.add("has_goblin");
      this.position = this.new_position;
    }, 1000);
  }
}
