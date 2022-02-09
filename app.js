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


// -------------------BOTTONI, SWITCH, AIUTO----------------

// const mailButton = document.querySelector('.button-mail');
// const gameButton= document.querySelector('.button-game')
// const firstPage= document.querySelector('.first-page');
// const secondPage= document.querySelector('.second-page');

// mailButton.addEventListener('click', function(){
//     firstPage.classList.toggle('active');
// })

// gameButton.addEventListener('click' , function(){
//     secondPage.classList.toggle('active');
// })

// DADI-----------------

const userWrapper = document.querySelector('.number-user-wrapper');
const computerWrapper = document.querySelector('.number-computer-wrapper')

const numberGeneratorComputer = Math.floor(Math.random() * 6) + 1;
const numberGeneratorUser = Math.floor(Math.random() * 6) + 1;
const results = document.getElementById('risultati');

userWrapper.append(numberGeneratorUser);
computerWrapper.append(numberGeneratorComputer);

if(numberGeneratorUser>numberGeneratorComputer){
    results.append('hai vinto')
}
else if (numberGeneratorUser<numberGeneratorComputer){
    results.append('hai perso')
}
else if (numberGeneratorUser===numberGeneratorComputer){
    results.append('pareggio')
}

