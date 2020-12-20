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

//Задание 6
let phone = {
    'brand': NaN,
    'model': NaN,
    'resolution': NaN,
    'color': NaN
}
let user = {
    'name': 'Liza',
    'phone': NaN
}
for (key in phone){
    phone[key] = prompt("Введите " + key + ":", " " )
}
user['phone'] = phone
console.log(user);

//Задание 7
let date_till = new Date()
let date_from = new Date()
date_from.setDate(date_till.getDate()-365)
let date = {
    'date_till': date_till,
    'date_from': date_from
}
date_str = prompt('eneter date for search: ', 'yyyy-mm-dd')
new_date = new Date(date_str)
if (new_date>date["date_from"]&&new_date<date["date_till"]){
    alert('date in range')
}
console.log(date)

//Задание 8
let arr=[]
let sum = 0
for( i=0; i<4;i++){
    arr.push(prompt('Введите что-нибудь', ''))

}
for (i=0; i<4; i++){
    if ( !isNaN(arr[i])){
        sum += +arr[i]
    }
}
console.log (sum)

//Задание 9
let mult_table = []
let arr = []
for (i=0; i<10; i++){
    for(j=0;j<10; j++){
        let inner_i = i+1
        let inner_j = j+1
        arr.push(inner_i +'x'+ inner_j+ '=' + (inner_i*inner_j))
    }
    mult_table.push(arr)
    arr = []
}
console.log(mult_table)

//Задание 10
let html = {
    'img':NaN
}
let body = {
    'src': "https://www.google.com.ua/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
    'alt': "",
    'style':"border: 1px solid #ccc",
    'width': "200"
}
html['img'] = body
console.log(html)

