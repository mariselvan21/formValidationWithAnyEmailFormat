var button=document.getElementById('btn');
button.addEventListener('click',()=>{
    emailvalidation();
    passwordValidation();
   
    
})
function emailvalidation(){
    var email=document.getElementById('email');
    var emailValue=email.value;
    // console.log(emailValue);
    if(emailValue.includes('@')){
        // console.log(emailValue);
        var splitMail=emailValue.split('@');
        if(splitMail[0].length>=5){
            // console.log('ok');
            if((splitMail[1].includes('.'))&&((splitMail[1].includes('com'))||(splitMail[1].includes('co')))){
                var y=splitMail[1].split('.');
                // console.log(y);
                if((y[1]=='com')||(y[1]=='co')){
                    alert('Valid Email');
                }
                else{
                    alert('Not Valid Email')
                }
            }
            else{
                alert('Not Valid Email')   
            }

        }
        else{
            alert('Not  Valid Mail');
        }
        
    }
    else{
        alert('NOt Valid Email');
    }
    
}

function passwordValidation(){
    //Dought
    var password=document.getElementById('password');
    var passwordValue=password.value;
    // console.log(passwordValue);
    var numbers=["1","2","3","4","5","6","7","8","9","0"];
    for(i=0;i<passwordValue.length;i++){
        if(!numbers.includes(passwordValue[i])){
            alert('Password Contain Only Numbers ')
            
        }
        else{
            alert('Valid Password')
        }
        
    }
    
    
}