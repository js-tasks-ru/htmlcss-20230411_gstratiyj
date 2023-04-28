const bars = document.getElementsByClassName("histogram__bar");
for (let i = 0; i < bars.length; i++) {
    let randomHeight = Math.floor(Math.random() * 50) + "px"; 
    bars[i].style.height = randomHeight; 
  }