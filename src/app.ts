import { TodoTemplate } from './classes/listTemplate.js'
import { TodoItem } from './classes/todoitem.js'
//import { Receipt } from './classes/receipts.js'
import { HasFormatter } from './model/hasFormatter.interface.js'
import { TodoType } from './model/todoType.interface.js'


window.onload = () => {
    const btnAdd = document.getElementById("btnAdd") as HTMLButtonElement;
    const txtTitle = document.getElementById("txtTitle") as HTMLInputElement;
    const txtCreatedAt = document.getElementById("created-at") as HTMLInputElement;
    const txtBody = document.getElementById("txtBody") as HTMLInputElement;
    const btnDelete=document.getElementById("btnDelete") as HTMLButtonElement;
    const uList = document.getElementById("list") as HTMLUListElement;
    const renderList = new TodoTemplate(uList);

    btnAdd.addEventListener("click", (event : Event) => {
        event.preventDefault();
       // console.log("the items")
        let todo : TodoType = {
            title : txtTitle.value,
            body : txtBody.value,
            createdAt : new Date(txtCreatedAt.value),
        }
       // console.log("the items",todo);
        let doc : HasFormatter;
         
         doc = new TodoItem(todo)
        
        // console.log("the items",doc);
         
            renderList.render("ToDo - "+txtTitle.value, doc)
        })
        
        btnDelete.addEventListener("click", (event : Event) => {
                 event.preventDefault();
                 console.log("Delete")
             })
}