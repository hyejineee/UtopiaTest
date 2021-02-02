

const gifPlayTime = [14500,13500,7500,7500,6500,10500,13500,11500]

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



const callback = ()=>{

    console.log('callback')
    
    const image = document.getElementById('background-image')
    const regex = /([^\s]+(?=\.(png)))/

    if (regex.test(image.src)){
        return
    }

    const questionIndex = image.getAttribute('value')*1
    setTimeout(()=>showButtonBox(questionIndex), gifPlayTime[questionIndex-1])
}



const handleClickTypeButton = (type)=>{
    const image = document.getElementById('background-image')

    const nextQuestionIndex = image.getAttribute('value')*1+1

    if((nextQuestionIndex-1) !== 8) {
        score[type] += 1
    }

    image.src = `./images/${nextQuestionIndex}.webp`
    image.setAttribute('value', nextQuestionIndex)

    const buttons = document.getElementsByClassName('button-image')[0]

    Array(buttons).forEach((element, i) => {
        element.src = `./images/buttons/question${nextQuestionIndex}buttons/button_${i}.png`
    });

    let box = document.getElementsByClassName("button-box")[0]
    box.style.display= "none"
}
