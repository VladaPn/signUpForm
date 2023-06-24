function validation(){

let email = document.getElementById('mejl').value;
console.log(email);
if(email.indexOf("@")>0 && email.indexOf(".com")>0){
    document.getElementById('cont').style.display="none";
    document.getElementById('confirm').style.display="block";
    document.getElementById('mail-span').innerText=email;
    document.getElementById('error').style.display="none";
}else{
    document.getElementById('mejl').style.background="hsl(4, 100%, 87%)";
    document.getElementById('mejl').style.outline="1px solid hsl(4, 100%, 67%)";
    document.getElementById('error').style.display="inline";
}


}
function resetButton(){
    document.getElementById('cont').style.display="block";
    document.getElementById('confirm').style.display="none";
    document.getElementById('mejl').style.background="white";
    document.getElementById('mejl').style.border="1px solid grey";
    document.getElementById('mejl').style.outline="1px solid black";
    document.getElementById('mejl').value="";
}