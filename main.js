function showWindows(value) {
  let mainMenuWindow = document.getElementById("main-menu");
  let gameWindow = document.getElementById("game-window");
  if (value == 1) {
    mainMenuWindow.style.display = "none";
    gameWindow.style.display = "flex";
  } else {
    mainMenuWindow.style.display = "flex";
    gameWindow.style.display = "none";
  }
}
