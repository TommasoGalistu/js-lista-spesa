// variabile container principale
let contPrincipale = document.querySelector('.contLista');
// variabili dei nodi contenitori 
let contLista = document.querySelector('.containerElement');
let contIcon = document.querySelector('.containerClose');

// chiedo all'utente la lista della spesa
let i = 0;
let arrSpesaInput = [];
let spesaDefault = [   
    'carciofi',
    'altri carciofi',
    'carote',
    'pane',
    'uova',
    'acqua'
];

// ciclo per chiedere all' utente di inserire la spesa o spesa default
let inputUtente;
while(i < 5){
    let input = prompt("scrivi la spesa o scrivi 'spesa default'")
    if(input !== 'spesa default'){
        arrSpesaInput.push(input)
        i++
    }else{
        inputUtente = input
        break
    }
}



// crea la lista della spesa
i = 0;
if(inputUtente === 'spesa default'){

    // se seleziono la spesa defult
    while(i < spesaDefault.length -1){
        // creo elementi
        let elementSpesa = document.createElement('li')
        let li_contIcon = document.createElement('li')
        let icon = document.createElement('i')

        // appendo testo a element spesa
        elementSpesa.append(spesaDefault[i])

        // aggiungo classe a elemento i
        icon.classList.add('fa-solid')
        icon.classList.add('fa-x')
        elementSpesa.classList.add('listaSpesa')
        // appendo i a li
        li_contIcon.append(icon)
        // appenso elemento lista a ul
        contLista.append(elementSpesa)
        // appendo li con la x al contenitore
        contIcon.append(li_contIcon)
        i++
    }

}else{
    // se invece scrivo personalmente la spesa
    while(i < arrSpesaInput.length){
        // creo elementi
        let elementSpesa = document.createElement('li')
        let li_contIcon = document.createElement('li')
        let icon = document.createElement('i')

        // appendo testo a element spesa
        elementSpesa.append(arrSpesaInput[i])

        // aggiungo classe a elemento i
        icon.classList.add('fa-solid')
        icon.classList.add('fa-x')
        elementSpesa.classList.add('listaSpesa')
        // appendo i a li
        li_contIcon.append(icon)
        // appenso elemento lista a ul
        contLista.append(elementSpesa)
        // appendo li con la x al contenitore
        contIcon.append(li_contIcon)
        i++
        console.log(elementSpesa)
    }
}

// creo frase per far capire la funzionalità
let frase = document.createElement('h2');
frase.append('PROVA A CLICCARE SULLA X DI QUALCHE ELEMENTO');
contPrincipale.append(frase);

// creo delle variabili con la lista degli elementi da eliminare
let eliminate = document.getElementsByClassName('fa-x');
let lista = document.getElementsByClassName('listaSpesa');

// creo un evento per eliminare con il click gli elementi in lista
contIcon.addEventListener('click', (event) =>{
    // trovo la posizione dell'elemento cliccato
    let posizione = Array.from(eliminate).indexOf(event.target)

    // gli aggiungo la classe elimina
    eliminate[posizione].classList.add('close')
    lista[posizione].classList.add('close')
});

