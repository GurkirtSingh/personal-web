
const submit_button = document.getElementById('submitBtn')
const contact_form = document.getElementById('contact-form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const message = document.getElementById('message')

if(contact_form.addEventListener){
    contact_form.addEventListener('onsubmit', (e)=>{
        e.preventDefault();
        console.log("Hello")
        return false;
    })
}