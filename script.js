

let calculatebtn = document.getElementById('calculate')

calculatebtn.onclick = () => {

    let inputBoxDiv = document.getElementById('inputBox').value
    let lengthBox = document.getElementById('length')

    let removeSpace = inputBoxDiv.split(" ").join("")

     lengthBox.innerText = removeSpace.length
    

    lengthBox.style.textAlign = "center"
    lengthBox.style.paddingTop = "20px"
    lengthBox.style.fontSize = "1.3rem"
}