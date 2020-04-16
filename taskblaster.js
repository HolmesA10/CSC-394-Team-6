function createCard(taskDescription){
    document.getElementById("tasks_todo")
        .insertAdjacentHTML('beforeend',`
            <div class="card">
                <p>${taskDescription}</p>
                <div class="task-interaction">
                    <button data-state="todo" onclick="taskButtonOnClickHandler.call(this)">Start Task</button>
                </div>
            </div>
        `);
}

function taskButtonOnClickHandler(){
    var card=this.parentNode.parentNode;
    card.remove();
    switch(this.dataset.state){
        case "todo":
            this.textContent = "Complete Task"
            this.dataset.state = "inprogress"
            document.getElementById("tasks_inprogress").appendChild(card);
            break;
        case "inprogress":
            this.remove();
            document.getElementById("tasks_completed").appendChild(card);
            break;
    }
}
