const input_search = document.getElementById("input_box");
const list_container = document.getElementById("list-container");

// function to add task
function add_task() {
    if(input_search.value === "") {
        alert("you must write something");      // alert if user forgot to enter task
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = input_search.value;
        list_container.appendChild(li);         // adds a task when user clicks add button

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);                   // adds a cross icon at the end of the task
    }
    input_search.value = "";
    save();
}

// even listener for check, uncheck and remove the task
list_container.addEventListener("click", function(e) {
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        save()
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        save()
    }
}, false);

// to save data in our local browser storage
function save() {
    localStorage.setItem("data", list_container.innerHTML);
}

// to show the stored data from local browser storage
function show_data() {
    list_container.innerHTML = localStorage.getItem("data");
}
show_data()     // calling the method when ever the scipt loads