<?php
		//Create Connection
		$conn = mysqli_connect("localhost", "root", "", "ittaskmanager");
		// Check connection
		if($conn === false){
			die("ERROR: Could not connect. "
				. mysqli_connect_error());
		}	//If Connection Fails
			// Taking all values from the form
		$taskName = $_POST ["taskName"] ?? ''; 
		// $assignedTo = $_POST ["assignedTo"] ?? '';
		
		//CONVERT THE SUBMITTED MULTIPLE ARRAY
		// if (isset ($_POST["assignedTo"])){
			// 	echo $_POST['assignedTo'] . "<br>";
			// }
			
			$assignedTo = $_POST ["assignedTo"] ?? '';
			$teamMem = implode(", ", $assignedTo);
		// foreach (count_chars($teamMem, 1) as $i => $val) {
		// 	echo "There was $val instances of\"",chr($i),
		// 	"\"in the string.<br>";
		// 	// echo chr($i) += "&".chr($i)."\t"
		// }


		// $assignedTo = $_POST [
		// foreach ($assignedTo as $teamMem) {
	// echo $teamMem += "&".$teamMem."\t";
// };

// foreach ($assignedTo as $val1 => $teamMem) {


		// $teamMem = implode(", ", $assignedTo);
		// echo implode(", ", $assignedTo);


		// foreach ($assignedTo as $val1 => $teamMem) {
			// echo 
			// $teamMem += "&".$teamMem.$val1."\t"; 
		// } 

		// $assignedTo = $_POST ["some dummy texxxt"] ?? '';
		$priority = $_POST ['priority'] ?? '';
		$startDate = $_POST ['startDate'] ?? '';
		$plannedEnd = $_POST ['plannedEnd'] ?? '';
		$actualEnd = $_POST ['actualEnd'] ?? '';
		$goLive = $_POST ["goLive"] ?? '';
		$noOfDays = $_POST ["noOfDays"] ?? '';
		$newStatus = $_POST ["newStatus"] ?? '';
		$notes = $_POST ["notes"] ?? '';


		// Performing insert query execution
		$sql = "INSERT INTO taskmanager VALUES ('','$taskName',
			'$teamMem', '$priority', '$startDate', '$plannedEnd',
             '$actualEnd', '$goLive', '$noOfDays', '$newStatus', '$notes')";
		if(mysqli_query($conn, $sql)){

            //OUTPUT SOME DETAILS
			$result = mysqli_query($conn, "select * from taskmanager");
			$row = mysqli_fetch_array($result);
			echo 
            "<td>*</td>".
            "<td>$taskName</td>
			<td>$teamMem</td>
			<td>$priority</td>
            <td>$startDate</td>
            <td>$plannedEnd</td>
            <td>$actualEnd</td>
            <td>$goLive</td>
            <td>$noOfDays</td>
            <td>$newStatus</td>
            <td>$notes</td>";
		} else{
			echo "ERROR: Hush! Sorry $sql. "
				. mysqli_error($conn);
		}
		// Close connection
		mysqli_close($conn);


		// UPDATE RECORD IN DATABASE 
		// UPDATE `taskmanager` 
		// 	SET `medium` = "high", 
		// 	`24-05-2010`= "30-05-2010"
		// 	WHERE id = "24"

?>



<!-- UPDATE `taskmanager` SET `taskName` = 'adfv', `assignedTo` = 'dvfc d ddvx d', `priority` = 'medium', `startDate` = '2021-07-13', `plannedEnd` = '2021-07-07', `actualEnd` = '2021-07-21' WHERE `taskmanager`.`id` = 64 -->