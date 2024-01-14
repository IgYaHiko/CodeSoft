let string = "";
let input = document.querySelector(".input input");
let buttons = document.querySelectorAll(".row button");




buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
        let target = event.target.innerHTML;
        if(target === '=') {
           string = eval(string);
           input.value = string;

         } else if(target === 'c') {
                 string = "";
                 input.value = string;
        } else{
            string = string + event.target.innerHTML;
            input.value = string;
            
        } 
          
       
        
       
    });
});