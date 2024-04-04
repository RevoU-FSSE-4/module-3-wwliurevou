// Place your code here
// Add any additional code necessary to fulfill the requirements of the assignment

const newTask = document.getElementById("newTask");
const addTaskBtn = document.getElementById("addTaskBtn");
const completeBtn = document.getElementsByClassName("complete");
const deleteBtn = document.getElementsByClassName("delete")
const lists = document.getElementById("lists");

async function fetchData() {
	try {
		//const request = new Request("https://module3-api-is2m.onrender.com/random-todos");
		const response = await fetch("https://module3-api-is2m.onrender.com/random-todos");
		const sampleData = await response.json();
		sampleData.forEach(task => {
			createElementTask(task)
		})
	}



	catch (error) {
		const errorMsg = document.createElement("P");
		errorMsg.textContent = "Failed to fetch data!";
		errorMsg.style.backgroundColor = 'red';
		newTask.appendChild(errorMsg);
	}
}




//return await response.json();

// function displaySampleData(sampleData) {
//    lists.innerHTML = ""
//    sampleData.forEach(task => {
//       const td = addTask(task)
//       lists.appendChild(td)
//    })
// }

fetchData()

addTaskBtn.addEventListener('click', addTask);

//Create Element Task to Fetch Data from API 
function createElementTask(task) {
	let count = 1;
	let newTableRow = document.createElement("tr");
	let newDataCell = document.createElement("td");
	newDataCell.textContent = task

	//completed Button 
	const completeBtn = document.createElement('button')
	completeBtn.classList.add('complete')
	completeBtn.innerText = 'Complete';
	completeBtn.addEventListener('click', (e) => {
		completeBtn.style.backgroundColor = "#808080"
		completeBtn.innerText = 'Task Completed'


	})
	//deleted Button 
	const deleteBtn = document.createElement('button')
	deleteBtn.classList.add('delete')
	deleteBtn.innerText = 'Delete';
	deleteBtn.addEventListener('click', (e) => {
		lists.removeChild(newTableRow);
	})
	lists.appendChild(newTableRow);
	newTableRow.appendChild(newDataCell);
	newTableRow.appendChild(completeBtn);
	newTableRow.appendChild(deleteBtn);
	newTask.value = "";
}

//Add Task for user to manually input the task 

function addTask() {

	if (newTask.value == "") {
		alert("You must write something!");
	} else {
		let newTableRow = document.createElement("tr");

		let newDataCell = document.createElement("td");
		newDataCell.textContent = document.getElementById("newTask").value;


		//completed Button 
		const completeBtn = document.createElement('button')
		completeBtn.classList.add('complete')
		completeBtn.innerText = 'Complete';
		completeBtn.addEventListener('click', (e) => {
			completeBtn.style.backgroundColor = "#808080"
			completeBtn.innerText = 'Task Completed'


		})
		//deleted Button 
		const deleteBtn = document.createElement('button')
		deleteBtn.classList.add('delete')
		deleteBtn.innerText = 'Delete';
		deleteBtn.addEventListener('click', (e) => {
			lists.removeChild(newTableRow);
		})
		lists.appendChild(newTableRow);
		newTableRow.appendChild(newDataCell);
		newTableRow.appendChild(completeBtn);
		newTableRow.appendChild(deleteBtn);
		newTask.value = "";
	}
}







// let newTableRow = document.createElement("tr");
// let newDataCell = document.createElement("td");
// let tbody = document.getElementById("lists");
//clone the button
// function cloneElement() {
//    const buttons = document.getElementById("theButtons");
//    const clonedButtons = buttons.cloneNode(true);
//    container.appendChild(clonedButtons);
// }

// myButton.addEventListener("click", function () {
//    newTableRow;
//    newDataCell.textContent = document.getElementById("newTask").value;
//    tbody.appendChild(newTableRow);
//    newTableRow.appendChild(newDataCell);
//    newTableRow.appendChild(clonedButtons);
// });

// function addTask() {
//    if (newTask.value == "") {
//       alert("You must write something!");
//    } else {
//       let newTableRow = document.createElement("tr");
//       let newDataCell = document.createElement("td");
//       let lists = document.getElementById("lists");
//       let clonedButtons = completeRemoveBtn.cloneNode(true);
//       newDataCell.textContent = document.getElementById("newTask").value;
//       lists.appendChild(newTableRow);
//       newTableRow.appendChild(newDataCell);
//       newTableRow.appendChild(clonedButtons);
//    }
//    newTask.value = "";
// }


