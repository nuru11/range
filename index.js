let current = document.querySelector(".current")
let range = document.querySelector(".range")

current.textContent = "$" + range.value + ".00/month"

range.oninput = function() {
    current.textContent = "$" +  range.value + ".00/month"
}

let checkbox = document.querySelector(".checkbox")

let a;
function cli() {

    if(a==1){
        range.min = "9"
    range.max = "27"
    range.step = "9"
    range.value = "18"
    return a=0
    }
    else {
        range.min = "8"
        range.max = "32"
        range.step = "8"
        range.value = "16"
        return a=1
    }
}
