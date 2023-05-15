const campos = document.querySelectorAll ('.required')
const spans = document.querySelectorAll ('.span-required')
const form = document.getElementById ('form')

form.addEventListener('submit',(event) => {
    event.preventDefault();
    validatename();
    validatesobrenome ();
    validatecidade();

});


function error (index){
      
    spans[index].style.display = 'block'
    campos[index].style.border = '2px solid red'
    
}
 function correto (index){
  
    spans[index].style.display = 'none' 
    campos[index].style.border = '2px solid green'

 }

function validatename(){

    
    if (campos[0].value.length < 3){
    
        error(0)
    }else{
        correto(0)
    }

}

function validatesobrenome (){
    if(campos[1].value.length <= 3){
        error(1)
    }else{
        correto(1)
    }

}
function validatecidade(){
    if(campos[2].value.length <=3){
        error(2)
    }else{
        correto(2)
    }
}
