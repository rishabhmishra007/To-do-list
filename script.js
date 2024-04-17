var t1 = gsap.timeline();

t1.from(".todo-app h2,.todo-app img",{
    y:-50,
    duration:1,
    delay:.5,
    opacity:0,
    // stagger:0.5
})

t1.from("input, button",{
    x:50,
    duration:1,
    delay:0,
    opacity:0
})
t1.from(".footer p",{
    y:-40,
    duration:1,
    repeat:-1,
    yoyo:true,
    opacity:0
})


const inputBox = document.querySelector("#input-box");
const listContainer = document.querySelector("#list-container");

function addtask() {
    if (inputBox.value === '') {
        alert("you haven't written anything!")
    }
    else {
        let li = document.createElement("li");
        li.innerText = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }


inputBox.value = "";
}   

inputBox.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        addtask();
    }
});

listContainer.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();

    }
})

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function loadData() {
    listContainer.innerHTML = localStorage.getItem("data");
}
loadData();

