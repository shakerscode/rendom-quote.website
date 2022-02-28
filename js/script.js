 const showingQuote = document.getElementById('show-quote');
const showAuthor = document.getElementById('show-author');
const quoteButton = document.getElementById('quote-btn');
const volume = document.getElementById('volume');
const copy = document.getElementById('copy');
const twitter = document.getElementById('twitter');

 getResult = () => {
    quoteButton.innerText = 'Loading...'
        const url = ('https://api.quotable.io/random');
        fetch(url)
        .then(res => res.json())
        .then(data => showResult(data))
 }
 
 const showResult = data =>{
    showingQuote.innerText = data.content;
    showAuthor.innerText = data.author;
    quoteButton.innerText = 'New Quote';
 }
 // volume section
 volume.addEventListener('click', () => {
     //The SpeechSynthesisUtterance interface of the Web Speech API represents a speech request. It contains the content the speech service should read and information about how to read it (e.g. language, pitch and volume.)
     let globalVolume = new SpeechSynthesisUtterance(`${showingQuote.innerText} by Amar Vai Tomar Vai sheker vai sheker vai. Single achi Single thakbo, inshallah`);
     speechSynthesis.speak(globalVolume);
 })

 //copy section
 copy.addEventListener('click', () => {
      navigator.clipboard.writeText(showingQuote.innerText);
 })

 //twitter section
 twitter.addEventListener('click', () => {
       let twitterUrl = `https://twitter.com/intent/tweet?url=${showingQuote.innerText}`;
       window.open(twitterUrl, '_blank')
 })