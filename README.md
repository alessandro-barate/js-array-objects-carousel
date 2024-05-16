Dato un array di oggetti letterali con:

- url dell’immagine
- titolo
- descrizione
  Creare un carosello come nella foto allegata.

Milestone 0:
Analizzate l'html statico (è una base da cui partire) del carosello per comprenderne al meglio la struttura da manipolare.

Milestone 1:
Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
Al click dell'utente sulle frecce , l'immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.

- Ciclo for per creare i div e gli img
- Aggiungere e togliere le classi css al click dei bottoni
  -- 1 funzione per scorrere in avanti
  -- 1 funzione per scorrere indietro

Milestone 2:
Aggiungere il **ciclo infinito** del carosello. Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso l'alto, la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso il basso.

- Contatore iniziale a 0
- Se il contatore è minore di 0, torna alla lunghezza dell'array - 1 (ultimo elemento); se è maggiore della lunghezza dell'array, torna a 0.

BONUS 1:
Aggiungere le thumbnails (sottoforma di miniatura) ed al click attivare l’immagine corrispondente.

BONUS 2:
Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) l’immagine attiva dovrà cambiare alla successiva.

- Aggiungo un setInterval con tempo 5000 e la funzione per scorrere le immagini

BONUS 3:
Aggiungere bottoni di start/stop e di inversione del meccanismo di autoplay.
