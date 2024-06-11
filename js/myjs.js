// variabili dei nodi contenitori
let contLista = document.querySelector('.containerElement')
let contIcon = document.querySelector('.containerClose')

// chiedo all'utente la lista della spesa
let i = 0;
let arrSpesaInput = []
let spesaDefault = [   
    'carciofi',
    'altri carciofi',
    'carote',
    'pane',
    'uova',
    'acqua'
]
let inputUtente;
while(i < 2 ){
    let input = prompt("scrivi la spesa o scrivi 'spesa default'")
    if(input !== 'spesa default'){
        arrSpesaInput.push(input)
        i++
    }else{
        inputUtente = input
        break
    }
}

console.log(inputUtente)

// crea la lista della spesa
i = 0;
if(inputUtente === 'spesa default'){

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
        // appendo i a li
        li_contIcon.append(icon)
        // appenso elemento lista a ul
        contLista.append(elementSpesa)
        // appendo li con la x al contenitore
        contIcon.append(li_contIcon)
        i++
    }
}
