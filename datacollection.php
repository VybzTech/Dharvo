<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta
			name="viewport"
			content="width=device-width, initial-scale=1.0"/>
		<title>LIRS TASK MANAGER</title>
		<link rel="shortcut icon" href="./dist/logo.png" type="image/png" />
</head>
<body>
<?php
            		$conn = mysqli_connect("localhost", "root", "", "ittaskmanager");
        			$result = mysqli_query($conn, "select * from taskmanager");
			        while ($row = mysqli_fetch_array($result)):                
                ?>
				<div>
                    <span> <?php echo $row['id']; ?> 			</span>
                    <span> <?php echo $row['taskName']; ?> 		</span>
                    <span> <?php echo $row['assignedTo']; ?> 	</span>
                    <span> <?php echo $row['priority']; ?> 		</span>
                    <span> <?php echo $row['startDate']; ?> 	</span>
                    <span> <?php echo $row['plannedEnd']; ?>	</span>
                    <span> <?php echo $row['actualEnd']; ?>		</span>
                    <span> <?php echo $row['goLive']; ?> 		</span>
                    <span> <?php echo $row['noOfDays']; ?> 		</span>
                    <span> <?php echo $row['newStatus']; ?> 	</span>
                    <span> <?php echo $row['notes']; ?> 		</span>
			</div>
			<?php endwhile; ?>

</body>
</html>