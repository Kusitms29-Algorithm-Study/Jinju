function solution(n) {
    var answer = 1;
    for(let i=1.5; i<n; i++){
        if(n%i === 0){
            answer++;
        }
    }
    return answer;
}