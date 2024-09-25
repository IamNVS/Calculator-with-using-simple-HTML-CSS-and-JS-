function turnOff(){
    var x=document.getElementById("input")
    x.style.visibility="hidden"
}
function turnOn(){
    var x=document.getElementById("input")
    x.style.visibility="visible"
    
}
function getvalue(num){
    var x=document.getElementById("input")
    x.value+=num
}
function clearone(){
    var x=document.getElementById("input")
    x.value=x.value.slice(0,-1)
}
function clearall(){
    var x=document.getElementById("input")
    x.value=""
}
function calculate(){
    try {
        var x=document.getElementById("input")
        x.value=eval(x.value)
    } catch (error) {
        x.value = x.value.innerHtml="Error"
    }
}