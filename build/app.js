import { TodoTemplate } from './classes/listTemplate.js';
import { TodoItem } from './classes/todoitem.js';
window.onload = () => {
    const btnAdd = document.getElementById("btnAdd");
    const txtTitle = document.getElementById("txtTitle");
    const txtCreatedAt = document.getElementById("created-at");
    const txtBody = document.getElementById("txtBody");
    //const btnDelete=document.getElementById("btnDelete") as HTMLButtonElement;
    const uList = document.getElementById("list");
    const renderList = new TodoTemplate(uList);
    let doc;
    btnAdd.addEventListener("click", (event) => {
        event.preventDefault();
        // console.log("the items")
        let todo = {
            title: txtTitle.value,
            body: txtBody.value,
            createdAt: new Date(txtCreatedAt.value),
        };
        // console.log("the items",todo);
        doc = new TodoItem(todo);
        // console.log("the items",doc);
        renderList.render("ToDo - " + txtTitle.value, doc);
    });
};
