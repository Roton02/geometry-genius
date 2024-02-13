const refresh = document.getElementById('refresh');
refresh.addEventListener('click', function(){
    areaDisplay.innerText= '';
})

const rectagleBtn = document.getElementById('rectangleId');
const areaDisplay = document.getElementById('area-display');
rectagleBtn.addEventListener('click', function(){
    const rectangleBase = inputValueById('rectangle-base');
    // console.log(rectangleBase);
    const rectangleHeight = inputValueById('rectangle-height')
    // console.log(rectangleHeight);
    const area = 0.5* rectangleBase* rectangleHeight;
    // console.log(area);
    const p = document.createElement('p');
    p.innerText = ( area);
    areaDisplay.appendChild( p);

//   document.getElementById('rectangle-base').value='';
    
})

 function inputValueById(inputField){
    const inputId = document.getElementById(inputField);
    const idValue= inputId.value;
    const inputValue = parseFloat(idValue);
    inputId.value='';
    return inputValue;
    
}

