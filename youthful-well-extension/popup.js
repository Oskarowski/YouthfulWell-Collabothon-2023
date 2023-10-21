document
  .getElementById("redirectButton")
  .addEventListener("click", function () {
    var redirectUrl = "https://youthfulwell.jdex.pl/chat";

    chrome.tabs.create({ url: redirectUrl });
  });
