const inputFiled = document.querySelector("#inputFiled");
const inputBtn = document.querySelector("#addBtn");
const menuItems = document.querySelector("#menuItems");




inputBtn.addEventListener("click", () => {
  const value = inputFiled.value;
  console.log(value);

  let liEle = document.createElement("li");
  liEle.textContent = value;
  menuItems.appendChild(liEle);
  let delEle = document.createElement("Button");
  delEle.textContent = "Delete";
  liEle.appendChild(delEle);
  delEle.classList.add("delete-button");
  delEle.addEventListener('click', () => {
    liEle.remove();
})

  localStorage.setItem("todoItem", value);
  inputFiled.value = "";
});

window.addEventListener('load', () => {
  const localStorageData = localStorage.getItem("todoItem");
  console.log(localStorageData);
})