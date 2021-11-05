function validaArray (arr, num) {
    
    try{
        if(!arr && !num) throw ReferenceError('Envie os parâmetros')

        if(typeof arr !== 'object') throw TypeError('Array precisa ser do tipo object')

        if(typeof num !== 'number') throw TypeError('Num precisa ser do tipo number')

        if(arr.length !== num) throw RangeError('Tamanho inválido')

        return arr;
    }
    catch(e) {
        if(e instanceof ReferenceError) {
            console.log('Este erro é um ReferenceError!');
            console.log(e.name);
            console.log(e.stack);
            console.log(e.message);
        } else if(e instanceof TypeError) {
            console.log('Este erro é um TypeError!');
            console.log(e.name);
            console.log(e.stack);
            console.log(e.message);
        } else if(e instanceof RangeError) {
            console.log('Este erro é um RangeError!');
            console.log(e.name);
            console.log(e.stack);
            console.log(e.message);
        } else {
            console.log(`Tipo de erro não esperado: ${e}`);
        }
    }
}

console.log(validaArray(5, 5));