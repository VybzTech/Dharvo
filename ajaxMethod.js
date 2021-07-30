// FORM SUBMISSION USING AJAX
$("form").on("submit", function (event) {
	event.preventDefault();
	validateModalForm();
	//CHECKER FUNCTION TO RETURN FALSE IF THEREs ERROR
	var errorArray = document.querySelectorAll("span.chek2d");
	const chekParam = () => {
		let x = 0;
		while (x < errorArray.length) {
			const spanCheck = errorArray[x].innerHTML == "";
			if (spanCheck === true) {
				console.log("No there are no checks");
			} else if (spanCheck === false) {
				return false;
			}
			x++;
		}
		console.log("I WILL POST FORM");

		runSubmitSequel();
		var formValues = $(this).serialize();
		$.post("./home.php", formValues, function (data) {
			console.log(data);
			var tableBody = document.getElementById("newRow");
			var newTr = document.createElement("TR");
			newTr.innerHTML = data;
			tableBody.append(newTr);
			var Content = document.getElementById("content");
			Content.innerHTML = "";
		});
	};
	chekParam();
	// setTimeout(runAlertSubmitSequel(), 3000);
});

//TABLE FILTER FUNCTIONALITY
var table = $("#projectTable").DataTable({
	fixedHeader: false,
	dom: "Bfrtip",
	buttons: ["colvis"],
	paging: false,
	info: false,
	filter: false,
});

$("#pullingForm").on("submit", function (event) {
	event.preventDefault();
	var pullFormValues = $(this).serialize();
	$.post("./process.php", pullFormValues, function (data) {
		console.log(data); //wch is the php file
	});
});
