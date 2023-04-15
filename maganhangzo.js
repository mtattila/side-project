function MaganHangzokSzama(vizsgaltSzoveg) {
    const maganhangzok = "aeiouáéíóöőúüű";
  
    let szamlalo = 0;
  
    for (let i = 0; i < vizsgaltSzoveg.length; i++) {
     
      if (maganhangzok.indexOf(vizsgaltSzoveg[i].toLowerCase()) !== -1) {
      
        szamlalo++;
      }
    }
  
    return szamlalo;
  }
  
  
  console.log("MaganHangzokSzama('Szeretem a programozás') eredménye: " + MaganHangzokSzama("Szeretem a programozás"));
  console.log("MaganHangzokSzama('Géza kék az ég') eredménye: " + MaganHangzokSzama("Géza kék az ég"));
  console.log("MaganHangzokSzama('Répa, retek, mogyoró') eredménye: " + MaganHangzokSzama("Répa, retek, mogyoró"));