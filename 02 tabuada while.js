let contador = 1
let tabuada = 1

while (tabuada < 10){
    console.log('\nTabuada do ', tabuada + '\n')
    contador = 1
    while(contador <= 10){
        console.log( tabuada + ' X ' + contador + ' = ' + tabuada * contador)
        contador = contador + 1
    }
    tabuada++
}
