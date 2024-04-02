const arr = [23, 1, 5, 3, 12, 4, 9, 81, 7, 11, 22, 31, 6]

function FindMiNandMax(arr) {

function FindMaxNumber(arr) { 
       let max = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0 && arr[i] > max) {
            max = arr[i];
        }

    }
    return max;
}



    function FindMinNumber(arr) {
            
    let min = Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0 && arr[i] < min) {
            min = arr[i];
        }

    }
    return min;
    }



    const max = FindMaxNumber(arr);
    const min = FindMinNumber(arr);



    for (let i = 0; i < arr.length; i++){
        if (arr[i]%2===0 && arr[i]===max) {
            arr[i]=min;
        }
        else if (arr[i]%2!==0 && arr[i]===min){
        arr[i]=max;
        } 
    } 
    return arr;
   
}



console.log(FindMiNandMax(arr));

