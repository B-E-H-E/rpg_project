const btnCreate = document.querySelector('.button_create');
const buttonMinus = document.querySelectorAll('.btn_minus');
const buttonPlus = document.querySelectorAll('.btn_plus');

const attributeNumber = document.querySelectorAll('.attribute_number');
let strValue = 1;
let agiValue = 1;
let constValue = 1;
let dexValue = 1;
let intValue = 1;
let chaValue = 1;
attributeNumber[0].innerHTML = strValue;
attributeNumber[1].innerHTML = agiValue;
attributeNumber[2].innerHTML = constValue;
attributeNumber[3].innerHTML = dexValue;
attributeNumber[4].innerHTML = intValue;
attributeNumber[5].innerHTML = chaValue;

const pointsLeft = document.getElementById('points_left');
pointsLeft.innerHTML = 17;

//event => 'press any key'
document.addEventListener('keydown', (event) => {            
    document.getElementById('press_key_container').style.visibility = 'visible';

    document.getElementById('narration_placeholder').innerHTML = document.getElementsByClassName('narr')[0].innerHTML;    
    document.addEventListener('keydown', (event) => { 
        document.getElementById('narration_placeholder').innerHTML = document.getElementsByClassName('narr')[1].innerHTML;
        document.addEventListener('keydown', (event) => { 
            document.getElementById('narration_placeholder').innerHTML = document.getElementsByClassName('narr')[2].innerHTML;
            document.addEventListener('keydown', (event) => {
                document.getElementById('narration_placeholder').innerHTML = document.getElementsByClassName('narr')[3].innerHTML;
                document.addEventListener('keydown', (event) => {
                    document.getElementById('narration_placeholder').innerHTML = document.getElementsByClassName('narr')[4].innerHTML;
                    document.addEventListener('keydown', (event) => {
                        document.getElementById('narration_placeholder').innerHTML = document.getElementsByClassName('narr')[5].innerHTML;
                        document.addEventListener('keydown', (event) => {
                            document.getElementById('narration_placeholder').innerHTML = document.getElementsByClassName('narr')[6].innerHTML;
                            document.addEventListener('keydown', (event) => {
                                document.getElementById('narration_placeholder').innerHTML = document.getElementsByClassName('narr')[7].innerHTML;
                                document.addEventListener('keydown', (event) => {
                                    document.querySelector('.hidden_toggle_1').style.display = 'none';
                                    document.querySelector('.hidden_toggle_2').style.display = 'block';
                                })
                            })
                        })
                    })
                })
            })
        })
    })
});

//event => create character button
btnCreate.addEventListener('click', (event) => {
    document.querySelector('.hidden_toggle_2').style.display = 'none';
    document.querySelector('.hidden_toggle_3').style.display = 'block';
});

//str- & str+
buttonMinus[0].addEventListener('click', (event) => {
    if (strValue > 1) {
        strValue -= 1;
        attributeNumber[0].innerHTML = strValue;
        pointsLeft.innerHTML = parseInt(pointsLeft.innerHTML) + 1;
    }
});
buttonPlus[0].addEventListener('click', (event)  => {
    if (strValue < 10 && parseInt(pointsLeft.innerHTML) > 0) {
        strValue += 1;
        attributeNumber[0].innerHTML = strValue;
        pointsLeft.innerHTML -= 1;
    }
});
// agi- $ agi+
buttonMinus[1].addEventListener('click', (event) => {
    if (agiValue > 1) {
    agiValue -= 1;
    attributeNumber[1].innerHTML = agiValue;
    pointsLeft.innerHTML = parseInt(pointsLeft.innerHTML) + 1;
    }
});
buttonPlus[1].addEventListener('click', (event)  => {
    if (agiValue < 10 && parseInt(pointsLeft.innerHTML) > 0) {
        agiValue += 1;
        attributeNumber[1].innerHTML = agiValue;
        pointsLeft.innerHTML -= 1;
    }
});
// const- $ const+
buttonMinus[2].addEventListener('click', (event) => {
    if (constValue > 1) {
    constValue -= 1;
    attributeNumber[2].innerHTML = constValue;
    pointsLeft.innerHTML = parseInt(pointsLeft.innerHTML) + 1;
    }
});
buttonPlus[2].addEventListener('click', (event)  => {
    if (constValue < 10 && parseInt(pointsLeft.innerHTML) > 0) {
    constValue += 1;
    attributeNumber[2].innerHTML = constValue;
    pointsLeft.innerHTML -= 1;
    }
});
// dex- $ dex+
buttonMinus[3].addEventListener('click', (event) => {
    if (dexValue > 1) {
    dexValue -= 1;
    attributeNumber[3].innerHTML = dexValue;
    pointsLeft.innerHTML = parseInt(pointsLeft.innerHTML) + 1;
    }
});
buttonPlus[3].addEventListener('click', (event)  => {
    if (dexValue < 10 && parseInt(pointsLeft.innerHTML) > 0) {
    dexValue += 1;
    attributeNumber[3].innerHTML = dexValue;
    pointsLeft.innerHTML -= 1;
    }
});
//int
buttonMinus[4].addEventListener('click', (event) => {
    if (intValue > 1) {
    intValue -= 1;
    attributeNumber[4].innerHTML = intValue;
    pointsLeft.innerHTML = parseInt(pointsLeft.innerHTML) + 1;
    }
});
buttonPlus[4].addEventListener('click', (event)  => {
    if (intValue < 10 && parseInt(pointsLeft.innerHTML) > 0) {
    intValue += 1;
    attributeNumber[4].innerHTML = intValue;
    pointsLeft.innerHTML -= 1;
    }
});
//charisma
buttonMinus[5].addEventListener('click', (event) => {
    if (chaValue > 1) {
    chaValue -= 1;
    attributeNumber[5].innerHTML = chaValue;
    pointsLeft.innerHTML = parseInt(pointsLeft.innerHTML) + 1;
    }
});
buttonPlus[5].addEventListener('click', (event)  => {
    if (chaValue < 10 && parseInt(pointsLeft.innerHTML) > 0) {
    chaValue += 1;
    attributeNumber[5].innerHTML = chaValue;
    pointsLeft.innerHTML -= 1;
    }
});

document.getElementById('button_next').addEventListener('click', (event) => {
    alert('pls give me a job');
});


/*buttonMinus.forEach(function attrReduce() {
    for (var i = 0; i < attributeNumber.length; i++) {     
        buttonMinus[i].addEventListener('click', (event) => {
            if (attributeNumber[i] > 1) {
                attributeNumber[i] -= 1;            
                    if (i = 0) {                        
                        attributeNumber[i].innerHTML = strValue;
                    } else if (i = 1) {
                        attributeNumber[i].innerHTML = agiValue;
                    } else if (i = 2) {
                        attributeNumber[i].innerHTML = constValue;
                    } else if (i = 3) {
                        attributeNumber[i].innerHTML = dexValue;
                    } else if (i = 4) {
                        attributeNumber[i].innerHTML = intValue;
                    } else if (i = 5) {
                        attributeNumber[i].innerHTML = chaValue;
                    }
                }
            })};
});
buttonPlus.forEach(function attrIncrease() {
    for (var i = 0; i < attributeNumber.length; i++) {
        buttonPlus[i].addEventListener('click', (event) => {    
            if (attributeNumber[i] < 10) {
                attributeNumber[i] += 1;
                    if (i = 0) {
                    } else if (i = 1) {
                        attributeNumber[i].innerHTML = agiValue;
                    } else if (i = 2) {
                        attributeNumber[i].innerHTML = constValue;
                    } else if (i = 3) {
                        attributeNumber[i].innerHTML = dexValue;
                    } else if (i = 4) {
                        attributeNumber[i].innerHTML = intValue;
                    } else if (i = 5) {
                        attributeNumber[i].innerHTML = chaValue;
                    }
                }
    })};
});
if (attributeNumber[0].innerHTML == 1) {
console.log('ok')
};*/