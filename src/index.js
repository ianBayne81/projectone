
const password = "Tayla"

document.querySelector("#login-button").addEventListener("click", (e) => { 

    const inputEl = document.querySelector("#login-input")
    inputEl.textContent = inputEl.text

    if (inputEl.value === password) {
        location.assign('/site.html')
    } else {
        alert("Password is incorrect. Please make contact to apply for password, Thank you")
        inputEl.value = ""
    }
})


