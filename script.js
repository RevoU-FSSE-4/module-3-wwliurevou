// Place your code here
// Add any additional code necessary to fulfill the requirements of the assignment
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
document.addEventListener('DOMContentLoaded', function () {
    var newTask = document.getElementById("newTask");
    var addTaskBtn = document.getElementById("addTaskBtn");
    //const completeBtn: HTMLButtonElement = document.getElementsByClassName("complete") 
    //const deleteBtn: HTMLButtonElement = document.getElementsByClassName("delete")  ;
    var lists = document.getElementById("lists");
    fetchData();
    function fetchData() {
        return __awaiter(this, void 0, void 0, function () {
            var response, sampleData, error_1, errorMsg;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, fetch("https://module3-api-is2m.onrender.com/random-todos")];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        sampleData = _a.sent();
                        sampleData.forEach(function (task) {
                            createElementTask(task);
                        });
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        errorMsg = document.createElement("P");
                        errorMsg.textContent = "Failed to fetch data!";
                        errorMsg.style.backgroundColor = 'red';
                        newTask.appendChild(errorMsg);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    }
    //Create Element Task to Fetch Data from API 
    function createElementTask(task) {
        var count = 1;
        var newTableRow = document.createElement("tr");
        var newDataCell = document.createElement("td");
        newDataCell.textContent = task;
        //completed Button 
        var completeBtn = document.createElement('button');
        completeBtn.classList.add('complete');
        completeBtn.innerText = 'Complete';
        completeBtn.addEventListener('click', function (e) {
            completeBtn.style.backgroundColor = "#808080";
            completeBtn.innerText = 'Task Completed';
        });
        //delete Button 
        var deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete');
        deleteBtn.innerText = 'Delete';
        deleteBtn.addEventListener('click', function (e) {
            lists.removeChild(newTableRow);
        });
        lists.appendChild(newTableRow);
        newTableRow.appendChild(newDataCell);
        newTableRow.appendChild(completeBtn);
        newTableRow.appendChild(deleteBtn);
    }
    ;
    // Event listener for adding a new task
    addTaskBtn.addEventListener('click', function () {
        var taskContent = document.getElementById("newTask").value;
        if (taskContent == "") {
            alert("You must write something!");
        }
        else {
            addTask(taskContent);
            taskContent = '';
        }
        ;
    });
    function addTask(content) {
        var newTableRow = document.createElement("tr");
        var newDataCell = document.createElement("td");
        newDataCell.textContent = content;
        //completed Button 
        var completeBtn = document.createElement('button');
        completeBtn.classList.add('complete');
        completeBtn.innerText = 'Complete';
        completeBtn.addEventListener('click', function (e) {
            completeBtn.style.backgroundColor = "#808080";
            completeBtn.innerText = 'Task Completed';
        });
        //deleted Button 
        var deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete');
        deleteBtn.innerText = 'Delete';
        deleteBtn.addEventListener('click', function (e) {
            lists.removeChild(newTableRow);
        });
        lists.appendChild(newTableRow);
        newTableRow.appendChild(newDataCell);
        newTableRow.appendChild(completeBtn);
        newTableRow.appendChild(deleteBtn);
    }
});
