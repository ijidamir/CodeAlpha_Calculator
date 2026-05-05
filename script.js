let display= document.querySelector(".display");
let clearBtn = document.getElementById("clear");
let  number = document.querySelectorAll(".numbers");
let equal = document.getElementById("equal");
let del = document.getElementById("del");


    number.forEach( function(button){
        button.addEventListener("click",function(){
            let btnValue = this.innerText ;
        
                display.value += btnValue
          });
    });

    equal.addEventListener("click",()=>{
        
        try{
            display.value= eval(display.value)
        }catch{
            display.value= "Error"
        }
    });

    clearBtn.addEventListener("click",()=>{
        display.value= ""
    });

    del.addEventListener("click",()=>{
        
        display.value = display.value.slice(0 , -1);
    });


    document.addEventListener("keydown",function(e){
        const key = e.key

        if(
            (key >=0 && key <= 9) ||
            key === "+" ||
            key === "-"  ||
            key === "*"  ||
            key === "/"  ||
            key === "'"  ||
            key === "."

        ){
            display.value += key
        }

        else if(key === "Enter"){
            try{
                display.value = eval(display.value)
            }catch{
                display.value = "Error"
            }
        }

        else if (key === "Backspace"){
           display.value = display.value.slice(0, -1)
        }

    });

