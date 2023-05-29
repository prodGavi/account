import Action from "./classes/Action.js"
import ActionsManager from "./classes/ActionsManager.js";


let manager = new ActionsManager();
let food = new Action("expense", "Fruits", 200)
manager.addAction(food)
manager.addAction(new Action("income", "Salary", 10000))
console.log(manager.actions);
//manager.deleteAction(food.id)
//console.log(manager.actions);
manager.updateAction(food.id, 350)
manager.calcBalance()
console.log(manager.balance);

function showFunctionsInTable(actions) {
    document.getElementById("actions").innerHTML = "";
    for (let action of manager.actions) {
        document.getElementById("actions").innerHTML += `<tr class=${action.type == "income" ? "text-success" : "text-danger"}>
        <td>${action.description} </td>
        <td>${action.amount} </td>
        <td><i class="fa-regular fa-pen-to-square")" onclick="updateAction(${action.id})"></i> </td>
        <td><i class="fa-regular fa-trash-can" onclick="deleteAction(${action.id})"></i> </td> 
        </tr>`;

    }
}

showFunctionsInTable()

window.addNewAction = () => {
    let type = document.getElementById("type").value;
    let description = document.getElementById("description").value;
    let amount = +document.getElementById("amount").value;
    let newAction = new Action(type, description, amount)
    manager.addAction(newAction)
    console.log(manager.actions);
    showFunctionsInTable()
}

window.updateAction = (id) => {
    let newAmount = prompt("Enter New Value:");
    if (newAmount == null || newAmount == "" || newAmount != +newAmount) alert("Sorry! Something Went Wrong.")
    else {
        manager.updateAction(id, +newAmount)
        showFunctionsInTable()
    }
}

window.deleteAction = (id) => {
    let confirmChange = confirm("Are you Sure?");
    if (confirmChange == true) {
        manager.deleteAction(id)
        showFunctionsInTable()
    } else {
        alert("OKeedokee")
    }

}
