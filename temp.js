var change = document.getElementById("output-div");
var generate = document.getElementById("generate");
var retry = document.getElementById("retry");
var copy = document.getElementById("copy");

var dateSum = 0;
var timeSum = 0;

class Random {
  getrandom(number) {
    var today = new Date();
    dateSum +=
      today.getFullYear() +
      today.getMonth() +
      today.getDate() +
      today.getSeconds() +
      today.getMilliseconds() +
      today.getUTCMilliseconds() +
      screen.width +
      screen.colorDepth +
      screen.pixelDepth;
    5494;
    timeSum +=
      today.getHours() +
      today.getMinutes() +
      today.getSeconds() +
      today.getMilliseconds();
    var megaNumber = dateSum % timeSum;
    var numberoflength = megaNumber.toString().length;
    var divide = 1;
    while (numberoflength - 1 > 0) {
      divide *= 10;
      numberoflength--;
    }

    var num = megaNumber % divide;
    if (num > 9) {
      while (num > 9) {
        num = num % 10;
      }
    }
    if (num == 0) {
      num = 1;
    }

    return num;
  }
}
const g1 = new Random();

function randomNumber() {
  var n;
  n = getrandom();
  return n;
}
function randomWord() {
  const alphabet =
    "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz";

  return alphabet[Math.floor((g1.getrandom() * alphabet.length) / 10)];
}
function randomBigWord() {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ";

  return alphabet[Math.floor((g1.getrandom() * alphabet.length) / 10)];
}
function randomSymbols() {
  const symbols = "!@#$%^^&*(,.-+=";

  return symbols[Math.floor((g1.getrandom() * symbols.length) / 10)];
}
function suprise() {
  const symbolsaphla =
    "AaBbCcDdEdFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz1!2@3#4$5%^6^7&8*9(0)-+=[]:,./><aBbCcDdEdFfGgHhIiJjKkLlMmN";

  return symbolsaphla[Math.floor((g1.getrandom() * symbolsaphla.length) / 10)];
}
function pleaseValidate() {
  var check = document.getElementById("passlength").value;
  if (check > 11 && check < 33) {
    change.style.display = "block";
    document.getElementById("output-yo").value = makePassword(check);
    retry.style.display = "block";
    generate.style.display = "none";
    copy.style.display = "block";
  } else {
    alert("Please enter a value between 12 to 32");
  }
}
function makecopy() {
  var el = document.getElementById("output-yo");
  el.select();
  document.execCommand("copy");
  alert("Copied!");
}

function makePassword(limit) {
  var wordlimit = limit;
  var temp = randomWord();
  var n = wordlimit;
  var lower = 0;
  var upper = 0;
  var number = 0;
  var special = 0;
  wordlimit = wordlimit - 1;
  while (wordlimit--) {
    if (wordlimit % 2 == 0) {
      if (lower < 1) {
        temp += randomWord();
        lower++;
      } else if (number < 1) {
        temp += g1.getrandom();
        number++;
      } else {
        temp += suprise();
      }
    } else {
      if (upper < 1) {
        temp += randomBigWord();
        upper++;
      } else if (special < 1) {
        temp += randomSymbols();
        special++;
      } else {
        temp += suprise();
      }
    }
  }

  temp += randomBigWord();
  for (var i = 0; i < wordlimit; i++) {
    console.log(temp[i]);
  }
  return temp;
}
