const calculateTemp = ()=>{

const tempNum = document.getElementById('temp').value;
const tempSelected = document.getElementById('temp_diff');
const temp_diff_value = temp_diff.options[tempSelected.selectedIndex].value; 

const celToFah =(cel)=>{
    let fahrenheit = Math.round((cel*9/5)+32);
    return fahrenheit;
}
const fahToCel = (fah)=>{
    let celsius = Math.round((fah-32)*5/9);
    return celsius;
}
let result;

if(temp_diff_value == 'cel'){
    result = celToFah(tempNum);
    document.getElementById('resultBox').innerHTML =`${result} Fahrenheit`;
}
else{
    result = fahToCel(tempNum);
    document.getElementById('resultBox').innerHTML =`${result} Celcius`;
}

}
let x = document.getElementById('reset')
x.onclick=()=>{
    let Y = document.getElementById('resultBox')
    Y.innerHTML = " ";
    let X = document.getElementById('box')
    X.innerHTML = " "
    
}
document.getElementById("btn").addEventListener('click',()=>{
    let a = document.getElementById('box')
    a.innerHTML = "Tempereture Successfully Converted !!!"
    
 
})





