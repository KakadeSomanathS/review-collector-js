const inputFiled = document.querySelector("#inputFiled");
const inputBtn = document.querySelector("#addBtn");
const menuItems = document.querySelector("#menuItems");

const task = [];

inputBtn.addEventListener("click", () => {
  if (inputFiled.value === "") {
    alert("Please Enter the valid data");
  } else {
    const value = inputFiled.value;
    console.log(value);

    task.push(value);
    console.log("Pushing Task", task);

    let liEle = document.createElement("li");

    const textSpan = document.createElement("span");
    textSpan.textContent = value;
    liEle.appendChild(textSpan);

    // Edit button
    const editEle = document.createElement("button");
    editEle.textContent = "Edit";
    liEle.appendChild(editEle);
    editEle.classList.add("edit-btn");

    // Delete button
    let delEle = document.createElement("Button");
    delEle.textContent = "Delete";
    liEle.appendChild(delEle);
    delEle.classList.add("delete-button");
    menuItems.appendChild(liEle);

    // Edit Feature
    editEle.addEventListener("click", () => {
      console.log("I am Editing Button");
      inputFiled.value = textSpan.textContent;
      liEle.remove();
    });

    // Delete Feature
    delEle.addEventListener("click", () => {
      liEle.remove();
    });

    localStorage.setItem("todoItem", value);
    inputFiled.value = "";
  }
});

// window.addEventListener("load", () => {
//   const localStorageData = localStorage.getItem("todoItem");
//   console.log(localStorageData);
// });
