//soluçã 1

function palindromoVerify(string) {
    if(!string){
        console.log('string not exitent!');
    }else{
        if(string.split('').reverse().join('') === string){
            console.log('É um palíndromo!');
        }else{
            console.log('Não é um palíndromo!');
        }
    }
}

palindromoVerify('romametemamor')


//soluão 2

function palindromoVerifyTwo(string){
    if(!string) return 'string not exitent!';

    for(let i = 0; i < string.length / 2; i++) {
        if(string[i] !== string[string.length - 1 - i]){
            return false;
        }
    }

    return true;
}