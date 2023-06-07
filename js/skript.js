const chatOutput = document.getElementById('chat-output');

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
  }, 400);
}
