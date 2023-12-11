// selecting our elements
var passwordInput = document.getElementsByClassName("password-Input")[0];
var headerEl = document.getElementsByClassName("header")[0];
// our global veribales
// our functions
var changeBackGroundColor = function (valInput) {
    var lengthCount = valInput.length;
    var blurValue = 100;
    var varer = blurValue - lengthCount * 7;
    if (varer <= 0) {
        varer = 0;
    }
    console.log(varer);
    updateBackGroundEffect(varer);
};
var updateBackGroundEffect = function (blurValue) {
    headerEl.style.filter = "blur(".concat(blurValue, "px)");
};
// our eventlinsters
passwordInput.addEventListener("input", function (e) {
    var valInput = e.target.value;
    changeBackGroundColor(valInput);
});
