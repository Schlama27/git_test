const container = document.querySelector("#container");

const firstContent = document.createElement("div");
firstContent.classList.add("content");
firstContent.innerHTML = "<p>Hey I'm red!</p>";
firstContent.style.color = "red";
container.appendChild(firstContent);

const secondContent = document.createElement("div");
secondContent.classList.add("content");
secondContent.innerHTML = "<h3>I'm a blue h3!</h3>";
secondContent.style.color = "blue";
container.appendChild(secondContent);

const thirdContent = document.createElement("div");
thirdContent.classList.add("content");
thirdContent.setAttribute("id", "third");
thirdContent.setAttribute("style", "border: 1px; border-style: solid; border-color: black; background: pink;")
container.appendChild(thirdContent);
const thirdContainer = document.querySelector("#third");
//Two different methods to add multiple tags to one div
// Created a new container for thirdContent to append header and para to
const header = document.createElement("h1");
header.textContent = "I'm in a div!";
thirdContainer.appendChild(header);
const para = document.createElement("p");
para.textContent = "ME TOO!";
thirdContainer.appendChild(para);
//Used += innerHTML to insert two html tags to one div
const fourthContent = document.createElement("div");
fourthContent.classList.add("content");
fourthContent.innerHTML = "<h3>A header</h3>";
fourthContent.innerHTML += "<p>Random words</p>";
container.appendChild(fourthContent);  