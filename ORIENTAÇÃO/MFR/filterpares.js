function filtraPares(arr) {
    return arr.filter(callback);
}

function callback(item){
    return item % 2 === 0;
}

const arraymeu = [1,25, 42, 25, 31, 4, 197472];

console.log(filtraPares(arraymeu));