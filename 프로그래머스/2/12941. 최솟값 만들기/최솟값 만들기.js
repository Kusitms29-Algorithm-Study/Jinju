function solution(A,B){
    let arr1 = A.sort((a, b) => a - b);
    let arr2 = B.sort((a, b) => b - a);

    var answer=0;
    for(let i=0; i<arr1.length; i++){
        answer+=arr1[i]*arr2[i];
    }

    return answer;
}