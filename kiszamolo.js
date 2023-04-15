function ElsoNSzamOsszege(szamokMennyisege) {
    if (isNaN(szamokMennyisege)) {

      console.error("Hiba: A paraméternek számnak kell lennie!");
      return "Hiba";
    } else if (szamokMennyisege <= 0) {
     
      console.error("Hiba: A paraméternek pozitívnak kell lennie!");
      return "Hiba";
    } else {
      let osszeg = 0;
      for (let i = 1; i <= szamokMennyisege; i++) {
        osszeg += i;
      }
      return osszeg;
    }
  }
  
 
  console.log("ElsoNSzamOsszege(3) eredménye: " + ElsoNSzamOsszege(3));
  console.log("ElsoNSzamOsszege(10) eredménye: " + ElsoNSzamOsszege(10));
  console.log("ElsoNSzamOsszege(21) eredménye: " + ElsoNSzamOsszege(21));