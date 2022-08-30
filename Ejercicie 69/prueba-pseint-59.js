window.onload = function () {
  document.getElementById('formX').reset();
}
let ale = document.getElementById('ale'), tbody = document.getElementById('tbody'), trTbody = tbody.children[0];
let formX = document.getElementById('formX');
formX.addEventListener('submit', ev => {
  if (ev.target.checkValidity()) {
    ev.preventDefault();
  }
  let num = Number(document.getElementById('num').value);
  tbody.innerHTML = '';
  for (let i = 1; i <= 10; i++) {
    trTbody.querySelectorAll('td')[0].innerText = num;
    trTbody.querySelectorAll('td')[1].innerText = "x";
    trTbody.querySelectorAll('td')[2].innerText = i;
    trTbody.querySelectorAll('td')[3].innerText = "=";
    trTbody.querySelectorAll('td')[4].innerText = num * i;
    const clone = trTbody.cloneNode(true);
    tbody.appendChild(clone);
    // console.log(`${num} x ${i} = ${num * i}`);
  }
  ev.target.reset();
});