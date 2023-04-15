function MaxParos(vizsgaltTomb) {
    let maxParos = null;
  
    for (let i = 0; i < vizsgaltTomb.length; i++) {
     
      if (vizsgaltTomb[i] % 2 === 0) {
       
        if (maxParos === null || vizsgaltTomb[i] > maxParos) {
       
          maxParos = vizsgaltTomb[i];
        }
      }
    }
  
    if (maxParos === null) {
    
      console.error("Hiba: A tömbben nincs páros szám!");
      return "Hiba"; 
    } else {
      return maxParos;
    }
  }
  
 
  console.log("MaxParos([12,3,7,19,21]) eredménye: " + MaxParos([12,3,7,19,21]));
  console.log("MaxParos([28,14,2,42,69]) eredménye: " + MaxParos([28,14,2,42,69]));
  console.log("MaxParos([32,21,54,33,21]) eredménye: " + MaxParos([32,21,54,33,21]));