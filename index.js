

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



const callback = ()=>{
    
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

    image.src = `./images/${nextQuestionIndex}.gif`
    image.setAttribute('value', nextQuestionIndex)

    const buttons = document.getElementsByClassName('button-image')[0]

    Array(buttons).forEach((element, i) => {
        element.src = `./images/buttons/question${nextQuestionIndex}buttons/button_${i}.png`
    });

    let box = document.getElementsByClassName("button-box")[0]
    box.style.display= "none"
}
