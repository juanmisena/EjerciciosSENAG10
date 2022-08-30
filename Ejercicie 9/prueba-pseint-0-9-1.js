window.onload = function () {
  document.getElementById('formP').reset();
}
let formP = document.getElementById('formP');
formP.addEventListener('submit', (e) => {
  e.preventDefault();
  // prueba-pseint-9
  let something = document.getElementById('something'), demo = document.getElementById('demo'), valSome = parseInt(something.value), p_demo = demo.parentElement.parentElement;
  if (valSome % 2 == 0) {
    p_demo.classList.remove('alert-primary');
    p_demo.classList.remove('alert-danger');
    p_demo.classList.add('alert-success');
    demo.textContent = `the number ${valSome} is pair`;
    // console.log("is pair");
  } else {
    p_demo.classList.remove('alert-primary');
    p_demo.classList.remove('alert-success');
    p_demo.classList.add('alert-danger');
    demo.textContent = `the number ${valSome} is odd`;
    // console.log("is odd");
  }
  e.target.reset();
});