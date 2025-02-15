   // search: form submit reloading the page

   // step-1: set event handler
   document.getElementById('button-login').addEventListener('click', function(event){
    // step-2: prevent default behaviour (prevent reloading browser)
   event.preventDefault();
   console.log('login button clicked');

   //step-3: get the phone and pin number
   const phoneNumber = document.getElementById('phone-number').value;
   const pinNumber = document.getElementById('pin-number').value;
   console.log(phoneNumber, pinNumber);

    // step-4: validate your phone and pin
    // this is temporary. you should do like this,
    if(phoneNumber === '5' && pinNumber === '1234'){
        console.log('you are logged in.');
        window.location.href = '/home.html'
        // step-5: allow user to use the website. 
    }
    else{
        alert('wrong phone number or pin');
    }
});