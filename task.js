function addFields() {
  var number = document.getElementById("inputField").value;
  var containerInput = document.getElementById("containerInput");
  while (containerInput.hasChildNodes()) {
    containerInput.removeChild(containerInput.lastChild);
  }
  for (i = 1; i <= number; i++) {
    containerInput.appendChild(document.createTextNode("Opt" + ":" + i));
    var input = document.createElement("input");
    input.type = "text";
    input.id = "input" + i;
    input.name = "apendInput" + i;
    containerInput.appendChild(input);
    var radio = document.createElement("input");
    radio.type = "radio";
    radio.id = "inputRadio" + i;
    radio.name = "Answer";
    radio.value = i;
    var para = document.createElement("p");
    para.id = "para" + i;
    containerInput.appendChild(radio);
    containerInput.appendChild(para);
    containerInput.appendChild(document.createElement("br"));
    containerInput.appendChild(document.createElement("br"));
  }
}
const form = document.getElementById("form1");
form.addEventListener("submit", displayRadioValue);
function displayRadioValue(event) {
  event.preventDefault();
  var question = document.getElementById("question").value;
  var number = document.getElementById("inputField").value;
  console.log(number);
  var ele = document.getElementsByName("Answer");
  if (question < 1) {
    document.getElementById("questionerr").style.color = "red";
    document.getElementById("questionerr").innerHTML =
      "*This field is requiered";
  } else {
    document.getElementById("questionerr").innerHTML = "";
  }
  if (number < 1) {
    document.getElementById("questionerr1").style.color = "red";
    document.getElementById("questionerr1").innerHTML =
      "*This field is requiered";
  } else {
    document.getElementById("questionerr1").innerHTML = "";
  }
  for (i = 1; i <= number; i++) {
    var x = document.getElementById("input" + i).value;
    if (x < 1) {
      document.getElementById("para" + i).style.color = "red";
      document.getElementById("para" + i).innerHTML =
        "*This field is also requiered";
    } else {
      document.getElementById("para" + i).innerHTML = "";
      for (k = 0; k < ele.length; k++) {
        if (ele[k].checked) {
          document.getElementById("error").innerHTML = "";
          const myFormData = new FormData(event.target);
          const formDataObj = {};
          myFormData.forEach((value, key) => (formDataObj[key] = value));
          console.log(formDataObj);
        } else {
          document.getElementById("error").style.color = "red";
          document.getElementById("error").style.fontSize = "20px";
          document.getElementById("error").style.fontWeight = "600";
          document.getElementById("error").innerHTML =
            "*Please choose any option";
        }
      }
    }
  }
}
