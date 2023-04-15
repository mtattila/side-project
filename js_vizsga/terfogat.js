function KockaTerfogat(a) {
    if (a <= 0 || isNaN(a)) {
      
      console.error("Hiba: Az oldalhossznak pozitívnak és számnak kell lennie!");
      return NaN;
    } else {
      var terfogat = Math.pow(a, 3);
      return terfogat;
    }
  }
  

  console.log("KockaTerfogat(2) eredménye: " + KockaTerfogat(2));
  console.log("KockaTerfogat(3) eredménye: " + KockaTerfogat(3));
  console.log("KockaTerfogat(5) eredménye: " + KockaTerfogat(5));