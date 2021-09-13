const slideInterval = 3500;

function getFigures() {
    return document.getElementById('carousel').getElementsByTagName('figure');
}

function moveForward() {
    var pointer;
    var figures = getFigures();

    for (var i = 0; i < figures.length; i++) {
        if (figures[i].className == 'visible') {
            figures[i].className = '';
            pointer = i;
        }
    }
    if (++pointer == figures.length) {
        pointer = 0;
    }

    /* pointer = (pointer + 1) % figures.length; */


    figures[pointer].className = 'visible';
    setTimeout(moveForward, slideInterval);
}

function startPlayBack() {
    setTimeout(moveForward, slideInterval);
}
startPlayBack();
