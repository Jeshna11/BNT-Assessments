let arr1=[1,2,3]
arr2=[2,4,5]
function Unique(arr1, arr2) {
    const set1 = new Set(arr1);
    const set2 = new Set(arr2);
    const result = [];
    for (let num of set1) {
        if (!set2.has(num)) result.push(num);
    }
    for (let num of set2) {
        if (!set1.has(num)) result.push(num);
    }
    return result;
}
console.log(Unique(arr1,arr2));  