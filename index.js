

const gifPlayTime = [9000,15000,14000,8000,8000,7000,11000,14000,12000]

const score = {
    type1 : 0,
    type2 : 0,
    type3 : 0,
    type4 : 0,
}

const showButtonBox = ()=>{
    document.getElementById("background-image").src = "./images/1.png"
    let box = document.getElementsByClassName("button-box")[0]
    box.style.display= "block"
}


const callback = ()=>{
    const imgIndex = document.getElementById('background-image').getAttribute('value')*1-1
    setTimeout(()=>showButtonBox(), gifPlayTime[imgIndex])
}

const handleClickTypeButton = ()=>{
    
}

const handleClickNextButton = ()=>{
    
}