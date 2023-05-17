
let arr = [1, 0, 6, 22]
let min = arr[0];
function minMax(arr){
    for(let i = 0; i<arr.length;i++){
        if (min < arr[i]){
            min = arr[i];
        }
        
    }
    return [min];

}
console.log (min)