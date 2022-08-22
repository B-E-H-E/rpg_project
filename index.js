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

//event => 'create character' button
btnCreate.addEventListener('click', (event) => {
    document.querySelector('.hidden_toggle_2').style.display = 'none';
    document.querySelector('.hidden_toggle_3').style.display = 'block';
});

// Classes Description
function classDesc0() {
    document.querySelectorAll('.class_desc')[0].style.color = '#cdcdcd';
};
function removeClassDesc0() {
    document.querySelectorAll('.class_desc')[0].style.color = 'rgba(0, 0, 0, 0)';
};

function classDesc1() {
    document.querySelectorAll('.class_desc')[1].style.color = '#cdcdcd';
};
function removeClassDesc1() {
    document.querySelectorAll('.class_desc')[1].style.color = 'rgba(0, 0, 0, 0)';
};

function classDesc2() {
    document.querySelectorAll('.class_desc')[2].style.color = '#cdcdcd';
};
function removeClassDesc2() {
    document.querySelectorAll('.class_desc')[2].style.color = 'rgba(0, 0, 0, 0)';
};

function classDesc3() {
    document.querySelectorAll('.class_desc')[3].style.color = '#cdcdcd';
};
function removeClassDesc3() {
    document.querySelectorAll('.class_desc')[3].style.color = 'rgba(0, 0, 0, 0)';
};
function classDesc4() {
    document.querySelectorAll('.class_desc')[4].style.color = '#cdcdcd';
};
function removeClassDesc4() {
    document.querySelectorAll('.class_desc')[4].style.color = 'rgba(0, 0, 0, 0)';
};

//Class Nav Controls
let classIndex = 1;
showClasses(classIndex);

function plusClasses(n) {
  showClasses(classIndex += n);
  document.getElementById('confirm_class').style.visibility = 'hidden';
}

function showClasses(n) {
  let i;
  let classes = document.getElementsByClassName("class_selector");  
  if (n > classes.length) {classIndex = 1}
  if (n < 1) {classIndex = classes.length}
  for (i = 0; i < classes.length; i++) {
    classes[i].style.display = "none";
  }
  classes[classIndex-1].style.display = "block";
}

function confirmClass() {
    document.getElementById('confirm_class').style.visibility = 'visible';
}

function classConfirmed() {
    document.querySelector('.hidden_toggle_3').style.display = 'none';
    document.querySelector('.hidden_toggle_4').style.display = 'block';
}

//str
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
//agi
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
//const
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
//dex
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
//cha
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
    if (strValue + agiValue + constValue + dexValue + intValue + chaValue == 23) {
        alert('pls give me a job');
    } else {
        alert('Distribute all the stat points!')
    }
    
});

