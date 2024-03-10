function solution(s) {
    var n = s.split(' ');
    var answer='';
    
    for(let i=0; i<n.length; i++){
        let str='';
        for(let j=0; j<n[i].length; j++){
            if(j%2==0){
                let k=n[i][j].toUpperCase();
                str+=k;
            }
            else {
                let k=n[i][j].toLowerCase();
                str+=k;
            }
        }
        answer+=str+' ';
    }
    
    return answer.slice(0,-1);
}