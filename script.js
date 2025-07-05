 let todoList=[];
        const onLoad=localStorage.getItem("todoList");
        if(onLoad){
            todoList=JSON.parse(onLoad);
            displayItem();
        }
        function toDoAdd(){
            let todoElement=document.querySelector('#todo');
            let todoDate=document.querySelector('#date');
            todoList.push({item:todoElement.value,dueDate:todoDate.value});
            storeLocalStorage();
            todoElement.value='';
            todoDate.value=''; 
            displayItem();
  
        }   
       function displayItem(){
            let newHTML='';
           for(let i=0; i<todoList.length;i++){
            let {item,dueDate}=todoList[i];
            newHTML+=`
            <span>${item}</span>
            <span>${dueDate}</span>
            <button onClick="todoList.splice(${i},1);
            storeLocalStorage();
            displayItem()""; id="deleteItem"  >Delete</button>`;

           }
           document.querySelector('.todoContainer').innerHTML=newHTML;
       }
       function storeLocalStorage(){
        localStorage.setItem('todolist', JSON.stringify(todoList));
       }
       
        