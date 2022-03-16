
const webps = [0]
const pngs = [0]
const gifPlayTime = [15000,14000,8000,8000,9000,11000,14000,12000]

const score = {
    type1 : 0,
    type2 : 0,
    type3 : 0,
    type4 : 0,
}

const preload = ()=>{
    let introAni = new Image()
    let introPng = new Image()

    introPng.src = './images/intro.png'
    introAni.src = './images/intro.webp'
    nextPngsLoad(1)
    nextWebpLoad(1)
}
const nextPngsLoad = (index)=>{
    if(index == 9) return 
    pngs[index] = new Image()
    pngs[index].src = `./images/${index}.png`
    pngs[index].onload = ()=>{
        nextPngsLoad(index+1)
    }
}

const nextWebpLoad =(index)=>{
    if(index == 9) return 

    webps[index] = new Image()
    webps[index].src = `./images/${index}.webp`
    webps[index].onload = ()=>{
        nextWebpLoad(index+1)
    }

} 

const showButtonBox = (questionIndex)=>{
    console.log(webps)
    document.getElementById("background-image").src = pngs[questionIndex].src
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
    const box = document.getElementsByClassName("button-box")[0]
   
    box.style.top ="25%"

    const ul = box.getElementsByTagName('ul')[0]
    ul.style.display ="grid"
    ul.style.gridTemplateColumns = "1fr 1fr"
    ul.style.gridTemplateRows = "1fr 1fr"
    ul.style.textAlign ="center"

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
    const urls = {
        type1 : 'https://youtu.be/4P1IPRRGd1k',
        type2 : 'https://youtu.be/fZ_kO8nyGMs',
        type3 : 'https://youtu.be/M_PfxrnDoZs',
        type4 : 'https://youtu.be/etrzdTGOJWU'
    }  

    const [key,] = Object.entries(score)
    .sort(([,a],[,b]) => a-b)[3]

    document.getElementById("background-image").src = `./images/${key}.png`
    const box = document.getElementsByClassName("button-box")[0]
    box.style.display= "none"

    const goToUtopia = document.getElementById('go-to-utopia')
    goToUtopia.style.display = "block"
    goToUtopia.setAttribute('href', urls[key])
}

const handleClickTypeButton = (type)=>{


    const image = document.getElementById('background-image')

    const nextQuestionIndex = image.getAttribute('value')*1+1

    if(nextQuestionIndex === 9){
        showResultImage()
        return
    }

    if((nextQuestionIndex-1) !== 8) {
        score[type] += 1
    }

    // image.src = `./images/${nextQuestionIndex}.webp`
    // image.setAttribute('value', nextQuestionIndex)
    image.src = webps[nextQuestionIndex].src
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


