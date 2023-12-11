// selecting our elements
const passwordInput = document.getElementsByClassName("password-Input")[0];

// our global veribales

// our functions

// our eventlinsters
passwordInput.addEventListener("input", (e: any) => {
  let valInput = e.target.value;
  console.log(valInput);
});
