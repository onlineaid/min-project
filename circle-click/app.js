let circle = document.querySelector('.circle')
let btn = document.querySelector('.btn')
let showColorCodeOnPtag = document.querySelector('.color-code');
let body = document.querySelector('body')


// Event handeling 
circle.addEventListener('click', changeBgColor)

// Define Function
function changeBgColor(){
    let randomColorGenerator = Math.floor(Math.random() * 16777216).toString(16);

    let haxColor = `#${randomColorGenerator}`;
    circle.style.backgroundColor = haxColor

    showColorCodeOnPtag.innerText = haxColor;

    // Show our copy btn 
    btn.style.display = 'block'
    body.style.background = `radial-gradient( ${haxColor}, #000)`
} 

// Copy to color code 
function copyToClipBoard(colorSeclactor){
    let colorCopy = document.querySelector(colorSeclactor);

    let selection = window.getSelection()
    let range = document.createRange()

    range.selectNodeContents(colorCopy)
    selection.removeAllRanges()
    selection.addRange(range)

    // We need define copy function
    // @deprecated means it's work some new funtionlaty arrive but still work
    document.execCommand('copy');
    selection.removeAllRanges()

    // show an alert 
    alert(`Color code is "${colorCopy.textContent}" please press OK`)
}

// Final step 
btn.addEventListener('click', () => {
    copyToClipBoard('.color-code')
})