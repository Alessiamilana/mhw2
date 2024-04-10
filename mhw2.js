
/*1*/
const logoMano = document.querySelector('#logo-mano img'); /* seleziono l immagine all interno dell id logo-fb*/
logoMano.addEventListener('click', CambiaImmagine); /*in modo che quando l utente clicca sull immagine, viene chiamata la funzione CambiaImmgine*/


function CambiaImmagine(event) { /* viene eseguita quando l utente clicca sull immagine*/
    const image = event.currentTarget;
    image.removeEventListener('click', CambiaImmagine); /*rimuoviamo l eventListener per evitare che la funzione venga eseguita piu volte*/

    const logoMano = document.querySelector('#logo-mano'); /*seleziono l elemento con logo fb */
    const logoEmoij = document.querySelector('#logo-emoij'); /*seleziono elemento con logo insta*/

    logoMano.classList.add('hidden'); /*nascondo il logo fb quando clicco il logo, aggiungendo la classe hidden*/
    logoEmoij.classList.remove('hidden'); /*mostro il logo instagram rimuovendo la classe hidden*/
}





/*2*/
// Seleziona lo span "Privacy Policy" nel footer
const privacyPolicy = document.querySelector('footer span:nth-child(2)'); // Seleziona il secondo span nel footer
// Aggiungi un gestore di eventi per il clic sullo span "Privacy Policy"
privacyPolicy.addEventListener('click',reindirizzamento);


function reindirizzamento(event){
    const privacyPolicy = event.currentTarget;
    privacyPolicy.removeEventListener('click', CambiaImmagine);
        // Reindirizza alla pagina della privacy policy
    window.location.href = 'https://www.nicolettaceccoli.com/privacy-policy/'; // Sostituisci con l'URL della tua pagina della privacy policy
    }






/*3*/
document.addEventListener('DOMContentLoaded', function() { //si accerta che prima venga caricato interamente il documento html prima che lo script.js venga eseguito
    // Seleziono il footer
    var footer = document.querySelector('footer');
    var div = document.createElement('div');
    div.id = 'bottone';

    var testo = document.createElement('button');
    testo.textContent = 'mostra di piu';
    div.appendChild(testo);
    footer.appendChild(div);
    div.addEventListener('click', clickbutton);
});
    function clickbutton(event){
        const footer = event.currentTarget;
        footer.removeEventListener('click', clickbutton);
        var ulterioriInformazioni = document.createElement('p');
        ulterioriInformazioni.textContent = 'questo sito è stato creato da Alessia Milana';
        footer.appendChild(ulterioriInformazioni);

        // rimuovo il pilsante mostra di piu quando clicco
        div.style.display = 'none';
    }






 /*4*/   

setInterval(cambiaImmagineDiSfondo, 3000); //cambia l immagine di sfondo ogni 3s: SrtInterval è una funzione di sistema
let currentIndex = 0;
const immagini = [ //lista
    'url("https://storage.googleapis.com/pai-images/46a01def868249028e7a1966f03ee507.jpeg")',
    'url("https://images.nightcafe.studio/jobs/npA22punneBrt3OX3bQF/npA22punneBrt3OX3bQF--1--bm39o.jpg?tr=w-1600,c-at_max")',
    'url("https://i0.wp.com/boingboing.net/wp-content/uploads/2017/08/i-QjHC6k9-XL.jpg?resize=970%2C733")', 
    'url("https://www.nicolettaceccoli.com/wp-content/uploads/2023/07/25.jpg")'  
];

// Funzione per cambiare l'immagine di sfondo
function cambiaImmagineDiSfondo() {
    const body = document.body;
    body.style.backgroundImage = immagini[currentIndex];
    currentIndex = (currentIndex + 1) % immagini.length; // Avanza all'immagine successiva, ripartendo dall'inizio quando raggiungi la fine
}




/*5*/
const menuItems = document.querySelectorAll('.navElements[data-menu]');

menuItems.forEach(item => {
    item.addEventListener('mouseover', MouseOver);
    item.addEventListener('mouseout', MouseOut);
});

function MouseOver(event) {
    const menu = event.currentTarget.querySelector('.menu'); // Seleziona il menu associato all'elemento
    if (menu) {
        menu.style.display = 'block'; // Imposta lo stile solo quando il mouse è sopra l'elemento
    }
}

function MouseOut(event){
    const menu = event.currentTarget.querySelector('.menu'); // Seleziona il menu associato all'elemento
    if (menu) {
        menu.style.display = 'none'; // Imposta lo stile solo quando il mouse esce dall'elemento
    }
}


