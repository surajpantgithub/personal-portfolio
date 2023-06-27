const menu_btn = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.mobile-nav');
menu_btn.addEventListener('click', function () {
  menu_btn.classList.toggle('is-active');
  mobile_menu.classList.toggle('is-active');
})


const nav=document.querySelector('.nav');
nav.addEventListener('click', function () {
  menu_btn.classList.remove('is-active');
  mobile_menu.classList.remove('is-active');
})


var typeData=new Typed(".role",{
  strings: [
    "Web Developer",
    "Programmer",
    "Coder",
  ],
  loop:true,
  typeSpeed:100,
  BackSpeed:60,
  // backDelay:1000
});


const form=document.getElementsByClassName("form");

  const user = {
    sendername: form.name,
    sendermail: form.email,
    messege: form.message,

  }
  console.log(user);
 