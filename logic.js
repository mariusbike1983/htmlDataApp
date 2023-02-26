window.onload = function() {
    this.document.getElementById('add-button').addEventListener('click', function(){
        alert('clicked the add button');
    });

    createAppContents();
}

async function createAppContents() {
    await produceDataExternal(5);
    //produceData(5);

    let inProgressList = this.document.getElementById('current-todo-list');
    if (window.data) {
        window.data.forEach(element => {

            let itemElement = this.document.createElement('div');
            itemElement.innerText = element.text;
            itemElement.classList.add('todo-item');

            let itemDetail = this.document.createElement('span');
            itemDetail.innerText = element.detail;
            itemDetail.classList.add("detail");

            itemElement.appendChild(itemDetail);

            itemElement.addEventListener('click', handleClickOnItem);

            inProgressList.appendChild(itemElement);
        });
    }
}

function handleClickOnItem(event) {
    let currentItem = event.target;
    let completedList = document.getElementById('completed-todo-list');
    let inProgressList = document.getElementById('current-todo-list');
    if (currentItem.parentElement === completedList) {
        inProgressList.appendChild(currentItem);
    } else {
        completedList.appendChild(currentItem);
    }
};