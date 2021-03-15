//DATUM//
n= new Date(); // datumobject
y= n.getFullYear(); //jaar
m= n.getMonth() + 1; //maand
d= n.getDate(); //dag
document.getElementById("currentdate").innerHTML= d + "-" + m + "-" + y; //plakt de dagnummer, maandnummer en jaarnummer
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

//TIME/////////////////////////////////////////////////////////////////
function beginTime(){ //functie klok
    //variabelen//
    var today = new Date(); //datumobject
    var hour = today.getHours(); // pakt de uren
    var minute = today.getMinutes(); // pakt de minuten
    var second = today.getSeconds(); // pakt de seconden
    //tijd checken minuten en seconden//
    minute = checkTime(minute); // checkt de tijd in minuten
    second = checkTime(second); // checkt de tijd in seconden
    document.getElementById("currentclock").innerHTML = hour + ":" + minute + ":" + second; //plakt de uren, minuten en seconden achter elkaar
    var t = setTimeout(beginTime, 500); //animeren
}

function checkTime(i){ //functie 
    if (i < 10){i = "0" + i}; //zet een 0 achter de cijfer wanneer het getal onder de 10 is
    return i;
}
//////////////////////////////////////////////////////////////////////////////////////////////

//CHANGE BG IMAGE//
function backgroundChange(){ //functie
    var hr = (new Date()).getHours(); //date object
    var bg = document.getElementById("hstyle"); //pakt de html element
    var phase = document.getElementById("currentphase"); //fase
    var note = document.getElementById("currentnote"); //omschrijving

    if (hr >= 0 && hr < 6){ // Nacht (Als het aantal uur tussen 0 en 6 is)
        bg.classList.add("spacenight"); //voegt class toe
        bg.classList.remove("spacevening"); //verwijdert class
        phase.innerText = "Night"; //plaatst deze tekst in de elementID
        note.innerText = "Time to go to bed now. Good night and sleep well"; //plaatst deze tekst in de elementID
    }

    else if (hr >= 6 && hr < 12){ //ochtend (als het aantal uur tussen 6 en 12 is)
        bg.classList.add("spacemorning"); //voegt class toe
        bg.classList.remove("spacenight"); //verwijdert class
        phase.innerText = "Morning"; //plaatst deze tekst in de elementID
        note.innerText = "Good morning! Wake up and make your breakfast"; //plaatst deze tekst in de elementID
    }
    
    else if (hr >= 12 && hr < 18){ //Middag (als het aantal uur tussen 12 en 18 is)
        bg.classList.add("spaceafternoon"); //voegt class toe
        bg.classList.remove("spacemorning"); //verwijdert classs
        phase.innerText = "Afternoon"; //plaatst deze tekst in de elementID
        note.innerText = "Good afternoon. Time to work out!"; //plaatst deze tekst in de elementID
    }
    else{ //avond (als het aantal uur tussen 18 en 24 is)
        bg.classList.remove("spaceafternoon"); //verwijdert class
        bg.classList.add("spaceevening"); //voegt class toe
        phase.innerText = "Evening"; //plaatst deze tekst in de elementID
        note.innerText = "Good evening. Dinner is ready"; //plaatst deze tekst in de elementID
    }
}
backgroundChange(); //activeert de functie
setInterval(backgroundChange(),1000); //zet een interval zodat die verandert naar de juiste tijd
//////////////////////////////////////////////////////////////////