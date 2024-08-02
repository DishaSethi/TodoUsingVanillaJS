document.addEventListener('DOMContentLoaded',()=>{
    const todoInput=document.getElementById('todo-input');
    const addTask=document.getElementById('add-task');
    const todoList=document.getElementById('todo-list');


// Add task
addTask.addEventListener('click',()=>{
    const task=todoInput.value.trim();

    if(task){
        const list=JSON.parse(localStorage.getItem('list'))||[];
        list.push(task);
        localStorage.setItem('list',JSON.stringify(list));
        todoInput.value='';
        loadList();
    }

});

const loadList=()=>{
    const list=JSON.parse(localStorage.getItem("list"));
    todoList.innerHTML='';
    list.forEach((todo,index)=>{
        const li=document.createElement('li');
        li.textContent=todo;

        // make a remove button

        const removebtn=document.createElement('button');
        removebtn.textContent='Remove';
        removebtn.addEventListener('click',()=>{
            list.splice(index,1);
            localStorage.setItem('list',JSON.stringify(list));
            loadList();
        });

        li.appendChild(removebtn);
        todoList.appendChild(li);
    });
}

// Initital load of todos when the page is first accessed

loadList();
})