var pass = document.getElementById("password");
var msg = document.getElementById("message");
var str = document.getElementById("strength");

pass.addEventListener('input', () => {
  msg.style.display = pass.value.length > 0 ? "block" : "none";

  if (pass.value.length < 4) {
    str.innerHTML = "weak";
    pass.style.borderColor = "#ff5925";
    msg.style.color = "#ff5952";
  } else if (pass.value.length < 8) {
    str.innerHTML = "medium";
    pass.style.borderColor = "yellow";
    msg.style.color = "yellow";
  } else {
    str.innerHTML = "strong";
    pass.style.borderColor = "#26d730";
    msg.style.color = "#26d730";
  }
});
