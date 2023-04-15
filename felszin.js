function KockaFelszin(a) {
  if (a <= 0 || isNaN(a)) {

    console.error("Hiba: Az oldalhossznak pozitívnak és számnak kell lennie!");

  } else {
    var felszin = 6 * Math.pow(a, 2);
    return felszin;
  }
}


console.log("KockaFelszin(2) eredménye: " + KockaFelszin(2));
console.log("KockaFelszin(3) eredménye: " + KockaFelszin(3));
console.log("KockaFelszin(5) eredménye: " + KockaFelszin(5));