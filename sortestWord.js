// Task -2:
// Find the friend with the smallest name.
// const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

const names = ['rahim', 'robin', 'rafi', 'ron', 'rashed']
function sortestName(names){
    let sortName = names [0];
    for(let name of names){
        if(name.length < sortName.length){
            sortName = name;
        }
    }
    return sortName;
}

const result = sortestName(names);
console.log(result);