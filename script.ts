// Place your code here
// Add any additional code necessary to fulfill the requirements of the assignment

document.addEventListener('DOMContentLoaded', () => {
const newTask: HTMLElement = document.getElementById("newTask") as HTMLInputElement ;
const addTaskBtn: HTMLButtonElement  = document.getElementById("addTaskBtn") as HTMLButtonElement;
//const completeBtn: HTMLButtonElement = document.getElementsByClassName("complete") 
//const deleteBtn: HTMLButtonElement = document.getElementsByClassName("delete")  ;
const lists: HTMLUListElement  | null = document.getElementById("lists") as HTMLUListElement;

fetchData()
async function fetchData():Promise<void> {
	try {
		//const request = new Request("https://module3-api-is2m.onrender.com/random-todos");
		const response = await fetch("https://module3-api-is2m.onrender.com/random-todos");
		const sampleData = await response.json();
		sampleData.forEach(task:string => {
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




//Create Element Task to Fetch Data from API 
function createElementTask(task:string) : void {
	let count = 1;
	let newTableRow = document.createElement("tr");
	let newDataCell = document.createElement("td");
	newDataCell.textContent = task

	//completed Button 
	const completeBtn: HTMLButtonElement = document.createElement('button')
	completeBtn.classList.add('complete')
	completeBtn.innerText = 'Complete';
	completeBtn.addEventListener('click', (e) => {
  completeBtn.style.backgroundColor = "#808080"
	completeBtn.innerText = 'Task Completed'
	})
	//delete Button 
	const deleteBtn: HTMLButtonElement = document.createElement('button')
	deleteBtn.classList.add('delete')
	deleteBtn.innerText = 'Delete';
	deleteBtn.addEventListener('click', (e) => {
	lists?.removeChild(newTableRow);
	})
	
	lists.appendChild(newTableRow);
	newTableRow.appendChild(newDataCell);
	newTableRow.appendChild(completeBtn);
	newTableRow.appendChild(deleteBtn);
};

   // Event listener for adding a new task
	 addTaskBtn.addEventListener('click', () => {
		let taskContent: string = (<HTMLInputElement>document.getElementById("newTask")).value;
		if (taskContent== "") {
			alert("You must write something!");
		} else { addTask(taskContent);
			taskContent = '';
		};
	});

function addTask(content: string):void {

	let newTableRow = document.createElement("tr");
	let newDataCell = document.createElement("td");
		newDataCell.textContent = content;
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
	}

});
