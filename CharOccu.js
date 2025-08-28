let FName = " Bhuvana"
let targetedletter = 'a'
let count = 0
let counter = 0

for (let i=0; i<=FName.length-1; i++)
{
    if (FName.charAt(i)==targetedletter)
    {
        count++
    } else {
        counter++
        console.log(FName.charAt(i))
}
}
console.log(`The Count of Character $ {targeted.letter} in $ {targetedName} is ${count}`)
