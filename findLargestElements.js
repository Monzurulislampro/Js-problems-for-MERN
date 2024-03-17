function findLargestElements (arr){
if (arr.length === 0){
    return "Array in empty"
}
let largest = arr[0]

for(let i = 1; i< arr.length; i++){
    if( arr[i]> largest){
        largest = arr[i];
    }
}
return largest
}
const array = [10,4,56,67,8,90,54,21];
console.log(findLargestElements(array));