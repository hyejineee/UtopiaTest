const showButtonBox = ()=>{
    let box = document.getElementsByClassName("button-box")[0]
    box.style.display= "block"
}


const callback = ()=>{
    console.log("hellp")
    setTimeout(()=>showButtonBox(), 14000)
}

