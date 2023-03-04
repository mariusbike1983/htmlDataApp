function produceData(count) {
    let data = [];
    for(let i = 0; i < count; i++) {
        let newItem = produceNewItem(i);
        data.push(newItem);
    }
    window.data = data;
}

function produceNewItem(i) {
    let newItem = {
        text:       "item"+(i+1),
        detail:     "detail for item"+(i+1),
        completed:  false
    }
    return newItem;
}