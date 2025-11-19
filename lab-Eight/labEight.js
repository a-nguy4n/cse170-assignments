
// --------- Starter 
function fakeUsernameCheck(name) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const taken = ["admin", "test", "guest"];
      const available = 
            !taken.includes(name.toLowerCase());
      resolve(available);
    }, 2000); // Waits 2 seconds to simulate a backend call
  });
}
// --------- End Starter 


function showChecking(){
    const username = document.getElementById("username");
    const warningField = document.getElementById("warning");
    
    username.addEventListener("input", function(){
        warningField.classList.remove("hidden");
        warningField.classList.add("checking");
        warningField.textContent = "Checking availability...";
    })
}


function showWarningUnavailable(){

  const username = document.getElementById("username");
  const input = username.value.trim();
  const warningField = document.getElementById("warning");
  const nextSteps = document.getElementById("next-steps");
  
  fakeUsernameCheck(input).then((available) => {
    warningField.classList.remove("checking");
   
    if(available === false){
        warningField.classList.remove("hidden");
        warningField.textContent = "This username is not available";
        nextSteps.classList.add("hidden");
    }

    else{
        warningField.classList.add("hidden");
        warningField.textContent = "";
        nextSteps.classList.remove("hidden");
    }
  });
}


function showWarningEmpty() {
    const warningField = document.getElementById("warning");
    warningField.classList.remove("hidden");
    warningField.classList.remove("checking");
    warningField.textContent = "You can use letters, numbers, and symbols";
}



window.addEventListener("DOMContentLoaded", () => {
    const username = document.getElementById("username");
    const warningField = document.getElementById("warning");
    const nextSteps = document.getElementById("next-steps");

    let isUserTyping = false;
    showChecking();
    username.addEventListener("input", function(){

        const input = username.value.trim();

        if(input.length === 0){                 // when user deleted inputted username 
            nextSteps.classList.add("hidden"); 

            if(isUserTyping === true){
                showWarningEmpty()
            }
            else{
                warningField.classList.add("hidden");
                warningField.textContent = "";
            }
        }

        isUserTyping = true;
            showWarningUnavailable();
    });

   showWarningUnavailable();
});