document.addEventListener("DOMContentLoaded", function () {
  // Step 1: Uncomment to locate the heart icons
  const articleHearts = document.querySelectorAll(".like-glyph");
  
  // Step 2: Uncomment to set up mock server communication
  // mockServerCall();
  
  // Step 3: Uncomment to activate event listening for the "click" event on heart icons
  articleHearts.forEach(heart => {
    heart.addEventListener("click", function (e) {
      mimicServerCall()
        .then(() => {
          if (heart.innerText === EMPTY_HEART) {
            heart.innerText = FULL_HEART;
            heart.className = "activated-heart";
          } else {
            heart.innerText = EMPTY_HEART;
            heart.className = "";
          }
        })
        .catch(error => {
          const modal = document.getElementById("modal");
          modal.className = "";
          modal.children[1].innerText = error;
          setTimeout(() => modal.className = "hidden", 5000);
        });
    });
  });
});

function mimicServerCall() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("Pretend remote server notified"), 300);
  });
}

function mockServerCall() {
  setTimeout(() => {
    return Promise.resolve("Pretend remote server notified");
  }, 300);
}
