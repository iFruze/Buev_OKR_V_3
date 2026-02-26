function task3(arr){
    return arr.sort((a, b) => a.score - b.score)[arr.length - 1].name
}

let res = task3([
    {name: 'Участник1', score: 10},
    {name: 'Участник2', score: 100},
    {name: 'Участник3', score: 20},
    {name: 'Участник4', score: 50},
    {name: 'Участник5', score: 0}
])

console.log(res)
