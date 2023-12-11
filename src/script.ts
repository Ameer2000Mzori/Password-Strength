// selecting our elements
const passwordInput = document.getElementsByClassName("password-Input")[0];
const headerEl: any = document.getElementsByClassName("header")[0];

// our global veribales

// our functions
const changeBackGroundColor = (valInput) => {
  let lengthCount = valInput.length;
  let blurValue = 100;
  let varer = blurValue - lengthCount * 7;
  if (varer <= 0) {
    varer = 0;
  }
  console.log(varer);
  updateBackGroundEffect(varer);
};

const updateBackGroundEffect = (blurValue) => {
  headerEl.style.filter = `blur(${blurValue}px)`;
};

// our eventlinsters
passwordInput.addEventListener("input", (e: any) => {
  let valInput: Number = e.target.value;
  changeBackGroundColor(valInput);
});
