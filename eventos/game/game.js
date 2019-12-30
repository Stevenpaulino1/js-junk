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
    currentTopPos = extractNumPosition(sprite.style.top);
    sprite.style.top = `${currentTopPos + 50}px`;
  } else if (e.key === "ArrowUp" || e.key === "Up") {
    currentTopPos = extractNumPosition(sprite.style.top);
    sprite.style.top = `${currentTopPos - 50}px`;
  } else if (e.key === "ArrowRight" || e.key === "Right") {
    currentLeftPos = extractNumPosition(sprite.style.left);
    sprite.style.left = `${currentLeftPos + 50}px`;
    sprite.style.transform = "scale(1, 1)";
  } else if (e.key === "ArrowLeft" || e.key === "Left") {
    currentLeftPos = extractNumPosition(sprite.style.left);
    sprite.style.left = `${currentLeftPos - 50}px`;
    sprite.style.transform = "scale(-1, 1)";

    // flipSprite()
  }
  if (isTouching(sprite, coin)) moveCoin();
}

// const flipSprite = () => sprite.style.transform(-1, 1);

const extractNumPosition = position => {
  if (!position) return 100;
  return parseInt(position.slice(0, -2));
};

const moveCoin = () => {
  console.dir(coin);

  const x = Math.floor(Math.random() * window.innerHeight);
  const y = Math.floor(Math.random() * window.innerWidth);
  console.log(x, y);
  coin.style.top = `${y}px`;
  coin.style.left = `${x}px`;
};

moveCoin();
