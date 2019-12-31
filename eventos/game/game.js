//score counter
//random num coins on start

function isTouching(a, b) {
  const aRect = a.getBoundingClientRect();
  const bRect = b.getBoundingClientRect();

  return !(
    aRect.top + aRect.height < bRect.top ||
    aRect.top > bRect.top + bRect.height ||
    aRect.left + aRect.width < bRect.left ||
    aRect.left > bRect.left + bRect.width
  );
}

const sprite = document.querySelector("#player");
const coin = document.querySelector("#coin");

window.addEventListener("keyup", moveSprite);

function moveSprite(e) {
  if (e.key === "ArrowDown" || e.key === "Down") {
    moveVertical(sprite, 50);
  } else if (e.key === "ArrowUp" || e.key === "Up") {
    moveVertical(sprite, -50);
  } else if (e.key === "ArrowRight" || e.key === "Right") {
    moveHorizontal(sprite, 50);
    sprite.style.transform = "scale(1, 1)";
  } else if (e.key === "ArrowLeft" || e.key === "Left") {
    moveHorizontal(sprite, -50);
    sprite.style.transform = "scale(-1, 1)";

    // flipSprite()
  }
  if (isTouching(sprite, coin)) moveCoin();
}

moveVertical = (element, amount) => {
  currentTopPos = extractNumPosition(element.style.top);
  element.style.top = `${currentTopPos + amount}px`;
};

moveHorizontal = (element, amount) => {
  currentLeftPos = extractNumPosition(element.style.left);
  element.style.left = `${currentLeftPos + amount}px`;
};

// const flipSprite = () => sprite.style.transform(-1, 1);

const extractNumPosition = position => {
  if (!position) return 100;
  return parseInt(position);
};

const moveCoin = () => {
  const x = Math.floor(Math.random() * window.innerHeight);
  const y = Math.floor(Math.random() * window.innerWidth);
  coin.style.top = `${y}px`;
  coin.style.left = `${x}px`;
};

moveCoin();
