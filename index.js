let btn = document.querySelector(".darkmode");

btn.addEventListener("click", () => {
  if (btn.innerHTML === `<i class="fas fa-moon"></i>`) {
    btn.innerHTML = `<i class="fas fa-sun"></i>`;
    btn.style.color = "orange";
    btn.style.backgroundColor = "rgb(43, 43, 43)";
    document.body.classList.add("darkmode");

    let img1 = document.getElementById("bot_img")
    img1.setAttribute('src',"./images/bot_white.png")
  } else {
    btn.innerHTML = `<i class="fas fa-moon"></i>`;
    btn.style.color = "black";
    btn.style.backgroundColor = "white";
    document.body.classList.remove("darkmode");
    
    let img1 = document.getElementById("bot_img")
    img1.setAttribute('src',"./images/bot.png")
  }
});
