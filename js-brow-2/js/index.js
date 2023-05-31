let tasks = [];
let id = 1;

const addButton = document.getElementById('addButton')
const deleteButton = document.getElementById('deleteButton')
const listItems = document.getElementById('listItems')

function renderTask(task){
    const li = document.createElement('li');
    const input = document.createElement('input');
    input.setAttribute('type', 'checkbox');
    const span = document.createElement('span');

    span.textContent = task.title;

    li.appendChild(input);
    li.appendChild(span);
    li.addEventListener('click', function(event, task) {
        handleCheckTask(event, task)
    });
    listItems.appendChild(li);
}

function handleSubmit(event) {
    event.preventDefault();
    const input = document.getElementById('tarea');
    const task = {
        id,
        title: input.value,
        complete: false
    }
    tasks.push(task);
    id += 1;
    input.value = ''

    renderTask(task);
}

function handleCheckTask(event){
    const input = event.currentTarget.querySelector('input');
    const span = event.currentTarget.querySelector('span');

    const isChecked = input.getAttribute('checked');

    if(isChecked){
        input.removeAttribute('checked');
        span.classList.remove('is-completed');
        tasks = tasks.map(item => item.id === task.id ? {...item, complete: false} : item);
    } else {
        input.setAttribute('checked', true);
        span.classList.add('is-completed');
        tasks = tasks.map(item => item.id === task.id ? {...item, complete: true} : item); 
    }
}

function handleDelete(event) {
    event.preventDefault();
    const list = listItems.querySelectorAll('li');
    list.forEach(element => {
        const isChecked = element.children[0].getAttribute('checked');
        isChecked ? element.remove() : null
    });
}

addButton.addEventListener('click', function(event){
    handleSubmit(event);
});

deleteButton.addEventListener('click', function(event) {
    handleDelete(event);
})