(() => {
  console.log("Scripts loading...");
  const sliders = document.getElementsByClassName("slider__navlink");
  for (let i = 0; i < sliders.length; i++) {
    const element = sliders[i];
    element.addEventListener("click", () => {
      for (let o = 0; o < sliders.length; o++) {
        sliders[o].classList.remove("active");
      }
      element.classList.add("active");
    });
  }
  //TODO: set to whatever the URI has
  console.warn("Setting slider to middle");
  sliders[2].click();
})();
