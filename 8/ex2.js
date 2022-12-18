let arr = [
    { label: 'Николай' },
    { label: 'Влад' },
    { label: 'Артём' },
]

function createSelect(arr, str) {
    let select = document.createElement("select");
    if (Array.isArray(arr)) {
        if (typeof arr[0] === "string")
            for (let value of arr) {
                let isSelected = str === value;
                let option = new Option(value, value, isSelected, isSelected);
                select.options.add(option);
            }
        else
            for (let e of arr) {
                let value = e.value;
                let isSelected = str === value;
                let option = new Option(e.label, value, isSelected, isSelected);
                select.options.add(option);
            }
    
    }
    return select;
}

document.body.append(createSelect(arr));
