function PhErtek(vizsgaltErtek) {
    if (isNaN(vizsgaltErtek)) {
      
      console.error("Hiba: A vizsgált értéknek számnak kell lennie!");
      return "Hiba"; 
    } else if (vizsgaltErtek < 0 || vizsgaltErtek > 14) {
     
      console.error("Hiba: A vizsgált értéknek 0 és 14 között kell lennie!");
      return "Hiba";
    } else if (vizsgaltErtek === 7) {
     
      return "semleges";
    } else if (vizsgaltErtek < 7) {
     
      return "savas";
    } else {
    
      return "lúgos";
    }
  }
  
  
  console.log("PhErtek(9) eredménye: " + PhErtek(9)); 
  console.log("PhErtek(5.5) eredménye: " + PhErtek(5.5));
  console.log("PhErtek(7) eredménye: " + PhErtek(7));