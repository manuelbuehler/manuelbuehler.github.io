const chatOutput = document.getElementsByClassName('chat-output')[0];

// Die Funktion erhält eine Nachricht und gibt diese gestafflet aus.
function typeMessage(customMessage) {
  var punctuationMarks = ['!', '.'];
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

      /* Nach jedem Punkt / Ausrufezeichen / ... wird ein Umschlag eingefügt. */
      var hasPunctuationMark = punctuationMarks.some(mark => currentWord.includes(mark));
      if (hasPunctuationMark) {
        chatOutput.innerHTML += '<br>';
      }

      i++;
    }
  }, 250);
}

/* Diese Funktion gibt HTML-Links korrekt aus*/
function typeMessageWithHTMLLinks(customMessage) {
  var linkContainer = document.createElement('span');
  linkContainer.innerHTML = customMessage;

  var links = linkContainer.getElementsByTagName('a');
  for (var i = 0; i < links.length; i++) {
    var link = links[i];
    link.className = 'code-font-link';

    var spanElement = document.createElement('span');
    spanElement.appendChild(link);

    chatOutput.appendChild(spanElement);
    chatOutput.scrollTop = chatOutput.scrollHeight;
  }
}
  



// Diese Funktion fügt eine Verzögerung ein.
function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
