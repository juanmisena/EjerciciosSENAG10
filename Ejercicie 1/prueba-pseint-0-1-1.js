window.onload = function () {
  document.getElementById('formAd').reset();
}
let demo = document.getElementById('demo'), op = 0;
let formAd = document.getElementById('formAd');
formAd.addEventListener('submit', (e) => {
  e.preventDefault();
  let something = Number(document.getElementById('something').value), something2 = Number(document.getElementById('something2').value);
  op = (something + something2);
  demo.innerText = op;
  e.target.reset();
});