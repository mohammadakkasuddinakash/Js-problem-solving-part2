// ### Task -1: 
// Find the lowest number in the array below.
// `const heights2 = [167, 190, 120, 165, 137];`


const heights2 = [167, 190, 120, 165, 137];

function lowestNumber(heights2){
    let low = heights2 [0];
    for(let number of heights2){
        if(number <  low){
            low = number;
        }
    }
    return low;
}

const result = lowestNumber(heights2);
console.log(result);