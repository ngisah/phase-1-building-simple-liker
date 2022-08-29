// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

function emptyHeartClick(e){

  mimicServerCall()
  .then(response => {
    if (response) {
      e.target.innerText = FULL_HEART
      e.target.classList.add('activated-heart')
    }
  })
  .catch(error => {
    const errModal = document.getElementById('modal')
    const modalMessage = document.getElementById('modal-message')
    errModal.classList.remove('hidden')
    modalMessage.innerText = error
    setTimeout(() => errModal.classList.add('hidden'), 3000)
  })

}

function fullHeartClick(e){
  e.target.innerText = EMPTY_HEART
  e.target.classList.remove('activated-heart')
}

function heartClickHandler(e){
  const heart = e.target.innerText
  heart === EMPTY_HEART ? emptyHeartClick(e) : fullHeartClick(e)

}

function init(){
  const heartsHtmlCollection = document.getElementsByClassName('like-glyph')
  for (const heart of heartsHtmlCollection){
    heart.addEventListener('click', heartClickHandler)
  }
}
init()




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
