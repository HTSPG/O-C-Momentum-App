const images = ["lock.jpg", "wallpaper.jpg"];

const pImage = images[0];
const bgImage = document.createElement("img");

function userLoginCheck() {
  const loginInput = loginForm.querySelector("input");
  if (loginInput.classList.contains("hidden")) {
    pImage = images[1];
  } else {
    pImage = images[0];
  }
  bgImage.src = `/img/${pImage}`;
}

userLoginCheck();
document.body.appendChild(bgImage);
