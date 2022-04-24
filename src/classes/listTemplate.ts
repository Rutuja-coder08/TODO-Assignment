import { HasFormatter } from '../model/hasFormatter.interface';
import { TodoItem } from './todoitem';

export class TodoTemplate {
    constructor(private container : HTMLUListElement) {}
    render(type : string, item : HasFormatter){
        const listItem = document.createElement("li");
        listItem.className = "list-group-item"
        const heading = document.createElement("h5");
        heading.innerHTML = type.toUpperCase();
        const paragraph = document.createElement("p");
        paragraph.innerHTML = item.format();
        const btnDelete =document.createElement("button");
        btnDelete.addEventListener("click", (event : Event) => {
           //listItem.removeChild();
            console.log("Delete")
        })
        btnDelete.innerHTML = "Delete";
        btnDelete.setAttribute("id", "btnDelete");
        btnDelete.setAttribute('class','btn btn-primary');
        btnDelete.setAttribute('style','margin-right:16px');
        const btnEdit =document.createElement("button");
        // btnEdit.addEventListener("click", (event : Event) => {
        //     event.preventDefault();
        //     console.log("Edit")
        // })
        btnEdit.innerHTML = "Edit";
        btnEdit.setAttribute('class','btn btn-primary');
        btnEdit.setAttribute('style','margin-right:16px');
        listItem.appendChild(heading);
        listItem.appendChild(paragraph);
        listItem.appendChild(btnDelete);
        listItem.appendChild(btnEdit);
        this.container.appendChild(listItem);  
    }
}