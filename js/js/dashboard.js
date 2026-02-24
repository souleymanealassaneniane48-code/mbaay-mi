console.log("Page dashboard chargée");

let count = 0;
const countSpan = document.getElementById("count");

if (countSpan) {
  setInterval(() => {
    count++;
    countSpan.textContent = count;
  }, 1000);
}
