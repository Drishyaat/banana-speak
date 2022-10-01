# banana-speak
A fun translation app made in VanillaJS to translate english to Minion's language using API
### Working
* Text to be translated is taken using `<textarea>` 
* Used an ID to connect textarea in HTML to Javascript via `document.querySelector("#txt-input")`
* Designed a button which calls function when clicked
* Function takes the text input and translates it to banana language using API
* We use `fetch` for accessing translated text
* An output box is created using div and is connected to Javascript using ID
* We used `.innerText` to access this div and display the output
