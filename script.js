let signUp = document.getElementById('signUp');
let signupValue = 0;
let remove = 0
signUp.addEventListener("click" , () =>{
if (signupValue == 0 ,  remove == 0) {
    signupValue = 1
    remove = 1;
    let heroSetion = document.querySelector(".herosetion")
    const form = document.createElement("div");
    form.classList.add("signupForm");
form.innerHTML = `<div class="remove">
<img src="cross-removebg-preview.png" alt="" class = "cross">
</div>
<div class="signupTitle">
  <p>Sign Up</p>
</div>
<div class="email">
<input type="email" placeholder="Enter your email" class="signupDetails" id="userEmail">
</div>
<div class="password">
<input type="password" placeholder="Enter your password" class="signupDetails" id="userPass">
</div>
<div class="submit">
<button type="button" class="submitButton">Sign Up</button>
</div>
<div class="forgot">
<a href="" class="forgotPass">Forgot password?</a>
</div>
`


heroSetion.appendChild(form);

let cross = document.querySelector(".cross")
cross.addEventListener("click" , () =>{

    form.classList.remove("signupForm");

  
  signupValue = 0;
  remove = 0;


})
}

})

