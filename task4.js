function task4(numbers){
    const grouped = numbers.reduce((acc, num) => {
    const key = num % 3   
    if (!acc[key]) acc[key] = []
    acc[key].push(num)       
    return acc
    }, {});

    return grouped
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

console.log(task4(numbers))
