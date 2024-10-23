const input = document.getElementById("input")
let image = document.getElementById("image")

//turning string into an array that can be split and reversed
function reverseString(str) {
    return str.split("").reverse().join("")
}

function changeImage() {
    let image = document.getElementById('image')
}


//value of input field
function check() {
    const value = input.value
    const reverse = reverseString(value)
    
    if (value === reverse) {
        alert("PALINDROME DETECTED - Sadcat is pleased with you");
        image.src="happy.gif";
    } else  {
        alert("No Palindrome - Sadcat remains disappointed in you!")
    }

    input.value = ""
}