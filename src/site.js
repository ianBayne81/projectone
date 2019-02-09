import moment from 'moment'

// clock element DOM elements defined 
const getTime = moment().format("LT") 
    
    const clockEl = document.querySelector("#clock")
    const timeDivEl = document.createElement('div')
    timeDivEl.classList.add('time-div-element')
    
    const timeSpanEl = document.createElement('span')
    timeSpanEl.classList.add('time-span-element')
    
    const timeElPara = document.createElement('p')
    timeElPara.classList.add('time-element-parargraph')
    timeElPara.textContent = getTime

// render time display DOM 

const renderTimeDOM = function () {
    //const now = new Date()
    //now.toLocaleTimeString()
    clockEl.innerHTML = ""
    timeSpanEl.appendChild(timeElPara)
    timeDivEl.appendChild(timeSpanEl)
    clockEl.appendChild(timeDivEl)
}
setInterval(renderTimeDOM(), 1000)
