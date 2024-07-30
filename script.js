document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.querySelector("#newtask input");
    const taskSection = document.querySelector(".tasks");

    taskInput.addEventListener("keyup", (e) => {
        if (e.key === "Enter") {
            createTask();
        }
    });

    document.querySelector("#push").onclick = function() {
        createTask();
    }

    function createTask() {
        if (taskInput.value.trim().length === 0) {
            window.alert("The task field is blank. Enter a task name and try again.");
        } else {
            taskSection.innerHTML += `
                <div class="task">
                    <label class="taskname">
                        <input type="checkbox" onclick="updateTask(this)" >
                        <p>${taskInput.value}</p>
                    </label>
                    <div class="delete">
                        <i class="uil uil-trash"></i>
                    </div>
                </div>
            `;

            taskInput.value = "";

            var current_task = document.querySelectorAll(".delete");
            for (var i = 0; i < current_task.length; i++) {
                current_task[i].onclick = function() {
                    this.parentNode.remove();
                }
            }

        }
    }


});

function updateTask(task) {
    let taskItem = task.parentElement.lastElementChild;
    if (task.checked) {
        taskItem.classList.add("checked");
    } else {
        taskItem.classList.remove("checked");
    }
}
