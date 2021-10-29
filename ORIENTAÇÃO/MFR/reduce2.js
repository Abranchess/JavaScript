const list = [
    {
        name: 'sabao em po',
        preco: 30
    },
    {
        name: 'ceral',
        preco: 12,
    },
];

const saldoDisp = 100;

function calculaSaldo(saldoDisp, list) {
    return list.reduce(function(prev, current, index) {
        console.log('rodada' , index + 1);
        console.log({prev});
        console.log({current});
        return prev - current.preco;
    }, saldoDisp);
}

console.log(calculaSaldo(saldoDisp, list));