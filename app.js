const input = document.querySelector("#myInput");
const btn = document.querySelector("#btn");
const list = document.querySelector("#list");
const msg = document.querySelector("#msg");

let count = 0;
function checkTodo() {
    if (count === 0) {
        msg.style.display = "block";  // block means show
    } else {
        msg.style.display = "none";
    }
}

btn.addEventListener("click", addTodo);
list.addEventListener("click", deleteAndCompleteTodo);

function addTodo(e) {
    checkTodo();
    e.preventDefault();
    const inputValue = input.value;
    // Create div
    const div = document.createElement("div");
    // create li
    const li = document.createElement("li");
    li.innerText = inputValue;
    // create delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.style.padding = "15px";
    deleteBtn.style.borderRadius = "5px";
    deleteBtn.style.margin = "5px";
    deleteBtn.style.cursor = "pointer";
    deleteBtn.style.backgroundColor = "purple"
    deleteBtn.style.color = "pink"

    // create complete button
    const completeBtn = document.createElement("button");
    completeBtn.innerText = "Complete";
    completeBtn.style.padding = "15px";
    completeBtn.style.borderRadius = "5px";
    completeBtn.style.margin = "5px";
    completeBtn.style.cursor = "pointer";
    completeBtn.style.backgroundColor = "purple"
    completeBtn.style.color = "pink"

    div.appendChild(li);
    div.appendChild(deleteBtn);
    div.appendChild(completeBtn);

    list.appendChild(div);
    count++;
    checkTodo();

    input.value = "";
}

function deleteAndCompleteTodo(e) {
    if (e.target.innerText === "Complete") {
        e.target.parentElement.classList.toggle('complete');
    }
    if (e.target.innerText === "Delete") {
        e.target.parentElement.remove();
        count--;
        checkTodo();
    }
}





// const input = document.querySelector("#myInput");
// const btn = document.querySelector("#btn");
// const list = document.querySelector("#list");
// const msg = document.querySelector("#msg");

// // Global Values

// let count = 0;
// function checkTodo() {
//     if (count === 0) {
//         msg.style.display = "block";  // block means show
//     } else {
//         msg.style.display = "none";
//     }
// }

// // Event Listeners

// btn.addEventListener("click", addTodo);
// list.addEventListener("click", deleteAndCompleteTodo);

// // Functions

// function addTodo(e) {
//     checkTodo();
//     e.preventDefault();
//     const inputValue = input.value;
//     // Create div
//     const div = document.createElement("div");
//     // create li
//     const li = document.createElement("li");
//     li.innerText = inputValue;
//     // create delete button
//     const deleteBtn = document.createElement("button");
//     deleteBtn.innerText = "Delete";
//     // create complete button
//     const completeBtn = document.createElement("button");
//     completeBtn.innerText = "Complete";

//     div.appendChild(li);
//     div.appendChild(deleteBtn);
//     div.appendChild(completeBtn);

//     list.appendChild(div);
//     count++;
//     checkTodo();

//     input.value = "";
// }

// function deleteAndCompleteTodo(e) {
//     if (e.target.innerText === "Complete") {
//         e.target.parentElement.classList.toggle("complete");
//     }

//     if (e.target.innerText === "Delete") {
//         e.target.parentElement.remove();
//         count--;
//         checkTodo();
//     }
// }

