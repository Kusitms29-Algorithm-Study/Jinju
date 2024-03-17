function solution(k, tangerine) {
    var num = Array.from({length: 10000001}, () => 0);
    
    for(let i=0; i<tangerine.length; i++){
        num[tangerine[i]]++;
    }
    var num=num.sort((a,b) => b-a);
    for(let j=0; num[j]!==0; j++){
        k-=num[j];
        if(k<=0){
            return j+1;
        }
    }
}