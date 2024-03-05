function solution(arr) {
    if (arr.length === 1) return [-1];
    
    var minIndex=0;
    
    for(let i=0; i<arr.length; i++){
        if (arr[i]<arr[minIndex]){
            minIndex=i;
        }
    };
    
    arr.splice(minIndex, 1);
    return arr;
}