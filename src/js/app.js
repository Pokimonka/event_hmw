(() => {
  let active = 1;
  const getPos = (index) => document.querySelector(`.cell${index}`);
  const deleteGoblin = (index) =>
    (getPos(index).className = `cell cell${index}`);
  const activatePos = (index) => {
    getPos(index).classList.add("has_goblin");
  };
  const next = () =>
    setTimeout(() => {
      deleteGoblin(active);
      active = Math.floor(Math.random() * 16) + 1;
      activatePos(active);
      next();
    }, 1000);
  next();
})();
