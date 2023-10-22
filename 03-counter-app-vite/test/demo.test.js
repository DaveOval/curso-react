test('Esta prueba no debe de fallar', () =>{
    if( 0 === 0){
        throw new Error("No puede dividir entre 0");
    }
})