let btn = document.getElementById('get_code_num');
let true_code = [];
alert('Hello my friend , Default mobile number for testing => 09123456789');
btn.addEventListener('click' , function(){
if(document.getElementById('phone_number').value == '09123456789'){
    document.getElementById('alert').style.top = '-120px';
    document.getElementById('get_code').style.display = ('block');
request();
let z = document.getElementById('input_code').value;

if(true_code.length == 0){
for(let a of z){
    if(a!='-'){
        true_code.push(a);
    }
}}
if(Number(true_code[0] + true_code[1] + true_code[2] + true_code[3] + true_code[4]) == code){
    console.log(`hello 09123456789`);
}
}
else{
    document.getElementById('alert').style.top = 0;
    document.getElementById('get_code').style.display = ('none');
}
} )
let code = Math.floor(Math.random() * 100000);
function request(){
    console.log(code);
}

let input = document.querySelector('#input_code');

input.addEventListener('keypress',function(event){
    var charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      document.getElementById('alert').style.top = 0;
    }else{
    if(input.value.length > 0){
    document.getElementById('alert').style.top = '-120px';
    input.value += '-';
    }}
})
input.addEventListener('keydown' , function(){

})

//alireza cheraghliei