const todolist = document.getElementById('todolist');
const newtodoinput = document.getElementById('newToDoInput');
const addtodobtn = document.getElementById('addTodoBtn');


addtodobtn.addEventListener("click",()=>{

    const newtodotext = newtodoinput.value;


    if(newtodotext!==""){

        const newtodoitem = document.createElement("li");

        newtodoitem.innerText = newtodotext;

        const deletetodobtn = document.createElement("button");
        deletetodobtn.innerText = "X" ;

        deletetodobtn.classList.add("delet-todo-btn");

        deletetodobtn.addEventListener("click",function(){

            newtodoitem.remove();

        });

        newtodoitem.appendChild(deletetodobtn);
        todolist.appendChild(newtodoitem);
        newtodoinput.value = "" ;

    }
});