window.onload = function () {
  document.getElementById('formTime').reset();
}
let tx_dist = "", tx_spd = "", anySpd = 0;
let formTime = document.getElementById('formTime');
formTime.addEventListener('submit', function (e) {
  e.preventDefault();
  let distance = document.getElementById('distance'), speed = document.getElementById('speed'), dist_uni = document.getElementById('dist_uni'), spd_uni = document.getElementById('spd_uni'), demo = document.getElementById('demo');
  let disN = parseFloat(distance.value), spdN = parseFloat(speed.value), dis_uniN = parseInt(dist_uni.value), spd_uniN = parseInt(spd_uni.value), d = 0;
  switch (dis_uniN) {
    case 1:
      tx_dist = "km";
      break; 
    case 2:
      tx_dist = "m";
      break;
  }
  switch (spd_uniN) {
    case 1:
      tx_spd = "km/h";
      break;
    case 2:
      tx_spd = "m/s";
      break;
  }
  if ((tx_dist == "km") && (tx_spd == "km/h")) {
    d = Math.ceil((disN / spdN));
    demo.textContent = d + " h";
    // console.log("your value is---> " + d);
  } else if ((tx_dist == "m") && (tx_spd == "m/s")) {
    d = Math.ceil((disN / spdN));
    demo.textContent = d + " s";
    // console.log("your value is---> " + d);
  } else if ((tx_dist == "km") && (tx_spd == "m/s")) {
    anySpd = (spdN * 3.6);
    d = Math.ceil((disN / anySpd));
    demo.textContent = d + " h";
    // console.log("your value is---> " + d);
  } else if ((tx_dist == "m") && (tx_spd == "km/h")) {
    anySpd = (spdN / 3.6);
    d = Math.ceil(disN / anySpd);
    demo.textContent = d + " s";
    // console.log("your value is---> " + d);
  }
  formTime.reset();
});