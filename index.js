//PROJECT VALUES
var openProjects = 0;
var onGoingProjects = 0;
var closedProjects = 0;
var doneProjects = 0;

//INCREMENTING DATA VARIABLES ON CHANGE OF STATUS INPUT
const tableRows = document.querySelectorAll("tbody tr");
var statusdata;
var prioritydata;
tableRows.forEach((tableRow) => {
	prioritydata = tableRow.children[3];
	statusdata = tableRow.children[9];
	// console.log(prioritydata.textContent);
	// console.log(prioritydata.value);
	// console.log("shit", prioritydata.innerHTML);
	if (prioritydata.innerHTML == "high") {
		prioritydata.classList.add("highClass");
	}
	if (prioritydata.innerHTML == "medium") {
		prioritydata.classList.add("midClass");
	}
	if (prioritydata.innerHTML == "low") {
		prioritydata.classList.add("lowClass");
	}

	if (statusdata.innerText == "open") {
		statusdata.classList.add("openClass");
		openProjects++;
	}
	if (statusdata.innerText == "on Going") {
		statusdata.classList.add("onGoingClass");
		onGoingProjects++;
	}
	if (statusdata.innerText == "closed") {
		statusdata.classList.add("closedClass");
		closedProjects++;
	}
	if (statusdata.innerText == "done") {
		statusdata.classList.add("doneClass");
		doneProjects++;
	}
});
console.log(doneProjects, closedProjects, onGoingProjects, openProjects);

//  BAR CHART
var barChart = document.getElementById("barChart").getContext("2d");
//BAR CHART INTERACTION
//  BAR CHART FUNCTION
var myChart = new Chart(barChart, {
	type: "bar",
	data: {
		labels: ["OPEN", "ON GOING", "CLOSED", "DONE"],
		datasets: [
			{
				label: ["No of Open Projects"],
				// Projects     No of Completed Projects
				// Projects      Projects       , "On Going", "Closed",
				data: [
					// 2, 51, 5, 59,
					openProjects,
					onGoingProjects,
					closedProjects,
					doneProjects,
				],
				backgroundColor: [
					"rgba(11, 255, 20, 0.6)",
					"rgba(216, 122, 0, 0.6)",
					"rgba(255, 0, 0, 0.6)",
					"rgba(0, 146, 37, 0.6)",
				],
				hoverBackgroundColor: [
					"rgba(11, 255, 20, 0.85)",
					"rgba(216, 122, 0, 0.85)",
					"rgba(255, 0, 0, 0.85)",
					"rgba(0, 146, 37, 0.85)",
				],
				borderColor: [
					"rgb(10, 255, 10)",
					"rgb(255, 120, 0)",
					"rgb(250, 0, 0)",
					"rgb(0, 145, 40)",
				],
				borderWidth: 1.5,
			},
		],
	},
	options: {
		legend: {},
		scales: {
			y: {
				beginAtZero: true,
			},
		},
	},
});

//  HORIZONTAL BAR CHART
var horizontalChart = document
	.getElementById("horizontalChart")
	.getContext("2d");
//  HORIZNTAL BAR FUNCTION
var my2ndChart = new Chart(horizontalChart, {
	type: "bar",
	data: {
		labels: ["DONE", "ON GOING", "OPEN", "CLOSED"],
		datasets: [
			{
				axis: "y",
				label: "No of Projects Done",
				data: [
					// 2, 51, 5, 59,
					doneProjects,
					onGoingProjects,
					openProjects,
					closedProjects,
				],
				backgroundColor: [
					"rgba(0, 146, 37, 0.6)",
					"rgba(216, 122, 0, 0.6)",
					"rgba(11, 255, 20, 0.6)",
					"rgba(255, 0, 0, 0.6)",
				],
				borderColor: [
					"rgb(0, 145, 40)",
					"rgb(255, 120, 0)",
					"rgb(10, 255, 10)",
					"rgb(250, 0, 0)",
				],
				hoverBackgroundColor: [
					"rgb(0, 146, 37)",
					"rgb(216, 122, 0)",
					"rgb(11, 255, 20)",
					"rgb(255, 0, 0)",
				],
				borderWidth: 1.5,
			},
		],
	},
	options: {
		indexAxis: "y",
		legend: {},
		scales: {
			y: {
				beginAtZero: true,
			},
		},
	},
});
//  DOUGHNUT  CHART
var doughnut = document.getElementById("doughnutChart").getContext("2d"); //Chart Element
//  DOUGHNUT CHART FUNCTION
var my3rdChart = new Chart(doughnut, {
	type: "doughnut",
	data: {
		labels: ["DONE", "ON GOING", "OPEN", "CLOSED"],
		datasets: [
			{
				axis: "y",
				label: "# of Votes",
				data: [
					// 2, 51, 5, 59,
					doneProjects,
					onGoingProjects,
					openProjects,
					closedProjects,
				],
				backgroundColor: [
					"rgba(0, 146, 37, 0.6)",
					"rgba(216, 122, 0, 0.6)",
					"rgba(11, 255, 20, 0.6)",
					"rgba(255, 0, 0, 0.6)",
				],
				borderColor: [
					"rgb(0, 145, 40)",
					"rgb(255, 120, 0)",
					"rgb(10, 255, 10)",
					"rgb(250, 0, 0)",
				],
				hoverBackgroundColor: [
					"rgb(0, 146, 37)",
					"rgb(216, 122, 0)",
					"rgb(11, 255, 20)",
					"rgb(255, 0, 0)",
				],
				borderWidth: 1.5,
			},
		],
	},
	options: {
		indexAxis: "y",
		legend: {},
		scales: {
			y: {
				beginAtZero: true,
			},
		},
	},
});

// var body = document.querySelector(".body");
// const barChartWrapper = $("#chart1");
// barChartWrapper.click(() => {
// 	var barChart_Wrapper = barChartWrapper.clone();
// 	console.log(barChart_Wrapper); //jquery nodelist
// 	console.log(barChart_Wrapper[0]); //canvasCont Div
// 	console.log(barChart_Wrapper[0].classList); //canvasCont classList
// 	console.log(barChart_Wrapper[0].lastElementChild); //canvas
// 	console.log(barChart_Wrapper[0].firstElementChild); //canvas header h3
// 	console.log(barChart_Wrapper[0].firstElementChild.firstElementChild); //canvas header h3 span
// 	//console.log(barChart_Wrapper[0].firstElementChild);//canvas header h3 span not added
// 	//append this  <button type="button" class="btn btn-secondary close" data-dismiss="newModal">
// 	//<span aria-hidden="true">&times;</span></button>  to the span

// 	//prepend this <div class="modal fade" id="newModal" tabindex="-1"
// 	// role="dialog" aria-labelledby="chart1" aria-hidden="true"> to the canvasCont
// 	// and append a closing div tag

// 	//add class list to canvas cont modal-body

// 	// console.log(barChart_Wrapper.nextChild);
// 	// barChart_Wrapper[0].classList.add('');
// 	body.append(barChart_Wrapper[0]);
// 	// barChartWrapper.clone().classList.add("newClass");
// 	// window.classList.add("darkWindow");
// 	console.log("my bar chart click is working");
// 	designBarChart();
// });
// $("#chart2").click(() => {
// 	console.log("my horizontalbar chart click is working");
// });

//PRIORITY SELECT TAG
const prioSelect = document.querySelector("[name='priority']");
prioSelect.addEventListener("change", (e) => {
	if (prioSelect.value == "high") {
		prioSelect.classList.toggle("red");
	} else {
		prioSelect.classList.remove("red");
	}
	if (prioSelect.value == "medium") {
		prioSelect.classList.toggle("yellow");
	} else {
		prioSelect.classList.remove("yellow");
	}
	if (prioSelect.value == "low") {
		prioSelect.classList.toggle("green");
	} else {
		prioSelect.classList.remove("green");
	}
});

//STATUS SELECT TAG
const statusSelect = document.querySelector("[name='newStatus']");
statusSelect.addEventListener("change", (e) => {
	if (statusSelect.value == "open") {
		statusSelect.classList.toggle("openG");
	} else {
		statusSelect.classList.remove("openG");
	}
	if (statusSelect.value == "on Going") {
		statusSelect.classList.toggle("goingG");
	} else {
		statusSelect.classList.remove("goingG");
	}
	if (statusSelect.value == "closed") {
		statusSelect.classList.toggle("closedG");
	} else {
		statusSelect.classList.remove("closedG");
	}
	if (statusSelect.value == "done") {
		statusSelect.classList.toggle("doneG");
	} else {
		statusSelect.classList.remove("doneG");
	}
});

// console.log(prioSelect.classList);
// const prioValue = (selOption) => {
// 	if (selOption.value == "high") {
// 		selOption.classList.toggle("red");
// 	} else {
// 		selOption.classList.remove("red");
// 	}
// 	if (selOption.value == "medium") {
// 		selOption.classList.toggle("yellow");
// 	} else {
// 		selOption.classList.remove("yellow");
// 	}
// 	if (selOption.value == "low") {
// 		selOption.classList.toggle("green");
// 	} else {
// 		selOption.classList.remove("green");
// 	}
// };

// //DATE  INPUT FUNCTION
// const dateInput = (dateInput) => {
// 	const Input = dateInput;
// 	const todayDate = new Date();
// 	var day = todayDate.getDate();
// 	if (day < 10) {
// 		day = "0" + day;
// 	}
// 	var month = todayDate.getMonth() + 1;
// 	if (month < 10) {
// 		month = "0" + month;
// 	}
// 	var year = todayDate.getFullYear();
// 	Input.value = `${year}-${month}-${day}`;
// 	// console.log(Input.value);
// };

// //CODE TO SHOW SUBMIT BUTTON
// const newChange = (noteInput) => {
// 	var noteInput = noteInput;
// 	var inputsBtn = noteInput.nextElementSibling;
// 	if (noteInput.value !== "") {
// 		inputsBtn.classList.remove("noshow");
// 		inputsBtn.classList.add("show");
// 	} else {
// 		inputsBtn.classList.remove("show");
// 		inputsBtn.classList.add("noshow");
// 	}
// };

//FORM SUBMISSION
// Get the modal

// var modal = document.getElementById("addProjectForm");
// // var addProjectBtn = document.getElementById("addProject");
// var span = document.getElementById("close");
// // addProjectBtn.onclick = function () {
// // 	modal.style.display = "block";
// // };
// span.onclick = function () {
// 	modal.style.display = "none";
// };
// window.onclick = function (event) {
// 	if (event.target == modal) {
// 		modal.style.display = "none";
// 	}
// };

// const formIgniteButton = document.getElementById("formIgnition");
// const formBody = document.querySelector(".inputFormBody");

// formIgniteButton.addEventListener("click", (e) => {
// 	e.preventDefault;
// 	if (formBody.classList.contains("noDisplay")) {
// 		formBody.classList.add("display");
// 		// console.log(forsmBody.classList);
// 		return true;
// 	}
// 	// console.log("inputFormBody");
// });
// const showForm = () => {
// 	console.log("some text");
// };

// $.post(
// 	"http://localhost:8080/taskmanager/index.php",
//ssends data to the back end php script using the httpRequest
// 	{
// 		name: "Vybz",
// 		status: "This is displaying from my index.js as instructed by ",
// 		newArrray: ["test1", "test2"],
// 	},
// 	(data) => {
// 		var contentDiv = document.getElementById("content");
// 		contentDiv.innerHTML = data;
// 		console.log(data);
// 	}
// );

/*
const newAjaxFunction = () => {
	var xmlHttp = new XMLHttpRequest(); //object
	console.log(xmlHttp);
	xmlHttp.open("POST", "index.php", true);
	//GET is the type of request
	//ajax.. is the url which data is gotten from
	//true signifies it's a a true Ajax request
	xmlHttp.onreadystatechange = () => {
		if (this.readyState == 4 && this.status == 200) {
			document.getElementById("content").innerHTML = this.responseText;
		}
	};
	xmlHttp.send(null);

	document.getElementById("content").innerHTML = this.responseText;
	// $.post(
	// 	"http://localhost:8080/taskmanager/index.php",

	console.log("new function");
};
*/

//NO RECORDS CHECKER
var Content = document.getElementById("content");
const checker = () => {
	var tableBody = document.getElementById("newRow");
	if (tableBody.innerHTML < 30) {
		Content.innerHTML =
			"<p><strong>There are<em> no Records </em>Yet !!</strong></p>";
	}
};
checker();

//NEW MULTI SELECT FUNCTION
// var assignedToMultiSelect = new MSFmultiSelect(
// 	document.querySelector("#teamSelect"),
// 	{
// 		appendTo: "#assignedDiv",
// 		// options here
// 		selectAll: true,
// 		width: 350,
// 		height: 30,
// 		searchBox: false,
// 	}
// );
// console.log(assignedToMultiSelect.getSource());
//SHOW THE SELECTED OUTPUT
// $("form").focus(console.log("Hi I'm working here"));
// (showinputValue.value = teamSelect.value));

/*
var inputPocket1;
var inputPocket2;
var inputPocket3;
var inputPocket4;
var inputPocket5;
var inputPocket6;
var inputPocket7;
var inputPocket8;
var inputPocket9;
var inputPocket10;
var inputPocket11;
var inputPocket12;
// // var newtextNode = document.createTextNode();
// var inputVessel1;
// var inputVessel2;

// // var inputValueBag = inputVessel1 + ", " + inputVessel2 + ", ";
// var inputValueBag = "thbdfvk jdbfakxvj , ";
*/

//SUBMIT ALL OPTIONS WITH SELECTED ATTRIBUTE AS THE VALUE ON THE SELECT OPTION ON SUBMIT
// //PICK THE SELECT
// var assignedSelectForm = document.getElementById("teamSelect");
// // var assignedSelectForm = $("#teamSelect");
// // console.log(assignedSelectForm, "THIS IS THE SELECT"); //THE SELECT
// //PICK SELECT OPTIONS
// var optionsArry = assignedSelectForm.children; //OPTIONS ARRAY
// // console.log(optionsArry);

// console.log(optionsArry, "THESE ARE THE OPTIONS ARRAY"); //THE OPTIONS
// var optionsArray = [];
// optionsArray.push(optionsArry[0]); //THE OPTIONS
// optionsArray.push(optionsArry[1]); //THE OPTIONS
// optionsArray.push(optionsArry[2]); //THE OPTIONS
// optionsArray.push(optionsArry[3]); //THE OPTIONS
// optionsArray.push(optionsArry[4]); //THE OPTIONS
// optionsArray.push(optionsArry[5]); //THE OPTIONS
// optionsArray.push(optionsArry[6]); //THE OPTIONS
// optionsArray.push(optionsArry[7]); //THE OPTIONS
// optionsArray.push(optionsArry[8]); //THE OPTIONS
// optionsArray.push(optionsArry[9]); //THE OPTIONS
// optionsArray.push(optionsArry[10]); //THE OPTIONS
// // console.log(optionsArray, "THESE ARE THE OPTIONS ARRAY"); //THE OPTIONS

// //I NEED A FNC THAT TAKES ALL OPTION'S VALUE WITH THE ATTRIBUTE OF SELECTED
// var selectOptionArray = [];
// optionsArray.forEach((option) => {
// 	//CHECK IF ATTRIBUTE IS PRESENT
// 	// IF PRESENT TAKE OPTION AND ADD TO NEW ARRAY
// 	if (option.hasAttribute("selected") == true) {
// 		selectOptionArray.push(option.value);
// 	}
// });
// console.log(selectOptionArray); //SELECTED VALUES ARRAY
// CONCATENATE IT TO AN ARRAY AND SET AS THE SELECT VALUE RIGHT BEFORE SUBMISSION
// var updatedSelectValue = "";
// let q = 0;
// while (q < selectOptionArray.length) {
// 	// selectOptionArray[q]
// 	// var newtextNode = document.createTextNode(selectOptionArray[q]);
// 	// updatedSelectValue = newtextNode;
// 	// updatedSelectValue.innerHTML = newtextNode;
// 	// .appendData(newtextNode);
// 	// console.log(selectOptionArray[q]);  //LOG EACH OF THE VALUES
// 	// var newSelectValue = selectOptionArray[q] + ", ";
// 	// console.log(newSelectValue);
// 	q++;
// 	// var updatedSelectValue = newSelectValue + selectOptionArray[q];
// 	// console.log(updatedSelectValue);
// }
// console.log(updatedSelectValue);
// newSelectValue = selectOptionArray[0] + ", " + selectOptionArray[0];

var inputPocket1;

//MULTI SELECT JAVASCRIPT FUNCTIONALITY
document
	.multiselect("#teamSelect")
	.setCheckBoxClick("checkboxAll", function (target, args) {
		// inputPocket1 = "ITUNIT";
		// var inputVessel1 = document.createTextNode(inputPocket1);
		console.log(
			"Checkbox 'Select All' was clicked and got value ",
			target
			// target.value,
			// args.checked
			// checkboxAll,
			// "checkboxAll"/
		);
	})
	.setCheckBoxClick("Software Team", function (target, args) {
		// inputPocket2 = "Software Team";
		// var inputVessel2 = document.createTextNode(inputPocket2);

		console.log(
			"Checkbox for Software Team was clicked, got value ",
			args.checked
		);
	})
	.setCheckBoxClick("Mr Bayode", function (target, args) {
		// inputPocket3 = "Mr Bayode";
		console.log(
			"Checkbox for Mr Bayode was clicked, got value ",
			args.checked
		);
	})
	.setCheckBoxClick("Mr Olasupo", function (target, args) {
		// inputPocket4 = "Mr Olasupo";
		console.log(
			"Checkbox for Mr Olasupo was clicked, got value ",
			args.checked
		);
	})
	.setCheckBoxClick("Mrs Olaiya", function (target, args) {
		// inputPocket5 = "Mrs Olaiya";
		console.log(
			"Checkbox for Mrs Olaiya was clicked, got value ",
			args.checked
		);
	})
	.setCheckBoxClick("Mr Tobi", function (target, args) {
		// inputPocket6 = "Mr Tobi";
		console.log(
			"Checkbox for Mr Tobi was clicked, got value ",
			args.checked
		);
	})
	.setCheckBoxClick("Mr Dotun", function (target, args) {
		// inputPocket7 = "Mr Dotun";
		console.log(
			"Checkbox for Mr Dotun was clicked, got value ",
			args.checked
		);
	})
	.setCheckBoxClick("Mr Bunmi", function (target, args) {
		// inputPocket8 = "Mr Bunmi";
		console.log(
			"Checkbox for Mr Bunmi was clicked, got value ",
			args.checked
		);
	})
	.setCheckBoxClick("Mr Deolu", function (target, args) {
		// inputPocket9 = "Mr Deolu";
		console.log(
			"Checkbox for Mr Deolu was clicked, got value ",
			args.checked
		);
	})
	.setCheckBoxClick("Mr Joseph", function (target, args) {
		// inputPocket10 = "Mr Joseph";
		console.log(
			"Checkbox for Mr Joseph was clicked, got value ",
			args.checked
		);
	})
	.setCheckBoxClick("Mr Lanre", function (target, args) {
		// inputPocket11 = "Mr Lanre";
		console.log(
			"Checkbox for Mr Lanre was clicked, got value ",
			args.checked
		);
	})
	.setCheckBoxClick("Mr Bode", function (target, args) {
		// inputPocket12 = "Mr Bode";
		console.log(
			"Checkbox for Mr Bode was clicked, got value ",
			args.checked
		);
	});

document
	.multiselect("#teamSelectUpd")
	.setCheckBoxClick("checkboxAll", function (target, args) {
		// inputPocket1 = "ITUNIT";
		// var inputVessel1 = document.createTextNode(inputPocket1);
		console.log(
			"Checkbox 'Select All' was clicked and got value ",
			target
			// target.value,
			// args.checked
			// checkboxAll,
			// "checkboxAll"/
		);
	})
	.setCheckBoxClick("Software Team", function (target, args) {
		// inputPocket2 = "Software Team";
		// var inputVessel2 = document.createTextNode(inputPocket2);

		console.log(
			"Checkbox for Software Team was clicked, got value ",
			args.checked
		);
	})
	.setCheckBoxClick("Mr Bayode", function (target, args) {
		// inputPocket3 = "Mr Bayode";
		console.log(
			"Checkbox for Mr Bayode was clicked, got value ",
			args.checked
		);
	})
	.setCheckBoxClick("Mr Olasupo", function (target, args) {
		// inputPocket4 = "Mr Olasupo";
		console.log(
			"Checkbox for Mr Olasupo was clicked, got value ",
			args.checked
		);
	})
	.setCheckBoxClick("Mrs Olaiya", function (target, args) {
		// inputPocket5 = "Mrs Olaiya";
		console.log(
			"Checkbox for Mrs Olaiya was clicked, got value ",
			args.checked
		);
	})
	.setCheckBoxClick("Mr Tobi", function (target, args) {
		// inputPocket6 = "Mr Tobi";
		console.log(
			"Checkbox for Mr Tobi was clicked, got value ",
			args.checked
		);
	})
	.setCheckBoxClick("Mr Dotun", function (target, args) {
		// inputPocket7 = "Mr Dotun";
		console.log(
			"Checkbox for Mr Dotun was clicked, got value ",
			args.checked
		);
	})
	.setCheckBoxClick("Mr Bunmi", function (target, args) {
		// inputPocket8 = "Mr Bunmi";
		console.log(
			"Checkbox for Mr Bunmi was clicked, got value ",
			args.checked
		);
	})
	.setCheckBoxClick("Mr Deolu", function (target, args) {
		// inputPocket9 = "Mr Deolu";
		console.log(
			"Checkbox for Mr Deolu was clicked, got value ",
			args.checked
		);
	})
	.setCheckBoxClick("Mr Joseph", function (target, args) {
		// inputPocket10 = "Mr Joseph";
		console.log(
			"Checkbox for Mr Joseph was clicked, got value ",
			args.checked
		);
	})
	.setCheckBoxClick("Mr Lanre", function (target, args) {
		// inputPocket11 = "Mr Lanre";
		console.log(
			"Checkbox for Mr Lanre was clicked, got value ",
			args.checked
		);
	})
	.setCheckBoxClick("Mr Bode", function (target, args) {
		// inputPocket12 = "Mr Bode";
		console.log(
			"Checkbox for Mr Bode was clicked, got value ",
			args.checked
		);
	});

//SUBMIT GROUP OF NAMES ON MULTI SELECT

// console.log(args);
//SELECT THE INNER INPUT
// var innerSelectInput = document.querySelector("#teamSelect_input");
// console.log(
// innerSelectInput,
// "unseen input submitting to select of the multiSelect"
// );
// var innerSelectInput = document.querySelector('#id of the select')
//SUBMIT INPUT TO THE FORM
// innerSelectInput.setAttribute("name", "assignedTo");
// SUBMIT SELECTED VALUES TO THE INPUT
// innerSelectInput.value = inputVessel;
const validateModalForm = () => {
	var taskNameInput = document.querySelector('[name="taskName"]');
	var assignedToInput = document.querySelector('[name="assignedTo[]"]');
	var priorityInput = document.querySelector('[name="priority"]');
	var startDateInput = document.querySelector('[name="startDate"]');
	var plannedEndInput = document.querySelector('[name="plannedEnd"]');
	var actualEndInput = document.querySelector('[name="actualEnd"]');
	var goLiveInput = document.querySelector('[name="goLive"]');
	var noOfDaysInput = document.querySelector('[name="noOfDays"]');
	var newStatusInput = document.querySelector('[name="newStatus"]');
	var notesInput = document.querySelector('[name="notes"]');

	var errorDiv1 = document.querySelector("span.errorDiv1");
	var errorDiv2 = document.querySelector("span.errorDiv2");
	var errorDiv3 = document.querySelector("span.errorDiv3");
	var errorDiv4 = document.querySelector("span.errorDiv4");
	var errorDiv5 = document.querySelector("span.errorDiv5");
	var errorDiv6 = document.querySelector("span.errorDiv6");
	var errorDiv7 = document.querySelector("span.errorDiv7");
	var errorDiv8 = document.querySelector("span.errorDiv8");
	var errorDiv9 = document.querySelector("span.errorDiv9");
	var errorDiv10 = document.querySelector("span.errorDiv10");
	// console.log(errorDiv3, errorDiv4);

	if (taskNameInput.value == "" || taskNameInput.value <= 3) {
		errorDiv1.innerHTML = "Please include a longer Task Name";
		// return false;
	} else {
		errorDiv1.innerHTML = "";
	}
	if (assignedToInput.value == "") {
		errorDiv2.innerHTML =
			"Please assign this Project to a Person or Team";
	} else {
		errorDiv2.innerHTML = "";
	}
	if (priorityInput.value == "") {
		errorDiv3.innerHTML = "Please select a priority level";
	} else {
		errorDiv3.innerHTML = "";
	}
	if (startDateInput.value == "") {
		errorDiv4.innerHTML = "Please input a start date for the project";
	} else {
		errorDiv4.innerHTML = "";
	}
	if (plannedEndInput.value == "") {
		errorDiv5.innerHTML =
			"Please input a planned date to end the project";
	} else {
		errorDiv5.innerHTML = "";
	}
	if (actualEndInput.value == "") {
		errorDiv6.innerHTML =
			"Please input an actual end date for the project";
	} else {
		errorDiv6.innerHTML = "";
	}
	if (goLiveInput.value == "") {
		errorDiv7.innerHTML = "Please input a day for the project to go live";
	} else {
		errorDiv7.innerHTML = "";
	}
	// console.log(typeof noOfDaysInputVal);
	var noOfDaysInputVal = noOfDaysInput.value;
	if (typeof noOfDaysInputVal !== "string") {
		errorDiv8.innerHTML =
			"Please set a valid number of day(s) for the project";
	} else if (noOfDaysInputVal == "") {
		errorDiv8.innerHTML = "Please set a number of day(s) for the project";
	} else {
		errorDiv8.innerHTML = "";
	}
	if (newStatusInput.value == "") {
		errorDiv9.innerHTML = "Please set the current status of the project";
	} else {
		errorDiv9.innerHTML = "";
	}
	if (notesInput.value == "") {
		errorDiv10.innerHTML = "Input some notes describing your project";
	} else {
		errorDiv10.innerHTML = "";
	}

	// var errorArray = document.querySelectorAll("span.chek2d");
	// errorArray.forEach((span) => {
	// if (span.innerHTML == "") {
	// console.log(span);
	// return true;
	// } else if (span.innerHTML > 1) {
	// console.log("there are still checks");
	// return false;
	// }
	// return false;
	// });
};

// console.log(errorArray);

// errorArray.forEach((span) => {
// 	if (span.innerHTML == "") {
// 		//INPUT IS FILLED
// 		console.log(span);
// 		// return false;
// 		console.log("I POST FORM IF ALL INPUTS RE FILLED"); //IS RUNNED WHEN INPUT IS NOT FILLED
// 	} else {
// 		//INPUT IS NOT FILLED
// 		console.log("there are still checks"); //IS RUNNED WHEN INPUT IS NOT FILLED
// 		return false;
// 		// console.log("there are still working here");
// 	}
// 	// console.log("I WILL NOT POST FORM IF ALL INPUTS RE NOT FILLED"); //IS RUNNED WHEN INPUT IS NOT FILLED
// 	// console.log("hey im functional here"); //IS RUNNED WHEN INPUT IS FILLED OR NOT
// 	// return false;
// 	console.log("im functional here 2.0");
// });
// };

//LOG THAT WORKS ONLY WHEN ALL FIELDS ARE FILLED

//console.log(taskNameInput);
//console.log(assignedToInput);
//console.log(priorityInput);
//console.log(startDateInput);
//console.log(plannedEndInput);
//console.log(actualEndInput);
//console.log(goLiveInput);
//console.log(noOfDaysInput);
//console.log(newStatusInput);
//console.log(notesInput);
//EXTRA ITEMS TO WORK WITH FROM TABLE
$(".dt-buttons"); //div holding column visibility button
$(".dt-button"); //column visibility button

//ALERT THAT FORM AS BEEN SUBMIT ON CLICK
$(".alert").alert();

//ADDING ALERT EFFECT
const runSubmitSequel = () => {
	var alertElm = document.querySelector(".myAlrt");
	alertElm.classList.add("modal");
	alertElm.classList.add("arial1");
	alertElm.classList.add("show");
	setTimeout(() => {
		alertElm.classList.remove("modal");
		alertElm.classList.remove("arial1");
		alertElm.classList.remove("show");
		alertElm.animate(fadeOutLeft);
	}, 3000);
	console.log("I want the alert to show for some time and leave");
};

// const runAlertDeleteSequel = () => {
// 	var alertDiv = $("arial1");
// 	console.log(alertDiv);
// };

// const checkDelete = (linkElement) => {
// 	var promptValue = prompt("Are you sure you want to delete this Project ?");
// 	if (promptValue == " yes " || promptValue == "yes") {
// 		linkElement.setAttribute(
// 			"href",
// 			"./process.php?delete= <?php echo $row['id']; ?>"
// 		);
// 	} else {
// 		linkElement.setAttribute("href", "#");
// 	}
// };
