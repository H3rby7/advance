(() => {
  console.log("Scripts loading...");

  window.addEventListener('hashchange', function () {
    updateSlider(getAnchor());
  });
  updateSlider(getAnchor());

  function updateSlider(nextActive) {
    if (!nextActive) {
      return;
    }
    const sliders = document.getElementsByClassName("slider__navlink");
    for (let i = 0; i < sliders.length; i++) {
      const element = sliders[i];
      if (element.hash === `#${nextActive}`) {
        element.classList.add("active");
      } else {
        element.classList.remove("active");
      }
    }
  }

  function getAnchor() {
    var currentUrl = document.URL,
      urlParts = currentUrl.split('#');
    return (urlParts.length > 1) ? urlParts[1] : null;
  }
})();
