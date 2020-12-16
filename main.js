//Задание 1
let arr=[1, 2, 3, "a", "b", "c", "4", "5", "6"];
let sum=0
for(let i=0; i<arr.length;i++){
    if( isNaN(arr[i])){
        continue
    }
    else{
        sum += +arr[i]}
}
alert(sum);

//Задание 2
let arr=[]
for( i=0; i<4;i++){
    let n = Math.random() * 10;
    n=n.toFixed(2)
    arr[i]=n
}
for(i=0; i<arr.length;i++){
    console.log(arr[i]**5)
}
//Задание 3
let arr=["AngularJS", "jQuery"];
arr.unshift("Backbone.js");
arr.push ("ReactJS","Vue.js’");
arr.splice(1, 0, "CommonJS");

index = arr.indexOf("jQuery")
removed = arr.splice(index, 1)
alert(removed+"Это здесь лишнее")

//Задание 4
let string="Как однажды Жак звонарь сломал фонарь головой";
arr=string.split(" ");
index = arr.indexOf("однажды")
removed = arr.splice(1,1)
rem=arr.splice(3,0,removed[0])
console.log(arr.join(' '));

//Задание 5
let person = {'name':'Leo', 'age':22, 'profession':'JS dev'}
let check_key= prompt ("Введите значение", "")
if (check_key in person){
    alert(person[check_key]);
}
else{
    let new_value=prompt ("Cвойство не обнаружено, введите для добавления", "")
    person[check_key] = new_value
}