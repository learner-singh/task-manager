class Task {
    constructor(id, title, desc) {
        //Initialize variables
        this.id = id;
        this.title = title;
        this.desc = desc;
        this.date = new Date();
        this.selected = false;
    }
}

var operations = {
    id: 0,
    taskList: [],
    addTask: function (title, desc) {
        this.id++;
        let currentTask = new Task(this.id, title, desc);
        this.taskList.push(currentTask);
        console.log(this.taskList);
    },

    toggleTask: function(id) {
        var selectedTask = this.taskList.filter(obj => {
            return obj.id == id;
        });
        console.log(selectedTask);
        selectedTask[0].selected = !selectedTask[0].selected;
    },
    deleteTask: function (id) {
        var newTaskList = this.taskList.filter( obj => obj.id != id);
        this.taskList = newTaskList;
        console.log("New Task List",this.taskList);
    },
    updateTask: function () {
        console.log(" model update task function called")
        var data = [];
        var currentTask = this.taskList.filter( obj => {
            return obj.id == this.id;
        });
        console.log("current Task", currentTask);
        var title = currentTask[0].title;
        var desc = currentTask[0].desc;
        data.push(title);
        data.push(desc);
        console.log(title,desc, data);
        return data; 
    },
    updateTaskList: function(taskTitle, taskDesc) {
        var selectedTask = this.taskList.filter(obj => {
            return obj.id == id;
        });
        selectedTask[0].title = taskTitle;
        selectedTask[0].desc = taskDesc;
        console.log('model umdated 2', selectedTask[0].title);
    },
    searchTask: function () {

    }

}