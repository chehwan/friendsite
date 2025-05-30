let a = 0;
const btnp = document.getElementById("btn+");
const btnm = document.getElementById("btn-")
const p = document.getElementById("output");





btnp.addEventListener("click", () => {
    a++;
    p.textContent = a;
});
btnm.addEventListener("click", () => {
    a--;
    p.textContent = a;
});
