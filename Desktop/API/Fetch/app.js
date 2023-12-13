async function getData() {
  const response = await fetch("https://api.github.com/repos/bende112/Week1_BuildWebsite");
  console.log(response);
  console.log("HTTP response", response);

  const json = await response.json();
  console.log("JSON DATA:", json);
  return json;

}

async function displayData(){
  const data = await getData();

const ul = document.getElementById("todoList");
for (let i = 0; i < data.length; i++) {
  const li = document.createElement("li");

  li.textContent = data[i].stargazers_count;
  li.addEventListener("click", function () {
  li.classList.toggle("completed");
  });


if (data[1].completed ===true) {
  li.classList.add("completed");
}
ul.appendChild(li);
}
}
displayData();



