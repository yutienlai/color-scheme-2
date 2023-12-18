const color = document.getElementById("color-picker")
const scheme = document.getElementById("schemes") 


document.addEventListener("submit", (e) => {
    e.preventDefault()
    const colorInput = color.value.slice(1)
    const colorMode = scheme.value
    
    
    fetch(`https://www.thecolorapi.com/scheme?hex=${colorInput}&mode=${colorMode}&count=5`)
        .then(res => res.json())
        .then(results => {
            let html = ''
            let footer = ''
            const schemeArr = results.colors
            
            schemeArr.forEach(function(color){
                html += `<div class="colors-box" style="background-color: ${color.hex.value};"></div>`
                footer += `<p>${color.hex.value}</p>`
            })    
           document.getElementById("content").innerHTML = html
           document.getElementById("hex-footer").innerHTML = footer
        })




})