var currentNumberWraper = document.getElementById('currentNumber');

var currentNumber = 0;

function increment(){
    currentNumber = currentNumber + 1;
    currentNumberWraper.innerHTML = currentNumber;
}

function decrement(){
    currentNumber = currentNumber - 1;
    currentNumberWraper.innerHTML = currentNumber;
}
 
const form = document.getElementById('toDoForm');
const taskList = document.getElementById('tarefas');


form.onsubmit = function (e) {
	e.preventDefault();
		const todoCheck = document.getElementById('TAREFAS');
		addTask(todoCheck.value);
	form.reset();
};

function addTask(description) {
	const tarefaContainer = document.createElement('div');
	const novaTarefa = document.createElement('input');
	const qualtarefa = document.createTextNode(description);

	novaTarefa.setAttribute('type', 'checkbox');
	novaTarefa.setAttribute('name', description);
	novaTarefa.setAttribute('id', description);
    const tarefaLabel = document.createElement('label');

	tarefaLabel.setAttribute('for', description);
	

	tarefaContainer.classList.add('task-item');
	tarefaContainer.appendChild(novaTarefa);
	tarefaContainer.appendChild(tarefaLabel);
    tarefaLabel.appendChild(qualtarefa);

	taskList.appendChild(tarefaContainer);
}