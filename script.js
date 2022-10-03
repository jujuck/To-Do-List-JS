const tasks = [
  {
    id: 1,
    label: "To Do List workshop",
    detail: "Learn and progress on JS and DOM",
    category: "Code",
    valid: true
  }
]

const tasksElements = document.getElementById('task');

const generateTask = (tache) => {
  const tr = document.createElement('tr');
  const task = `<th scope="row" class="text-primary">1</th>
    <th>${tache.label}</th>
    <th>${tache.detail}</th>
    <th>${tache.category}</th>
    <th>
      <img src="./images/check-square.svg" alt="" class="d-none">
      <img src="./images/square.svg" alt="">
      <img src="./images/trash-fill.svg" alt="">
    </th>`

  tr.innerHTML = task;
  tasksElements.appendChild(tr)
}

const render = () => {
  tasksElements.innerHTML = "";
  for (let i = 0; i < tasks.length; i++) {
    generateTask(tasks[i]);
  }
}