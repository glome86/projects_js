const turnOnOff = document.getElementById ( 'turnOnOff' );

const lamp = document.getElementById ( 'lamp' );

// Definition and Usage
// The indexOf() method returns the position of the first occurrence of a value in a string.
// The indexOf() method returns -1 if the value is not found.
// The indexOf() method is case sensitive.

function isLampBroken () {
    return lamp.src.indexOf ( 'quebrada' ) > -1
}

function lampOn () {
    if ( !isLampBroken () ) {
        lamp.src = './img/ligada.jpg';
    }
}

function lampOff () {
    if ( !isLampBroken () ) {
        lamp.src = './img/desligada.jpg';
        turnOnOff.textContent = 'Ligar';
    }
}

function lampBroken () {
    lamp.src = './img/quebrada.jpg';
}

function lampOnOff () {
    if ( turnOnOff.textContent == 'Ligar' ) {
        lampOn();
        turnOnOff.textContent = 'Desligar';
    }else{
        lampOff();
        turnOnOff.textContent = 'Ligar';
    }
}


turnOnOff.addEventListener ( 'click', lampOnOff );

lamp.addEventListener ( 'mouseover', lampOn );
lamp.addEventListener ( 'mouseleave', lampOff );
lamp.addEventListener ( 'dblclick', lampBroken );

