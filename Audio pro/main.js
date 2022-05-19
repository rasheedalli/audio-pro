const searchForm = document.querySelector("#search-form");
const searchFormInput = searchForm.querySElector("input"); //<=> document.querySelector("#search-form input");


const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

if(SpeechRecognition){
	console.log("Your Browser supportsmspeech Recognition");
	
	searchForm.innerAddjacentHTML("beforeend", '<button type="button"><i class="fas fa-microphone"></i></button>');
	const micBtn = search.querySelector("button");
const micIcon = micbtn.querySelector("i");

const recognition = new SpeechRecognition();
recognition.continuous = true;

micBtn.addEventListener("click", micBtnClick);
function micBtnClick() {
	if(micIcon.classList.contain("fa-microphone")) { // start Speech Recognition
	  micIcon.classList.remove("fa-microphone");
	  micIcon.classList.add("fa-microphone-slash");
	  recognition.start();
	  
}
else{ // stop Speech Recognition
     
	 recognition.stop();
}
}
recognition.addEventListener("start", startSpeechRecognition); //<=> recognition.onstart = function() {...}
function startSpeechRecognition() {
	micIcon.classList.remove("fa-microphone-slash");
	 micIcon.classList.add("fa-microphone");
	 searchFormInput.focus();
	console.log("Speech Recognition Active");
}
recognition.addEventListener("end", startSpeechRecognition); //<=> recognition.onstart = function() {...}
function startSpeechRecognition() {
	micIcon.classList.remove("fa-microphone-slash");
	 micIcon.classList.add("fa-microphone");
	 searchFormInput.focus();
	console.log("Speech Recognition Disconnected");
}
recognition.addEventListener("result", resultOfSpeechRecognition); // <=> recognition.onresult  = function() {...}
  function resultOfSpeechRecognition(event) {
	  const currentResultIndex = event.resultIndex;
		  const transcript = event.results[currentResultIndex][0].transcript;
		  searchFormInput.value = transcript;
		 
    if(transcript.tolowerCase().trim()==="stop recording"){
	recognition.stop();
	}
	else if(!searchFormInput.value){
		searchFormInput.value = transcript;
	}
	else{
		if(transcript.toLowerCase().trim()==="go"){
		}
		else if(transcript.toLowerCase().trim()==="reset input"){
			searchForm.value = "";
		}
		else{
		searchFormInput.value = transcript;
		}
	}
		// setTimeout(() => {
		 // searchForm.submit();
		 // },750);
  }
}
else{
	console.log("Your Browser does not support speech Recognition");
}