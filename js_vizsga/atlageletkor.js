function CegAtlagEletkor(vizsgaltObjektumTomb) {
    let osszEletkor = 0;
    let dolgozoSzam = vizsgaltObjektumTomb.length;
  
    for (let i = 0; i < dolgozoSzam; i++) {
      osszEletkor += vizsgaltObjektumTomb[i].eletkor;
    }
  
    let atlagEletkor = Math.round(osszEletkor / dolgozoSzam);
    return atlagEletkor;
  }
  
 
  let Dolgozok = [
    { nev: "Anna", eletkor: 28 },
    { nev: "Bela", eletkor: 34 },
    { nev: "Cecilia", eletkor: 42 },
    { nev: "David", eletkor: 22 },
  ];
  
  console.log("CegAtlagEletkor(Dolgozok) eredménye: " + CegAtlagEletkor(Dolgozok));