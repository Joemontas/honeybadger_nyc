window.onload = function () {
    const removeButtons = document.querySelectorAll('.delete');
    const finishButtons = document.querySelectorAll('.finish');
    const addCardButton = document.querySelector()

    for(let i = 0; i < removeButtons.length; i++) {
    addRemoveListener(removeButtons[i]);
    }

    for(let i = 0; i < finishButtons.length; i++) {
        addFinishListener(finishListener[i]);
    }

    function addRemoveListener(node) {
        node.addEventListener('click', function () {
            this.parentNode.remove();
        });
    }


    function addFinishListener(node) {
        node.addEventListener('click', function() {
            const parentNode = this.parentNode;
            this.remove();
            parentNode.remove();
            parentNode.classList.remove('todo');
            parentNode.classList.add('done');

            document.querySelector('#done-column .card-list').appendChild(parentNode);
        });
    }


    
};