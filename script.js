// G-Version - Split the Nota
// Skriv din pseudokod innanför nedanstående kommentarsblock
/*
Funktion dela räkningen(summa, antal vänner, dricks)
    Set variabel summa_med_tips = summa * (1 + dricks)
    summa_per_person = summa_med_tips / antal_vänner
    returnera summa_per_person

*/

// VG-Version - Lewis Carroll Word Puzzle
// Skriv din pseudokod innanför nedanstående kommentarsblock
/*

function play()
    SET variabel ordbok = [..., ..., ...]; // Innehåller ALLA ord i det engelska språket
    SET variabel startOrd till "FOUR";
    SET variabel slutordOrd till "FIVE";


end function

function isOneLetterApart(wordOne, wordTwo)
    SET variabel diffCount till 0;


    return diffCount === 1; // returnerar sant om endast en bokstav ändrats, annars falskt
end function

*/

/* Här nedan är min pseudokod */

/*

funktion play()
    SET variabel ordbok = ["...", "...", "...", "...", "...", "...", "...", "..."];
    SET variabel startOrd till "FOUR";
    SET variabel slutOrd till "FIVE";
   
    

     while (loopen kör tills startOrd lika med slutOrd) 
        SET variabel nyttord till input från användare; 
        if(startOrd och nyttord har lika många bokstäver); 
            if (om isoneletterapart är true OCH om ordbok innehåller nyttord)
                startOrd tilldelas nyttord;
            end if
         end if
        else
            Skriv ut "De ord i det engelka språket måste innehålla lika många bokstäver!"
        end else
    end while
    Skriv ut grattiss du har vunnit!
end function

// Deklarera function isOneLetterApart

function isOneLetterApart(FOUR, FIVE) 
    SET variabel isoneletterapart lika till 0;    
    
    for (för varje bokstav i variabeln FOUR)
        if om bokstaven på plats index i FOUR är lika med plats index i FIVE;
            isoneletterapart++;
        end if
    end for     
            
    returnerar variabeln diffCount lika med 1;

end fuktion
    
*/

