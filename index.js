let a = 0;
//const btnp = document.getElementById("btn+");
//const btnm = document.getElementById("btn-")
//const p = document.getElementById("output");
const express = require('express');
const app = express();


app.get('/main', (req, res) => {
  res.send('hello');
});
app.listen(3000, () => {
  console.log('서버 실행 중: http://localhost:3000');
});
/*
btnp.addEventListener("click", () => {
    a++;
    p.textContent = a;
});
btnm.addEventListener("click", () => {
    a--;
    p.textContent = a;
});
*/