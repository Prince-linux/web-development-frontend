// When the user clicks the purchase button, render out
// "Something went wrong, please try again" in the paragraph
// that has the id="error".


let errorMessage = document.getElementById("error")
console.log(errorMessage)

function renderError() {
    // console.log("button clicked")
    let errorStr = "Something went wrong, please try again"
        // console.log(errorStr)
    errorMessage.textContent += errorStr
}