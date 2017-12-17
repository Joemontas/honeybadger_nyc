window.onload = function () {
    const h1 = document.querySelector('#random-div h1');
    const tacosElem = document.querySelector('tacos')
    
    h1.addEventListener('click', function () {
        console.log('CLICKED THE H1');
        document.body.style.backgroundColor = 'red';
    });

    tacosElem.addEventListener('dblclick'), function () {
        document.body.style.backgroundColor = 'cornflowerblue';
    }
console.log('loaded');

}