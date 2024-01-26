let switch_slider = document.getElementById("switch_slider");
let click_number = document.getElementById("click_number");
let add = document.getElementById("add");
//#region dark mode
switch_slider.addEventListener("click", (e) => {
  var element = document.body;
  element.classList.toggle("dark-mode");
});
//#endregion

// Use insert() function to insert the number in textview.
function insert(num) {
  document.form1.add.value = document.form1.add.value + num;
}

// Use equal() function to return the result based on passed values.
function equal() {
  var exp = document.form1.add.value;
  if (exp) {
    document.form1.add.value = eval(exp);
  }
}

/* Here, we create a backspace() function to remove the number at the end of the numeric series in textview. */
function backspace() {
  var exp = document.form1.add.value;
  document.form1.add.value = exp.substring(
    0,
    exp.length - 1
  ); /* remove the element from total length ? 1 */
}
