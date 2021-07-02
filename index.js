var te = document.getElementById("te");
const tex=document.getElementById("tex");
const te2=document.getElementById("te2");
const te3=document.getElementById("te3");
function errorFonction(){
    let x=document.getElementById("adi").validity.valueMissing;
        if(x==true){
            te.style.display = "block";
        } else {
            te.style.display = "none";
        }
        let y=document.getElementById("sf").validity.valueMissing;
        if(y==true){
            tex.style.display = "block";
        } else {
            tex.style.display = "none";
        }
        let z=document.getElementById("eMail").validity.valueMissing;
        if(z==true){
            te2.style.display = "block";
        } else {
            te2.style.display = "none";
        }
        let k=document.getElementById("check").validity.valueMissing;
        if(k==true){
            te3.style.display = "block";
        } else {
            te3.style.display = "none";
        }  
}
