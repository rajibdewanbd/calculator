const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialChars = ["%", "*", "/", "-", "+", "="];
let output = "";


const calcuate = (btnVale) => {
    display.focus();
    if (btnVale === "=" && output !== ""){
        
        output = eval(output.replace("%", "/100"))
    }else if (btnVale === "AC"){
        output = "";
    }else if (btnVale === "DEL"){
        output = output.toString().slice(0,-1);
    }else{
        if(output === "" && specialChars.includes(btnVale)) return;
        output += btnVale;
    }
    display.value = output;
};

buttons.forEach((button) =>{
   
    button.addEventListener("click", e => calcuate(e.target.dataset.value));
});