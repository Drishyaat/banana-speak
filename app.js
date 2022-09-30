var btnTranslate=document.querySelector("#btn-translate");
var txtInput= document.querySelector("#txt-input");
var outputDiv= document.querySelector("#output");
var outputError=document.querySelector("#output-error");
var serverURL="https://api.funtranslations.com/translate/minion.json";

function getTranslationURL(text){
    return serverURL +"?" + "text=" + text;
}
function errorHandler(error) {
    console.log("Error Occured" , error);
    //alert("Something is wrong. Try again in some time!")
    outputError.innerText="Something is wrong. Try again in some time!";
}
function clickHandler()
{
    var inputText=  txtInput.value; // Taking input
    
    // Calling server for processing
   if(inputText!=''){
    fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(json => {
        var translatedText= json.contents.translated;
        outputDiv.innerText = translatedText; // output
    })
    
    .catch(errorHandler)} 
    else{
        outputDiv.innerText="Enter text to translate";
    }
    
   
};

btnTranslate.addEventListener("click", clickHandler)
