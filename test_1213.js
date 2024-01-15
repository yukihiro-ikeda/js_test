// num = [1,2,3,4,5]
// console.log(num)
// for(left = 1; left <= num.length / 2; left++){
//   right = (num.length - left) + 1
//   tmp = right - 1
//   num[right - 1] = num[left - 1]
//   num[left - 1] = tmp + 1
// }
// console.log(num)
// console.log(num.length)

// num = [1,2,3,4,5,6,7,8,9]
// print(num)
// for(left = 1; left <= num.length / 2; left++){
//   right = (num.length - left) + 1
//   tmp = right - 1
//   num[right - 1] = num[left - 1]
//   num[left - 1] = tmp + 1
// }
// print(num)
// print(num.length)


ok = [0,1,2]
// print(ok)

for(i = 0;i <= ok.length - 1; i ++){
  if(ok[i] == ok.length - 1){
    for(i = 1;i <= ok.length -1; i++){
      print(ok[i])
    }
  }
  print(ok[i])
}
ok.push(9,12)
print(ok)

no = [0,1,2,3,4,5,6,7,8,9]
for(i = 0;i <= 9;i++){
  for(j = 0;j <= 9;j = j + 5){
    print(no[j])
  }
  print(no[i])
}