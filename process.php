<?php

// session_start();

$mysqli =new mysqli("localhost", "root", "", "ittaskmanager") or die (mysqli_error($mysqli));

        $taskNameUpd = "";
        $assignedToUpd = "";
        $priorityUpd = "";
        $startDateUpd = "";
        $plannedEndUpd = "";
        $actualEndUpd = "";
        $goLiveUpd = "";
        $noOfDaysUpd = "";
        $newStatusUpd = "";
        $notesUpd = "";
        // $updateUpd = false;

if (isset($_GET["delete"])){
	$id = $_GET["delete"];
	$mysqli->query("DELETE FROM taskmanager WHERE id=$id") or die($sql->error());

    // $_SESSION["message"] = "New Project has been Deleted!";
    // $_SESSION["msg_type"] = "danger"; 
    
    header("location: index.php");
}



$idUpd = $_POST ["id"] ?? '';

echo $idUpd;
    if (isset($idUpd)){
        $idUpd = $idUpd;
    $resultUpd = $mysqli->query("SELECT * FROM taskmanager WHERE id=$idUpd") or die($mysqli->error());
        // if(count($resultUpd) == 1){
            $row = $resultUpd->fetch_array();
                $taskNameUpd = $row['taskName'];
                $assignedToUpd = $row['assignedTo'];
                $priorityUpd = $row['priority'];
                $startDateUpd = $row['startDate'];
                $plannedEndUpd = $row['plannedEnd'];
                $actualEndUpd = $row['actualEnd'];
                $goLiveUpd = $row['goLive'];
                $noOfDaysUpd = $row['noOfDays'];
                $newStatusUpd = $row['newStatus'];
                $notesUpd = $row['notes'];
        // }
    }

echo 
    $taskNameUpd;
    $assignedToUpd;
    $priorityUpd;
    $startDateUpd; 
    $plannedEndUpd;
    $actualEndUpd;
    $goLiveUpd;
    $noOfDaysUpd;
    $newStatusUpd; 
    $notesUpd;




// $_SESSION["message"] = "New Project has been Saved!";
// $_SESSION["msg_type"] = "success"; 


// $sql = "INSERT INTO taskmanager VALUES ('','$taskName',
// '$teamMem', '$priority', '$startDate', '$plannedEnd',
//  '$actualEnd', '$goLive', '$noOfDays', '$newStatus', '$notes')";
// if(mysqli_query($conn, $sql)){

//OUTPUT SOME DETAILS
// $result = mysqli_query($conn, "select * from taskmanager");
// $row = mysqli_fetch_array($result);

// $conn = mysqli_connect("localhost", "root", "", "ittaskmanager");
// // Check connection
// if($conn === false){
//     die("ERROR: Could not connect. "
//         . mysqli_connect_error());
// }	



// if (isset($_POST["id"])){
//     $id = $_POST ["id"] ?? '';
// $resultUpd = $mysqli->query("SELECT * FROM taskmanager WHERE id=$id") or die($mysqli->error());
//     if(count($resultUpd) == 1){
//         $row = $resultUpd->fetch_array();
//             $taskNameUpd = $row['taskName'];
//             $assignedToUpd = $row['assignedTo'];
//             $priorityUpd = $row['priority'];
//             $startDateUpd = $row['startDate'];
//             $plannedEndUpd = $row['plannedEnd'];
//             $actualEndUpd = $row['actualEnd'];
//             $goLiveUpd = $row['goLive'];
//             $noOfDaysUpd = $row['noOfDays'];
//             $newStatusUpd = $row['newStatus'];
//             $notesUpd = $row['notes'];
//     }
// }
		// Performing insert query execution
		// $sql = "INSERT INTO taskmanager VALUES ('','$taskName',
		// 	'$teamMem', '$priority', '$startDate', '$plannedEnd',
        //      '$actualEnd', '$goLive', '$noOfDays', '$newStatus', '$notes')";
		// if(mysqli_query($conn, $sql)){

        //     //OUTPUT SOME DETAILS
		// 	$result = mysqli_query($conn, "select * from taskmanager");
		// 	$row = mysqli_fetch_array($result);
		// 	echo 
        //     "<td>*</td>".
        //     "<td>$taskName</td>
		// 	<td>

// if (isset($_GET["edit"])){
//     $id = $_GET["edit"];
//     $update = true;
//     $result = $mysqli->query("SELEsssCT * FROM taskmanager WHERE id=$id") 
//     or die($mysqli->error());
//     if(count($result) == 1){
//         $row = $result->fetch_array();
//             $taskNameUpd = $row['taskName'];
//             $assignedToUpd = $row['assignedTo'];
//             $priorityUpd = $row['priority'];
//             $startDateUpd = $row['startDate'];
//             $plannedEndUpd = $row['plannedEnd'];
//             $actualEndUpd = $row['actualEnd'];
//             $goLiveUpd = $row['goLive'];
//             $noOfDaysUpd = $row['noOfDays'];
//             $newStatusUpd = $row['newStatus'];
//             $notesUpd = $row['notes'];
//     }
//     // $_SESSION["message"] = "New Project has been Deleted!";
//     // $_SESSION["msg_type"] = "danger"; 
//     // header("location: home.php");
// }



?>