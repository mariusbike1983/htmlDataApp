async function produceDataExternal(count) {
    let url = 'https://dummyjson.com/todos?limit='+count;

    await fetch(url)
        .then(res => res.json())
        .then(obj => {
            let data = [];
            obj.todos.forEach(element => {
                let localElem = produceLocalElem(element.todo, "Today", false);
                data.push(localElem);
            });
            window.data = data;
        });

    // let obj = await (await fetch(url)).json();

    // let data = [];
    // obj.todos.forEach(element => {
    //     let localElem = produceLocalElem(element);
    //     data.push(localElem);
    // });
    // window.data = data;
}

function produceLocalElem(text, detail, completed) {
    let localElem = {
        text:       text,
        detail:     detail,
        completed:  completed
    }
    return localElem;
}