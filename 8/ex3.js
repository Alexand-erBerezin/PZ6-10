let arr2 = ['g','v','e'];

function createSelect(arr, str) {
  if (typeof arr[0] === 'string') {
    arr = arr.map(str => ({ value: str, label: str }));
  } else if (typeof arr[0] === 'number') {
    arr = arr.map(num => ({ value: String(num), label: String(num) }));
  }

  const body = document.body;
  const select = body.appendChild(document.createElement('select'));

  arr.forEach(function(a) {
    const option = document.createElement('option');
    option.value = a.value;
    option.innerHTML = a.label;

    select.appendChild(option);
    if (option.value === str) {
      option.setAttribute('selected', true);
    }
  });
  
  return select
}

createSelect(arr2, "b");