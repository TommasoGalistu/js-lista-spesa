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

while(i < 2 ){
    let input = prompt("scrivi la spesa o scrivi 'spesa default'")
    if(input !== 'spesa default'){
        arrSpesaInput.push(input)
        i++
    }else{
        break
    }
}

console.log(arrSpesaInput)

// crea la lista della spesa
// i = 0;
// if(input === 'spesa default'){
//     while(i < spesaDefault.length -1){
//         console.log(spesaDefault[i])
//     }
// }
