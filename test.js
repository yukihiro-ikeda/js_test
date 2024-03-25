// color_list = ['red', 'blue', 'green', 'brack']
// color_list.forEach(function(color) {
//     print(color)
// })
// array1 = [...Array(10)].map((_,i)=>i)
// sakujo = Math.floor(Math.random() * 10)
// // splice (配列から削除)
// tmp1 = array1.splice(sakujo,1)

// act = []
// tmp = []
// target = []

// for(i = 0;i <= 3;i++){
//     act.push(i)
// }
// console.log(array1,sakujo)

// for(i = 10,j= 0;i >= 0,j <= 10;i--,j++){
//     console.log(i,j)
// }

// 重複のないランダムな3桁の配列
oi = [...Array(10)].map((_,i)=>i)
len = oi.length
for(i = len;i > 1;i--){
k = Math.floor(Math.random() * i);
    [oi[k],oi[i - 1]] = [oi[i - 1],oi[k]]
}

// console.log(oi)

new_Array = []
for(i = 0;i <= 2;i++){
    kk =  Math.floor(Math.random() * 10 - i);
    tmp = oi.splice(kk,1);
    new_Array.push(tmp)
}
// console.log('console.log(kk'+kk+')')
// console.log('console.log(tmp'+tmp+')')
// console.log('console.log(oi'+oi+')')
// console.log('console.log(nA'+new_Array+')')

// new_Array.forEach((num)=>console.log(num))
// ji = []
// for(i=0;i<3;i++){
//     ji.push(new_Array[i])
// }
console.log(new_Array)


// String(Math.floor(Math.random() * 1000)).split('')

// 重複のないランダムな文字列

// array = [1, 2, 3, 4, 5];
// for (i = array.length; 1 < i; i--) {
// k = Math.floor(Math.random() * i);
// [array[k], array[i - 1]] = [array[i - 1], array[k]];
// }

