function gcd(a, b){
    if (a%b===0){
        return b;
    }
    else{
        return gcd(b,a%b);
    };
};

function lcm(a,b){
    return (a*b)/gcd(a,b);
}

function solution(arr) {
    var answer=arr[0];
    for(let i=1; i<arr.length; i++){
        answer=lcm(answer, arr[i]);
        console.log('답', answer);
    }
    return answer;
}
