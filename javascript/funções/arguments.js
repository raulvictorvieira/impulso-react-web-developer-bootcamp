function findMax() {
    let max = -Infinity;

    for(let i = 0; i < arguments.length; i ++) {
        if (arguments[i] > max) {
            max = arguments[i];
        }
    }

    console.log(max);
}
findMax(1, 30, 109, 40, 5, 22, 200, 32)

