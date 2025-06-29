let arr1=[1,2,3]
let arr2=[2,4,5]
function Unique(arr1, arr2) {
    const result = [];
    for (let num of arr1) {
        if (!arr2.includes(num)){
            result.push(num);
        }
    }
    for (let num of arr2) {
        if (!arr1.includes(num)){
            result.push(num);
        }
    }
    return result;
}
console.log(Unique(arr1,arr2));  