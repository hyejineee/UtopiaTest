

const gifPlayTime = [15000,14000,8000,8000,7000,11000,14000,12000]

const score = {
    type1 : 0,
    type2 : 0,
    type3 : 0,
    type4 : 0,
}

const showButtonBox = (questionIndex)=>{
    document.getElementById("background-image").src = `./images/${questionIndex}.png`
    let box = document.getElementsByClassName("button-box")[0]
    box.style.display= "block"
}

const onLoadHandler = ()=>{
    
    const image = document.getElementById('background-image')
    const regex = /([^\s]+(?=\.(png)))/

    if (regex.test(image.src)){
        return
    }

    const questionIndex = image.getAttribute('value')*1
    setTimeout(()=>showButtonBox(questionIndex), gifPlayTime[questionIndex-1])
}

const gridStyle = () =>{
    let box = document.getElementsByClassName("button-box")[0]
   
    box.style.top ="30%"

    const ul = box.getElementsByTagName('ul')[0]
    ul.style.display ="grid"
    ul.style.gridTemplateColumns = "1fr 1fr"
    ul.style.gridTemplateRows = "1fr 1fr"

    const img = ul.getElementsByTagName('img')

    for(let i =0; i< img.length; i++){
        img[i].style.width ="95%"
    }
}

const clearGridStyle = ()=>{

    let box = document.getElementsByClassName("button-box")[0]
    box.style.top ="50%"

    const ul = box.getElementsByTagName('ul')[0]
    ul.style.display ="block"

    const img = ul.getElementsByTagName('img')

    for(let i =0; i< img.length; i++){
        img[i].style.width ="100%"
    }
}

const showResultImage = ()=>{
    const [key,] = Object.entries(score)
    .sort(([,a],[,b]) => a-b)[3]

    document.getElementById("background-image").src = `./images/${key}.png`
    let box = document.getElementsByClassName("button-box")[0]
    box.style.display= "none"
}

const handleClickTypeButton = (type)=>{


    const image = document.getElementById('background-image')

    const nextQuestionIndex = image.getAttribute('value')*1+1

    if(nextQuestionIndex === 9){
        //결과 페이지로 이동 
        showResultImage()
        return
    }

    if((nextQuestionIndex-1) !== 8) {
        score[type] += 1
    }

    image.src = `./images/${nextQuestionIndex}.webp`
    image.setAttribute('value', nextQuestionIndex)

    const buttons = document.getElementsByClassName('button-image')

    for(let i =0; i<buttons.length; i++){
        buttons[i].src = `./images/buttons/question${nextQuestionIndex}buttons/button_${i}.png`
    }

    let box = document.getElementsByClassName("button-box")[0]
    box.style.display= "none"

    if(nextQuestionIndex === 5 || nextQuestionIndex === 8){
        gridStyle()
        return 
    }
    clearGridStyle()
}


