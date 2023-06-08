const chatOutput = document.getElementsByClassName('chat-output')[0];

// Function takes a custom message as input and displays it in the chat container.
function typeMessage(customMessage) {
  var words = customMessage.split(' ');

  var i = 0;
  var interval = setInterval(() => {
    if (i < words.length) {
      var currentWord = words[i];

      var wordElement = document.createElement('span');
      wordElement.className = 'code-font';
      wordElement.textContent = currentWord + ' ';

      chatOutput.appendChild(wordElement);
      chatOutput.scrollTop = chatOutput.scrollHeight;

      i++;
    } else {
      clearInterval(interval);
      chatOutput.innerHTML += '<br>'; // Umbruch nach jeder Nachricht
    }
  }, 300);
}

// This function creates a delay in milliseconds before resolving.
function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
