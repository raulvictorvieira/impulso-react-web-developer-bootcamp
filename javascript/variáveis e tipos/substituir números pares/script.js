function substituirPares(arr) {
    if(!arr.length || !arr) {
        console.log('Sem conteúdo no nosso array...');
    }else{
        for(let i = 0; i < arr.length; i++) {
            if(arr[i] === 0) {
                console.log(`O índice ${i} já é 0!`);
            }else if(arr[i] % 2 === 0) {
                console.log(`Substituindo ${arr[i]} por 0...`);
                arr[i] = 0;
            }
        }
        console.log(arr);
    }
}

let arr = [1, 3, 4, 6, 80, 33, 23, 90];

substituirPares(arr)