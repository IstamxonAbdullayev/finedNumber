var elFindNumberForm = document.querySelector(".js-form-find");
var elFindNumberInput = elFindNumberForm.querySelector(".js-input-find");
var elAttemptCount = document.querySelector(".js-attempt-count");
var elResultText = document.querySelector(".js-result-number");
var elFindBtn = document.querySelector(".js-find-btn");

var randomNumber = Math.floor(Math.random() * 100);

console.log(randomNumber);

var maxAttemptsNumber = 6;

elAttemptCount.textContent = `Urinishlar soni ${maxAttemptsNumber}`;

elFindNumberForm.addEventListener("submit", function(evt){
  evt.preventDefault();

  var elInputValue = Number(elFindNumberInput.value.trim());
  maxAttemptsNumber--;

  elAttemptCount.textContent = `Urinishlar soni ${maxAttemptsNumber}`;

  if(elInputValue > randomNumber){
    elResultText.textContent = "Kiritgan raqamingiz ehtiyoriy sondan katta";
    elResultText.classList.add("alert-danger");
  }else if(elInputValue < randomNumber){
    elResultText.textContent = "Kiritgan raqamingiz ehtiyoriy sondan kichik";
    elResultText.classList.remove("alert-danger");
    elResultText.classList.add("alert-warning");
  }else{
    elResultText.textContent = "Uraaaaa , topdingiz !!!";
    elResultText.classList.remove("alert-danger");
    elResultText.classList.remove("alert-warning");
    elResultText.classList.add("alert-success");
  }


  if(maxAttemptsNumber == 0){
    elFindNumberInput.disabled = true;
    elFindBtn.setAttribute("disabled", true);
    elAttemptCount.textContent = "Urinishlar soni tugadi !!!";
    elAttemptCount.classList.add("alert-danger");
  }

  // elFindNumberInput.value = ""


})


// var elInputValue = elFindNumberInput.valueAsNumber;
