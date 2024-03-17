function solution(n, words) {
    for(let i=1; i<words.length; i++){
        if (words[i-1].slice(-1)[0]!==words[i][0]){
            return [(i%n)+1, Math.floor((i/n)+1)];
        }
        for(let j=0; j<i; j++){
            if (words[j]===words[i]){
                return [(i%n)+1, Math.floor((i/n)+1)];
            }
        }
    }

    return [0,0];
}