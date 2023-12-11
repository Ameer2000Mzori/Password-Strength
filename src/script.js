// selecting our elements
var passwordInput = document.getElementsByClassName("password-Input")[0];
// our global veribales
// our functions
// our eventlinsters
passwordInput.addEventListener("input", function (e) {
    var valInput = e.target.value;
    console.log(valInput);
});
