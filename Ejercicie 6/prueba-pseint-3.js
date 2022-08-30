let formToDate = document.getElementById('formToDate');
formToDate.addEventListener('submit', function (e) {
  e.preventDefault();
  let date_user = document.getElementById('date_user').value;
  let demo = document.getElementById('demo');
  let month = document.getElementById('month');
  calculateAge(date_user, demo, month);
  formToDate.reset();
});
/**
 * @param {Date} date
 * @param {any} demo
 * @param {any} month
*/
function calculateAge (date, demo, month) {
  let toDate = new Date();
  let birthday = new Date(date);
  let age = Math.abs(birthday.getFullYear() - toDate.getFullYear());
  let m = Math.abs(birthday.getMonth() - toDate.getMonth());
  if (m < 0 || (m === 0 && toDate.getDate() < birthday.getDate())) {
    age--;
  }
  demo.textContent = age;
  month.textContent = m;
  return;
}