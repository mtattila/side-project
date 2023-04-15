function SzovegVisszafele(szoveg) {
    return szoveg.split("").reverse().join("");
  }
  

  console.log("SzovegVisszafele('Szeretem a programozás') eredménye: " + SzovegVisszafele("Szeretem a programozás"));
  console.log("SzovegVisszafele('Géza kék az ég') eredménye: " + SzovegVisszafele("Géza kék az ég"));
  console.log("SzovegVisszafele('Répa, retek, mogyoró') eredménye: " + SzovegVisszafele("Répa, retek, mogyoró"));