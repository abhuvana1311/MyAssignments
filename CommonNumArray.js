let arr = [23,45,65,78,23,90]

for (let i=0; i <=arr.length -1; i++)
{
    for (let j=i+1; j <=arr.length-1; j++)
    {
        if (arr[i] == arr[j])
        {
            console.log( " Print the common number : ",  arr[i])
    }
}
} console.log(arr)
