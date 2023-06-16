let num ="abcadeecfb"
let map = new Map();

for(let i=0; i<num.length;i++)
{
{
 map.set(word[i],Number(map.get(word[i]))+1)
}
// else {
//  map.set(word[i],1)
// }
}

for(const [key, value] of map){
 console.log(key +"=" + value);
}