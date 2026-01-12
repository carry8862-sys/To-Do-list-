            ////To-Do List
 
let input = document.getElementById("text");
let submmit = document.getElementById("btn");
let tasklist = document.getElementById("list");

submmit.addEventListener("click", function (e) {
  // console.log("btn click");

  e.preventDefault();
  if (input.value.trim() === "") {
    alert("please enter a task");
    return;
  }
  let li = document.createElement("li");
  li.innerText = input.value;
  let text = input.value;

  ///edit button
  let edit = document.createElement("button");
  edit.innerText = "edit";
  ///styling
  edit.style.height = "22px";
  edit.style.backgroundColor = "lightgreen";
  edit.style.border = "1px solid black";
////eventlistner
  edit.addEventListener("click", function () {
    let newtext = prompt("enter new task", li.firstChild.textContent);
    if (newtext != null && newtext != "") {
      li.firstChild.textContent = newtext;
    }
  });

  ///Delete button
  let dltBtn = document.createElement("button");
  dltBtn.innerText = "delete";
  ///styling
  dltBtn.style.height = "22px";
  dltBtn.style.backgroundColor = "red";
  dltBtn.style.color = "white";
  dltBtn.style.border = "1px solid black";
  /////eventlistner
  dltBtn.addEventListener("click", function () {
    li.remove();
  });
  
  li.append(" ");
  li.appendChild(edit);
  li.append(" ");
  li.append(dltBtn);
  tasklist.append(li);
  input.value = "";
});