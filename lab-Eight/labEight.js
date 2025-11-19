// You MUST use the function below to check if the username input is available
// Do not edit this function
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


// Starter code: Global Vars 
let form = null;
let username = null;
let warningField = null;
let nextSteps = null;


function showChecking(){
    warningField.classList.remove("hidden");
    warningField.classList.add("checking");
    warningField.innerHTML = "Checking availability...";
}


function showWarningUnavailable() {
    warningField.classList.remove("hidden");
    warningField.classList.remove("checking");
    warningField.textContent = "This username is not available";
}

function showWarningEmpty() {
    warningField.classList.remove("hidden");
    warningField.classList.remove("checking");
    warningField.textContent = "You can use letters, numbers, and symbols";
}

// Initially, the next-steps form (which collects additional information only if the user name is available) should be invisible. You should decide when it is made visible (and how). 
function showNextSteps(){
    nextSteps.classList.remove("hidden");
}

function hideNextSteps(){
    nextSteps.classList.add("hidden");
}

function hideWarning() {
  // Any warnings should be removed as soon as they are not needed (i.e., if the warning does not apply).
  warningField.classList.add("hidden");
  warningField.classList.remove("checking");
  warningField.textContent = "";
}

function checkEmpty(){
  let name = username.value;
  // Checks that the user entered something
  // If not, it should show the appropriate warning
  if(name.length === 0){
    showWarningEmpty();
    hideNextSteps();
    return true;
  }
  return false;
};

// Create an function that uses the fakeUserNameCheck function to see if the username the person typed is available (We provide that line). If it is, show the rest of the form (the next steps) for the user to complete, otherwise provide a warning that it is unavailable.
async function checkName() {
    let name = username.value;
    let available = await fakeUsernameCheck(name);
    // this will return "True" if the name is available, "False" otherwise.
    if(available){
        hideWarning();
        showNextSteps();
    }
    else{
        showWarningUnavailable();
        hideNextSteps();
    }
}

// Add any event listeners here
window.addEventListener("DOMContentLoaded", () => {
    
    // giving the global vars values 
    form = document.getElementById("username-form");
    username = document.getElementById("username");
    warningField = document.getElementById("warning");
    nextSteps = document.getElementById("next-steps");

    hideWarning();
    hideNextSteps();

    username.addEventListener("input", () => {
        
        if(checkEmpty()){
            return;
        }

        showChecking();
        checkName();
    });
});