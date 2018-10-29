/**
 * Verkefni 7 – Reikniæfingarforrit
 *
 * Forrit sem æfir hraða í að reikna einföld dæmi
 */

// fasti sem segir til um hve marga leiki eigi að spila
const GAMES_TO_PLAY = 10;
var rett = 0;

/**
 * Birtir upplýsingar um leik og eftir að notandi samþykkir spilar fyrsta leik
 * með kalli í play().
 * Eftir leik er notanda boðið að spila annan leik, ef ekki hættir forrit.
 */
function start() {
  alert("Markmiðið er að svara eins mörgum af 10 dæmum rétt eins hratt og mögulegt  er.");
  do {
      play();
  } while (confirm("Spila annan leik?"));


}

/**
 * Spilar einn leik. Heldur utan um hvenær leikur byrjaði, hvenær endar og
 * fjölda réttra svara. Eftir leik eru birtar upplýsingar um niðurstöðu:
 *   Þú svaraðir X af 10 dæmum rétt á Y sekúndum
 *   Meðalrétt svör á sekúndu eru Z
 * Þar sem Y og Z hafa tvo aukastafi.
 *
 * Ef notandi ýtir á "Cancel" í leik eru skilaboðin "Hætt í leik." birt og engar
 * upplsýingar um niðurstöður.
 *
 */
function play() { 
  var birta = true;
  rett = 0;

  var sec1 = new Date().getTime(); //Tími í upphafi

  for(var i = 0; i<GAMES_TO_PLAY; i++){
   var a = ask();
   if(a === null){
     birta = !birta;
     break;
   }
 }
 
 var sec2 = new Date().getTime(); //Tími í lokin

 var sec = ((sec2 - sec1)/1000).toFixed(2); //mismunur loka og upphafstíma

 var medal = (rett/sec).toFixed(2); //meðalfjöldi réttra spurninga á sekúndu

 if(birta === true)
  alert("Þú svaraðir " + rett + " af " + GAMES_TO_PLAY + " dæmum rétt á " + sec + " sekúndum \nMeðalrétt svör á sekúndu eru " + medal);

}

/**
 * Spyr einnar spurningar og skilar upplýsingum um svar (mögulega með því að
 * nota true, false og null ef notandi hættir). Birtir notanda propmpt til að
 * svara í og túlkar svarið yfir í tölu.
 *
 * Mögulegar spurningar eru:
 * - `+` dæmi þar sem báðar tölur geta verið á bilinu `[1, 100]`
 * - `-` dæmi þar sem báðar tölur geta verið á bilinu `[1, 100]`
 * - `*` dæmi þar sem báðar tölur geta verið á bilinu `[1, 10]`
 * - `/` dæmi þar sem fyrri tala er á bilinu `[2, 10]` og seinni talan er fyrri
 *   talan sinnum tala á bilinu `[2, 10]` þ.a. svarið verði alltaf heiltala
 *
 * Sniðugt væri að færa það að búa til spurningu í nýtt fall sem ask() kallar í.
 */
function spurning(rand){
  //if statement fyrir plús spurningu
 if(rand === 0){
   var a = randomNumber(1,100)
   var b = randomNumber(1,100)
   const input = prompt("Hvað er " + a + " + " + b + "?");
   if(input === null)
    return null;
   if(parseInt(input) === a+b)
    return true;
 }

 //if statement fyrir mínus spurningu
 if(rand === 1){
  var a = randomNumber(1,100)
  var b = randomNumber(1,100)
  const input = prompt("Hvað er " + a + " - " + b + "?");
  if(input === null)
    return null;
  if(parseInt(input) === a-b)
     return true;
 }

  //if statement fyrir margföldunar spurningu
 if(rand === 2){
  var a = randomNumber(1,10)
  var b = randomNumber(1,10)
  const input = prompt("Hvað er " + a + " * " + b + "?");
  if(input === null)
    return null;
  if(parseInt(input) === a*b)
     return true;
 }

  //if statement fyrir deilingar spurningu
 if(rand === 3){
  var a = randomNumber(2,10)
  var b = a*randomNumber(2,10)
  const input = prompt("Hvað er " + b + " / " + a + "?");
  if(input === null)
    return null;    
  if(parseInt(input) === b/a)
     return true;
 }
  
}

function ask() {
  var s = spurning(randomNumber(0,3));
  if(s === true)
    rett++;
  if(s === null){
    alert("Hætt í leik");
    return null;
  }
}

/**
 * Skilar tölu af handahófi á bilinu [min, max]
 */
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Byrjar leik
start();
