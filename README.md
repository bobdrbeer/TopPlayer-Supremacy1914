# Supremacy1914 — Giocatore migliore

Sondaggio scherzoso statico, pronto per GitHub Pages.

## File
- `index.html`: pagina e lista dei nick
- `style.css`: grafica responsive
- `script.js`: selezione, nick personalizzati e messaggi

## Pubblicazione su GitHub Pages
1. Crea un repository GitHub.
2. Carica `index.html`, `style.css`, `script.js` e `README.md` nella root.
3. Vai in **Settings → Pages**.
4. Scegli **Deploy from a branch**, branch `main`, cartella `/ (root)`, poi salva.
5. Apri l'indirizzo che GitHub mostra dopo la pubblicazione.

I nick aggiunti sono salvati nel `localStorage` del browser corrente: restano su quel browser/dispositivo, ma non si sincronizzano con altri utenti o dispositivi. Per condividere i nick tra tutti i visitatori servirebbe un backend.

La finestra chiede “Sei sicuro di voler votare [nick]?”; per scherzo, sia Sì sia No mostrano lo stesso messaggio di voto registrato. Il sondaggio non invia voti a un server.
