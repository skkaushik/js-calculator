

(function(){
let screen=document.querySelector('.mainscreen');
let button=document.querySelectorAll('.btn');
let clear=document.querySelector('.reset');
let equal=document.querySelector('.equal');

button.forEach(function(button){
    button.addEventListener('click',function(e){
   
        let value=e.target.dataset.num;
        if (value==='='){
            let answer= eval(screen.value);
            screen.value=answer;
            
        }
        else{
            screen.value+=value;
        }
       
        
    })
});

// equal.addEventListener("click",function(e){
 
//     if (screen.value === ""){
//         screen.value="Please enter";

//     }
//     else {
//        let answer= eval(screen.value);
//        console.log(answer)
//        screen.value=answer
//     }
// })

clear.addEventListener('click',function(e){
    screen.value="";
})

})();

