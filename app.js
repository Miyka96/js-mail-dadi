const emailInput = document.getElementById('email')
const emailSubmitButton = document.getElementById('submit')

const emailWhiteList = ["pierino@pierino.it", "gattino@gattino.it", "nonho@fantasia.it", "mipiaccionoitreni@hotmail.it"];

emailSubmitButton.addEventListener('click', function(){
    const typedEmail = (emailInput.value);

    let check = false;

    for (i=0 ; i< emailWhiteList.length ; i++) {
        let emailElement = emailWhiteList [i];

        if ( typedEmail===emailElement){
            check = true;
        }
    }

    if (check == true){
        alert ('top')
    }
    else{
        alert ('no')
    }

})





