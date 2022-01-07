console.log("Extensão ativa! 🔥");

let keysPressed = [];

addEventListener("keydown", function (e) {
  handleKey(e.key);
});

function handleKey(key) {
  if (key === "," || key === "\\") findContainer("micButton");
  if (key === "." || key === "'") findContainer("vidButton");
  if (key === ";" || key === "/") findScrButton();
}

function findContainer(button) {
  // Your container at the bottom right
  const singleSelfVideo = document.querySelector(
    ".GameVideo-self-video-container"
  );

  if (singleSelfVideo) {
    let buttonSelected;

    if (button === "micButton") {
      buttonSelected = document.querySelector(
        "#root > div > div > div.Layout > div > div > div.GameCanvasContainer-body > div.GameVideo-self-video-container > div > div > div.css-b03skl > div > button:nth-child(1)"
      );
    }

    if (button === "vidButton") {
      buttonSelected = document.querySelector(
        "#root > div > div > div.Layout > div > div > div.GameCanvasContainer-body > div.GameVideo-self-video-container > div > div > div.css-b03skl > div > button:nth-child(3)"
      );
    }

    toogleMicState(buttonSelected);

    return;
  }

  // --------------------------------------------------

  // Your container when expand button is pressed
  const expandedSelfVideo = document.querySelector(
    ".GameVideosContainer-videobar-content.is-grid"
  );

  if (expandedSelfVideo) {
    let buttonSelected;

    if (button === "micButton") {
      buttonSelected = document.querySelector(
        "#videos > div.GameVideosContainer-videobar-content.is-grid > div:nth-child(1) > div > div.css-b03skl > div > button:nth-child(1)"
      );
    }

    if (button === "vidButton") {
      buttonSelected = document.querySelector(
        "#videos > div.GameVideosContainer-videobar-content.is-grid > div:nth-child(1) > div > div.css-b03skl > div > button:nth-child(3)"
      );
    }

    toogleMicState(buttonSelected);

    return;
  }

  // --------------------------------------------------

  // Your container when someone is presenting
  const castingSelfVideo = document.querySelector(
    ".GameVideosContainer-videobar-content.is-vertical"
  );

  if (castingSelfVideo) {
    let buttonSelected;

    if (button === "micButton") {
      buttonSelected = document.querySelector(
        "#videos > div.GameVideosContainer-videobar-content.is-vertical > div.css-dqoo63 > div > div.css-b03skl > div > button:nth-child(1)"
      );
    }

    if (button === "vidButton") {
      buttonSelected = document.querySelector(
        "#videos > div.GameVideosContainer-videobar-content.is-vertical > div.css-dqoo63 > div > div.css-b03skl > div > button:nth-child(3)"
      );
    }

    if (buttonSelected) {
      try {
        toogleMicState(buttonSelected);
      } catch (error) {
        console.log(error);

        let buttonSelected;

        if (button === "micButton") {
          buttonSelected = document.querySelector(
            "#root > div > div > div.Layout > div > div > div.GameCanvasContainer-body > div.GameCanvasContainer-main > div.Layout > div.Layout.css-1a5gi3c > div.Layout.css-5kzl9d > button:nth-child(1)"
          );
        }

        if (button === "vidButton") {
          buttonSelected = document.querySelector(
            "#root > div > div > div.Layout > div > div > div.GameCanvasContainer-body > div.GameCanvasContainer-main > div.Layout > div.Layout.css-1a5gi3c > div.Layout.css-5kzl9d > button:nth-child(3)"
          );

          toogleMicState(buttonSelected);
        }
      }
    } else {
      let buttonSelected;

      if (button === "micButton") {
        buttonSelected = document.querySelector(
          "#root > div > div > div.Layout > div > div > div.GameCanvasContainer-body > div.GameCanvasContainer-main > div.Layout > div.Layout.css-1a5gi3c > div.Layout.css-5kzl9d > button:nth-child(1)"
        );
      }

      if (button === "vidButton") {
        buttonSelected = document.querySelector(
          "#root > div > div > div.Layout > div > div > div.GameCanvasContainer-body > div.GameCanvasContainer-main > div.Layout > div.Layout.css-1a5gi3c > div.Layout.css-5kzl9d > button:nth-child(3)"
        );

        toogleMicState(buttonSelected);
      }
    }

    return;
  }

  // --------------------------------------------------
}

function findScrButton() {
  const scrButton = document.querySelector(
    "#root > div > div > div.Layout > div > div > div.GameCanvasContainer-body > div.GameCanvasContainer-main > div.GameCanvasContainer-settings > div > div.ActionBar-container.css-2xuk1o > div.ActionBar-item.css-0 > div.ActionBar-screenshare-wrap"
  );

  toogleMicState(scrButton);
}

function toogleMicState(btn) {
  if (btn) btn.click();
}
