function hozzavaloSzamitas() {
    var emberek = document.getElementById("emberek").value;

    var tej = emberek * 0.2;
    var tojás = emberek * 2;
    var cukor = emberek * 1;
    document.getElementById("eredmeny").innerHTML = "Szükséges mennyiség:<br>";
    `${tej} liter tej<br>`;
    `${tojás} darab tojás<br>`;
    `${cukor} evőkanál kristálycukor`;
}
