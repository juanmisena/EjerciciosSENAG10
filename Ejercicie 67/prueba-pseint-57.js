let ale = document.getElementById('ale'), arrNum = [], ranNum, grNum = 0, smNum = 0, demo = document.getElementById('demo');
for (let i = 1; i <= 20; i++) {
  ranNum = Math.ceil(Math.random() * 20);
  arrNum.push(ranNum);
}
for (const item of arrNum) {
  ale.innerText += item + " \n";
}
smNum = Math.min(...arrNum);
grNum = Math.max(...arrNum);
demo.innerText = `
the number greatter is: ${grNum}
the number smaller is: ${smNum}`;