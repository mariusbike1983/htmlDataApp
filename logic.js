window.onload = function() {
    const addButton = this.document.getElementById('add-button');
    addButton.addEventListener('click', function() {
        const todoText = prompt("What do you plan on doing?");
		if (!todoText) {
			return;
		}
		const when = prompt("And when do you plan on doing "+todoText+"?");
		if (!when) {
			return;
		}
        const newElement = produceLocalElem(todoText, when, false);
        renderNewItem(newElement);
    });

    createAppContents();
}

async function createAppContents() {
    window.dataStore = new WeakMap();
    await produceDataExternal(5);
    //produceData(5);

    if (window.data) {
        window.data.forEach(element => {
            renderNewItem(element);
        });
    }
}

function handleClickOnItem(event) {
    let modelElement = event.target.modelElement;

    modelElement.completed = !modelElement.completed;
    updateItem(modelElement);
};

function renderNewItem(modelElement) {
    let itemElement = this.document.createElement('div');
    // setup the two-way binding: the UI element has a link to the model. And the model
    // has a link to the UI in the data-store
    itemElement.modelElement = modelElement;
    dataStore.set(modelElement, itemElement);

    // render the rest of the components
    itemElement.innerText = modelElement.text;
    itemElement.classList.add('todo-item');

    let itemDetail = this.document.createElement('span');
    itemDetail.innerText = modelElement.detail;
    itemDetail.classList.add("detail");

    itemElement.appendChild(itemDetail);

    itemElement.addEventListener('click', handleClickOnItem);

    updateItem(modelElement);
}

function updateItem(modelElement) {
    const itemElement = dataStore.get(modelElement);
    if (modelElement.completed) {
        document.getElementById('completed-todo-list').appendChild(itemElement);
    } else {
        document.getElementById('current-todo-list').appendChild(itemElement);
    }
}