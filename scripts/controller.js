console.log("controller");

window.addEventListener('load', initEvents);

let tableHeader = ['ID', 'Title', 'Description', 'Date', 'Select Task'];
let body;
let table;
let taskId = 0;

function initEvents() {
    table = document.querySelector('#grid-table');
    let tHeader = generateHeader();
    table.appendChild(tHeader);
    body = document.createElement('div');
    body.className = 'grid-body';
    table.appendChild(body);
    let addBtn = document.querySelector('#add-btn');
    addBtn.addEventListener('click', addTask);
}

function generateHeader() {
    let row = document.createElement('div');
    row.className = 'row grid-head';
    for (let key of tableHeader) {
        let item = document.createElement('div');
        item.className = 'grid-item';
        item.innerText = key;
        row.appendChild(item);
    }
    return row;
}

// function addtask() {
//     table = document.querySelector('#grid-table');
//     let row = document.createElement('div');
//     let taskTitle = document.querySelector('#title-box').value;
//     let taskDesc = document.querySelector('#description-box').value;
//     row.className = 'row';
//     taskId++;

//     let id = document.createElement('div');
//     id.className = 'grid-item';
//     id.innerText = taskId;

//     let title = document.createElement('div');
//     title.className = 'grid-item';
//     title.innerText = taskTitle;

//     let desc = document.createElement('div');
//     desc.className = 'grid-item';
//     desc.innerText = taskDesc;

//     let date = document.createElement('div');
//     date.className = 'grid-item';
//     // let currentDate = new Date();
//     // let day = currentDate.getDate();
//     // let month = currentDate.getMonth()+1;
//     // let year = currentDate.getFullYear();
//     // console.log(day+"/"+month+"/"+year)
//     // date.innerText = day+"/"+month+"/"+year;
//     date.innerText = new Date();
//     date.style.overflow = "hidden";


//     row.appendChild(id);
//     row.appendChild(title);
//     row.appendChild(desc);
//     row.appendChild(date);
//     // row.appendChild();

//     console.log(title, desc, id);

//     table.appendChild(row);

//     // </div><div class="row">
//     //                 <div class="id grid-item">ID</div>
//     //                 <div class="title grid-item">TITLE</div>
//     //                 <div class="desc grid-item">DESCRIPTION</div>
//     //                 <div class="date grid-item">DATE</div>
//     //                 <div class="select grid-item">SELECT</div>
//     //             </div>
// }

function addTask() {
    let taskTitle = document.querySelector('#title-box').value;
    let taskDesc = document.querySelector('#description-box').value;
    operations.addTask(taskTitle, taskDesc);
    showTask();
    document.querySelector('#title-box').value = "";
    document.querySelector('#description-box').value = "";
    showTask();


}

function showTask() {
    body.innerText = "";
    operations.taskList.forEach(obj => {

        body = document.querySelector('.grid-body');

        console.log('body', body);
        let row = document.createElement('div');
        row.className = 'row';

        let id = document.createElement('div');
        id.className = 'grid-item';
        id.innerText = obj.id;

        let title = document.createElement('div');
        title.className = 'grid-item';
        title.innerText = obj.title;

        let desc = document.createElement('div');
        desc.className = 'grid-item';
        desc.innerText = obj.desc;

        let date = document.createElement('div');
        date.className = 'grid-item';
        date.innerText = obj.date;
        date.style.overflow = "hidden";

        let select = document.createElement('input');
        select.setAttribute('type', 'checkbox');
        select.setAttribute('value', obj.id)
        select.addEventListener('change', selectTask);

        row.appendChild(id);
        row.appendChild(title);
        row.appendChild(desc);
        row.appendChild(date);
        row.appendChild(select);
        // row.appendChild();
        console.log(title, desc, id);
        body.appendChild(row);
    });
}

function selectTask() {
    console.log('id', this.value);
    let id = this.value;
    operations.toggleTask(this.value);
    if (id) {
        let deleteBtn = document.querySelector('#delete-btn');
        console.log(deleteBtn);
        // deleteBtn.addEventListener('click', deleteTask(id));
        deleteBtn.addEventListener('click', function () {
            console.log("Delete Task Called")
            operations.deleteTask(id);
            showTask();
        });

        let updateBtn = document.querySelector('#update-btn');
        console.log(updateBtn);
        updateBtn.addEventListener('click', function () {
            console.log("Update Task Called")
            // operations.deleteTask(id);
            let data = operations.updateTask(id);
            let taskTitle = document.querySelector('#title-box');
            taskTitle.value = data[0];
            let taskDesc = document.querySelector('#description-box');
            taskDesc.value = data[1];
            let inputBox = document.getElementById('input-box');
            console.log('Before blur')
            inputBox.addEventListener('blur', function () {
                console.log('blur event called')
                operations.updateTaskList(id, taskTitle, taskDesc);
            })
            showTask();
        });
    }
}

// function deleteTask(id) {
//     console.log("Delete Task Called")
//     operations.deleteTask(id);
// }