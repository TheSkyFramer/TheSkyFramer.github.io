
      // This makes the navigation/menu bar stick at the top as you scroll
      // A 'sticky navbar' if you will
      var navbar = document.getElementById("navbar");

      // Get the offset position of the navbar
      var sticky = navbar.offsetTop;

      // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
      function myFunction() {
        if (window.pageYOffset >= sticky) {
          navbar.classList.add("sticky");
        } else {
          navbar.classList.remove("sticky");
        }
      }
      // ---------------------
      // Interactive Cigarette
      // ---------------------
      // Initialize the width of the color cover on page load
      window.onscroll = function () {
        myFunction();
        updateCigarette();
      };

      // Update the cigarette based on scroll position
      function updateCigarette() {
        var scrollPercent = getScrollPercent() + 0.12366412213740458;
        var flame = document.getElementById("cigaretteFlame");
        var colorCover = document.getElementById("colorCover");

        // Adjust the position of the flame and the width of the color cover
        // Start from full and decrease as we scroll
        var translateValue = -10 + scrollPercent * 100 + "%";
        flame.style.transform = "translateX(" + translateValue + ")";
        colorCover.style.width = scrollPercent * 100 + "%";
      }

      function getScrollPercent() {
        // Console log
        var h = document.documentElement,
          b = document.body,
          st = "scrollTop",
          sh = "scrollHeight";

        return (h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight);
      }
      // Initialize the cigarette on page load
      window.onload = function () {
        updateCigarette();
      };