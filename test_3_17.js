sense = [...Array(10)].map((_,i)=>i);
new_sense = []
for(i=sense.length;i>=0;i--){
  k = Math.floor(Math.random() * i);
  tmp = sense.splice(k,1);
  new_sense.push(tmp);
}

newnew = []
for(i=0;i<=2;i++){
  newnew.push(new_sense[i][0])
}

console.log(newnew)