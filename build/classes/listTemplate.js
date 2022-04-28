export class TodoTemplate {
    constructor(container) {
        this.container = container;
    }
    render(type, item) {
        let listItem = document.createElement("li");
        listItem.className = "list-group-item";
        const heading = document.createElement("h5");
        heading.innerHTML = type.toUpperCase();
        const paragraph = document.createElement("p");
        paragraph.innerHTML = item.format();
        const btnDelete = document.createElement("button");
        btnDelete.addEventListener("click", (event) => {
            //listItem.removeChild();
            this.container.removeChild(listItem);
        });
        btnDelete.innerHTML = "Delete";
        btnDelete.setAttribute('id', 'btnDelete');
        btnDelete.setAttribute('class', 'btn btn-primary');
        btnDelete.setAttribute('style', 'margin-right:16px');
        const btnEdit = document.createElement("button");
        btnEdit.addEventListener("click", (event) => {
            event.preventDefault();
            console.log("Edit");
            const label = document.createElement("LABEL");
            const yv = "New Title:";
            label.innerHTML = yv;
            label.setAttribute('style', 'margin-left:100px');
            document.body.appendChild(label);
            const input = document.createElement("input");
            input.type = "text";
            input.setAttribute('style', 'margin-left:16px');
            document.body.appendChild(input);
            const btnUpdate = document.createElement("button");
            btnUpdate.innerHTML = "Update";
            btnUpdate.setAttribute("id", "btnUpdate");
            btnUpdate.setAttribute('class', 'btn btn-primary');
            btnUpdate.setAttribute('style', 'margin-right:16px');
            listItem.appendChild(btnUpdate);
            btnUpdate.addEventListener("click", (event) => {
                event.preventDefault();
                console.log("Updated");
                const txtNewTitle = document.getElementById("txtTitle");
                txtNewTitle.value = input.value;
                heading.innerHTML = txtNewTitle.value;
                document.body.removeChild(label);
                document.body.removeChild(input);
            });
        });
        btnEdit.innerHTML = "Edit";
        btnEdit.setAttribute('class', 'btn btn-primary');
        btnEdit.setAttribute('style', 'margin-right:16px');
        listItem.appendChild(heading);
        listItem.appendChild(paragraph);
        listItem.appendChild(btnDelete);
        listItem.appendChild(btnEdit);
        this.container.appendChild(listItem);
    }
}
