window.matchMedia('screen and (max-width: 41.07em)')
      .addListener(function (mql) {
          if (mql.matches) {
              $('.nav-panel').css("display", "none");
          } else {
              $('.nav-panel').css("display", "block");
          }
      });
