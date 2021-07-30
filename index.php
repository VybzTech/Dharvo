<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta
			name="viewport"
			content="width=device-width, initial-scale=10"
		/>
		<title>LIRS TASK MANAGER</title>

		<!--	CSS FILES 	-->
		<link
			rel="stylesheet"
			href="./css/index.css"
			type="text/css"
			media="screen"
		/>
		<link rel="shortcut icon" href="./dist/logo.png" type="image/png" />

		<!--		CHART.JS JAVASCRIPT		 	-->
		<script src="./dist/chart.js/dist/chart.js"></script>
		<!-- <script
			src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.4.1/chart.min.js"
			integrity="sha512-5vwN8yor2fFT9pgPS9p9R7AszYaNn0LkQElTXIsZFCL7ucT8zDCAqlQXDdaqgA1mZP47hdvztBMsIoFxq/FyyQ=="
			crossorigin="anonymous"
			referrerpolicy="no-referrer"
		></script> -->

		<!-- 	MULTISELECT LIBRARY 	 -->
		<!-- <link rel="stylesheet" 
		type="text/css"
		href="./dist/multiselect/MSFmultiSelect-2.3/msfmultiselect.css"
		/> -->
		<script src="./dist/multiselect/MSFmultiSelect-2.3/msfmultiselect.min.js"></script>
		 
		<link
			type="text/css"
			rel="stylesheet"
			href="./dist/multiselect/multiselect.css"
		/>
		<!-- <script src="./dist/multiselect/scripts/multiselect.js"></script> -->
		<script src="./dist/multiselect/multiselect.min.js"></script>

		<!--   	  JQUERY  	  -->
		<!-- <script
			src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"
			integrity="sha512-bLT0Qm9VnAYZDflyKcBaQ2gg0hSYNQrJ8RilYldYQ1FxQYoCLtUjuuRuZo+fjqhx/qtq/1itJ0C2ejDxltZVFg=="
			crossorigin="anonymous"
		></script>
		<script
			src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
			integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
			crossorigin="anonymous"
		></script> -->
		<script src="./js/jquery-3.6.0.js" type="text/javascript"></script>

		<!--		TABLE FILTER LIBRARY 		-->
		<link
			rel="stylesheet"
			href="./dist/tableFilter/buttons.dataTables.min.css"
		/>
		<script src="./dist/tableFilter/jquery.dataTables.min.js"></script>
		<script src="./dist/tableFilter/dataTables.fixedHeader.min.js"></script>
		<script src="./dist/tableFilter/dataTables.buttons.min.js"></script>
		<script src="./dist/tableFilter/buttons.colVis.min.js"></script>

		<!--	 	BOOOTSTRAP		 -->
		<!-- <link
			rel="stylesheet"
			href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
			integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
			crossorigin="anonymous"
		/>
		<script
			src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
			integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
			crossorigin="anonymous"
		></script> -->
		<link rel="stylesheet" href="./css/bootstrap.css" type="text/css" />
		<script src="./js/bootstrap.min.js"></script>
	</head>
	<body>
		<!-- DELETE ALERT  
		 <div class=" alert alert-danger alert-dismissible fade show" 
	role="alert"> </div> 
 ?php 
if (isset($_SESSION['message'])):
? <div class="arial1 alert-dismissible fade show  
	role="alert" alert alert-?=$_SESSION['msg-type']?>" 
<div class=" alert alert-danger "> 
	?php 
		echo $_SESSION ['message'];
		unset($_SESSION['message']);
	?
	
	
	<button type="button" 
			class="close" 
			data-dismiss="alert" 
			aria-label="Close">
			<span aria-hidden="true">
				&times;
			</span>
	</button>
</div>
?php endif ? -->

			<!-- DELETED ALERT  -->
<div class="arial1 alert alert-danger alert-dismissible fade noshow" 
	role="alert"> 
	Your Project's Entry has Been Deleted
	<button type="button" 
			class="close" 
			data-dismiss="alert" 
			aria-label="Close">
			<span aria-hidden="true">
				&times;
			</span>
	</button>
</div>
			<!-- SUBMISSION ALERT  -->
<div class="myAlrt alert alert-primary alert-dismissible fade " 
	role="alert"> 
	A New Project has been Submitted
	<button type="button" 
			class="close" 
			data-dismiss="alert" 
			aria-label="Close">
			<span aria-hidden="true">
				&times;
			</span>
	</button>
</div>
		<div>
			<div class="topRegion">
				<div class="flexMe">
					<div class="logowrapper">
						<img src="./dist/Logo.png" alt="Lirs Logo" />
					</div>
					<div class="header">
						<h1 class="lirsHead">
							lirs <span class="itHead">it unit</span>
						</h1>
					</div>
				</div>
				<div class="canvasCont" id="chart3">
					<h3 class="lirsHead">
						pictorial <span class="itHead">view 3</span>
					</h3>
					<canvas id="doughnutChart"></canvas>
				</div>
				<div class="topCharts">
					<div class="canvasCont" id="chart1">
						<h3 class="lirsHead">
							pictorial <span class="itHead">view 1</span>
						</h3>
						<canvas id="barChart"></canvas>
					</div>
					<div class="canvasCont" id="chart2">
						<h3 class="lirsHead">
							pictorial <span class="itHead">view 2</span>
						</h3>
						<canvas id="horizontalChart"></canvas>
					</div>
				</div>
			</div>
		</div>
		<div class="mainTable">
			<div class="taskHead">Software Development Task Manager</div>
			<div class="tableHead">
				<div><span>2021  </span> PROJECTS AND TASK TRACKING</div>
			</div>
			<div class="table_holder">
				<div class="addProject float-right clearfix">
					<button
						type="button"
						class="btn"
						data-toggle="modal"
						data-target="#myModal"
						id="addProject"
					>
						add a new project
					</button>
				</div>
				<table id="projectTable" class="table table-hover table-bordered">
					<thead>
						<tr>
							<td>S/N</td>
							<td class="spC">TASKNAME</td>
							<td class="spC">ASSIGNED TO</td>
							<td>PRIORITY</td>
							<td>START DATE</td>
							<td>PLANNED END DATE</td>
							<td>ACTUAL END DATE</td>
							<td>GO LIVE DATE</td>
							<td>NUMBER OF DAYS</td>
							<td>STATUS</td>
							<td>NOTES</td>
							<td class="spCd">OPERATIONS</td>
						</tr>
					</thead>
					<tbody id="newRow">
						<!--Loop Through DataBase Table and display in Table Body-->
						<?php
							$conn = mysqli_connect("localhost", "root", "", "ittaskmanager");
							$result = mysqli_query($conn, "select * from taskmanager");
							while ($row = mysqli_fetch_array($result)):                
						?>
						<tr>
							<td><?php echo $row['id']; ?></td>
							<td><?php echo $row['taskName']; ?></td>
							<td><?php echo $row['assignedTo']; ?></td>
							<td><?php echo $row['priority']; ?></td>
							<td><?php echo $row['startDate']; ?></td>
							<td><?php echo $row['plannedEnd']; ?></td>
							<td><?php echo $row['actualEnd']; ?></td>
							<td><?php echo $row['goLive']; ?></td>
							<td><?php echo $row['noOfDays']; ?></td>
							<td><?php echo $row['newStatus']; ?></td>
							<td><?php echo $row['notes']; ?></td>
							<td>
								<button
									type="button"
									class="btn btn-info btn-sm upDateBtn"
									data-toggle="modal"
									data-target="#updateModal"
									>
									Update Project
								</button>
								<!-- style="font-size: 11px; margin-bottom: 0.7rem;" -->
								<!-- onclick=checkUpdate(); -->
								<!-- < href="./process.php?edit=?php echo $row['id'];?>"  -->
									<!-- > Update Project  -->
								<!-- </a> -->
								<!-- <a href="./process.php?edit=?php echo $row['id'];?>" 
									class="btn btn-info"
									> Update Project 
								</a> -->
								<!-- data-toggle="modal" -->
								<!-- data-target="#myModal" -->
								<!-- onclick=checkDelete(); -->
								<!-- style="font-size: 11px;" -->
								<a
									href="./process.php?delete=<?php echo $row['id']; ?>" 
									class="btn btn-danger btn-sm delBtn" 
									onclick="runAlertDeleteSequel(this)";
									> Delete Project 
								</a>
							</td>
						</tr>
						<?php endwhile; ?>
            		</tbody>
				</table>
				<div id="content" style="padding-bottom: 5rem">
				</div>
			</div>
		</div>

	

		<!-- 		MODAL		 -->
		<div id="myModal" class="modal fade" role="dialog">
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="modal-header">
						<h4 class="modal-title text-center moveL">
							Create A New Task
						</h4>
						<button
							type="button"
							class="close"
							data-dismiss="modal"
						>
							&times;
						</button>
					</div>
					<div class="modal-body">
						<!-- 	FORM 	-->
						<!-- php $update = false;?  -->
						<form>
							<div class="form-groupped">
								<label>Task Name</label>
								<input
									class="form-control"
									type="text"
									placeholder="Add a Project Name"
									name="taskName"
									/>
									<!-- value="?php echo $taskName; ?" -->
								<span class="errorDiv1 showErr chek2d"></span>
							</div>
							
							<!-- <div class="showinputValue"></div> -->
							
							<div class="form-groupped">
								<label>team assigned to</label>
								<!-- <div id="assignedDiv"> -->
									<!-- multiple="multiple" -->
									
									<div>
									<select
									class="form-control"
									id="teamSelect"
										name="assignedTo[]"
										multiple
										>
										<!-- value="?php echo $assignedTo; ?>" -->
										<option value="Software Team">
											Software Team
										</option>
										<option value="Mr Bayode">
											Mr Bayode
										</option>
										<!-- selected -->
										<option value="Mr Olasupo">
											Mr Olasupo
										</option>
										<option value="Mrs Olaiya">
											Mrs Olaiya
										</option>
										<option value="Mr Tobi">
											Mr Tobi
										</option>
										<option value="Mr Dotun">
											Mr Dotun
										</option>
										<option value="Mr Bunmi">
											Mr Bunmi
										</option>
										<option value="Mr Deolu">
											Mr Deolu
										</option>
										<option value="Mr Joseph">
											Mr Joseph
										</option>
										<option value="Mr Lanre">
											Mr Lanre
										</option>
									</select>
									</div>
									<span class="errorDiv2 showErr chek2d"></span>
								</div>

								<div class="form-groupped">
									<label>priority</label>
									<select
									class="form-control"
									name="priority"
									>
									<!-- value="?php echo $priority; ?>" -->
									<option
									value=""
									disabled
										selected
										hidden
									></option>
									<option value="high">high</option>
									<option value="medium">
										medium
									</option>
									<option value="low">low</option>
								</select>
								<span class="errorDiv3 showErr chek2d"></span>
							</div>

							<div class="form-groupped">
								<label>start date</label>
								<input
									type="date"
									class="form-control"
									name="startDate"
									/>
									<!-- value="?php echo $startDate; ?>" -->
								<span class="errorDiv4 showErr chek2d"></span>
							</div>

							<div class="form-groupped">
								<label>planned end date</label>
								<input
									type="date"
									class="form-control"
									name="plannedEnd"
									/>
									<!-- value="?php echo $plannedEnd; ?>" -->
								<span class="errorDiv5 showErr chek2d"></span>
							</div>

							<div class="form-groupped">
								<label>actual end date</label>
								<input
									type="date"
									class="form-control"
									name="actualEnd"
									/>
									<!-- value="?php echo $actualEnd; ?>" -->
								<span class="errorDiv6 showErr chek2d"></span>
							</div>

							<div class="form-groupped">
								<label>go live date</label>
								<input
									type="date"
									class="form-control"
									name="goLive"
									/>
									<!-- value="?php echo $goLive; ?>" -->
								<span class="errorDiv7 showErr chek2d"></span>
							</div>

							<div class="form-groupped">
								<label>no of days</label>
								<input
									type="text"
									class="form-control"
									name="noOfDays"
									/>
									<!-- value="?php echo $noOfDays; ?>" -->
								<span class="errorDiv8 showErr chek2d"></span>
							</div>

							<div class="form-groupped">
								<label>status</label>
								<select
									class="form-control"
									name="newStatus"
									>
									<!-- value="?php echo $newStatus; ?>" -->
									<option
										value=""
										disabled
										selected
										hidden
									></option>
									<option value="open">open</option>
									<option value="on Going">
										on Going
									</option>
									<option value="closed">
										closed
									</option>
									<option value="done">done</option>
								</select>
								<span class="errorDiv9 showErr chek2d"></span>
							</div>

							<div class="form-groupped">
								<label>notes</label>
								<input
									class="form-control"
									type="text"
									name="notes"
								/>
								<span class="errorDiv10 showErr chek2d"></span>
							</div>
							<div class="modal-footer">
								<!-- ?php 
								if ($update == true): 
								?>
								<button
									type="submit"
									class="btn btn-info btn-md"
									name="Update"
								>Update</button>
								?php else: ?>
									?php endif; ?> -->
								<input
									type="submit"
									class="btn btn-success btn-md"
									name="submit"
								/>
								<button
									type="button"
									class="btn btn-danger btn-md"
									data-dismiss="modal"
								>
									Close
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
		<!-- CODE THE MODAL  -->
		<!-- CODE BUTTON TO CONTROL MODAL  -->
		<!-- CODE MODAL FUNCTIONALITY  -->
<!-- ?php include 'process.php'; ?> -->
		<!-- UPDATE MODAL  -->
		<div id="updateModal" class="modal fade" role="dialog">
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="modal-header">
						<h4 class="modal-title text-center moveL">
							Update A Task
						</h4>
						<button
							type="button"
							class="close"
							data-dismiss="modal"
						>
							&times;
						</button>
					</div>
					<div class="modal-body">
							<!-- CHECK FOR ID TO UPDATE  -->
						<div class="modal-check">
						<!-- method="POST" action="./process.php" -->
							<form id="pullingForm">
								<div class="form-groupped">
									<label>INPUT S/N OF THE PROJECT</label>
									<input name="id" type="text" 
									placeholder="Input a Project number" 
									/>
								</div>
								<div class="form-groupped" 
									 style="align-self: flex-end;  width: 25%;">
								
									<button class="btn btn-dark btn-sm pullBtn"
									name="update" type="submit"
									>Pull Project
									</button>
								</div>
							</form>	
						</div>
						<!-- 	FORM 10	-->
						<form>
							<div class="form-groupped">
								<label>Task Name</label>
								<input
									class="form-control"
									type="text"
									placeholder="Pull Project name"
									name="taskName10"
									value="<?php echo $taskNameUpd; ?>"
								/>
							</div>
							
							<div class="form-groupped">
								<label>team assigned to</label>
									<div>
									<select
										class="form-control"
										id="teamSelectUpd"
										name="assignedTo10[]"
										multiple
										value="<?php echo $assignedToUpd; ?>"
										>
										<option value="Software Team">
											Software Team
										</option>
										<option value="Mr Bayode">
											Mr Bayode
										</option>
										<!-- selected -->
										<option value="Mr Olasupo">
											Mr Olasupo
										</option>
										<option value="Mrs Olaiya">
											Mrs Olaiya
										</option>
										<option value="Mr Tobi">
											Mr Tobi
										</option>
										<option value="Mr Dotun">
											Mr Dotun
										</option>
										<option value="Mr Bunmi">
											Mr Bunmi
										</option>
										<option value="Mr Deolu">
											Mr Deolu
										</option>
										<option value="Mr Joseph">
											Mr Joseph
										</option>
										<option value="Mr Lanre">
											Mr Lanre
										</option>
									</select>
									</div>
								</div>

								<div class="form-groupped">
									<label>priority</label>
									<select
									class="form-control"
									name="priority10"
									value="<?php echo $priorityUpd; ?>"
									>
									<option
									value=""
									disabled
										selected
										hidden
									></option>
									<option value="high">high</option>
									<option value="medium">
										medium
									</option>
									<option value="low">low</option>
								</select>
							</div>

							<div class="form-groupped">
								<label>start date</label>
								<input
									type="date"
									class="form-control"
									name="startDate10"
									value="<?php echo $startDateUpd; ?>"
								/>
							</div>

							<div class="form-groupped">
								<label>planned end date</label>
								<input
									type="date"
									class="form-control"
									name="plannedEnd10"
									value="<?php echo $plannedEndUpd; ?>"
								/>
							</div>

							<div class="form-groupped">
								<label>actual end date</label>
								<input
									type="date"
									class="form-control"
									name="actualEnd10"
									value="<?php echo $actualEndUpd; ?>"
								/>
							</div>

							<div class="form-groupped">
								<label>go live date</label>
								<input
									type="date"
									class="form-control"
									name="goLive10"
									value="<?php echo $goLiveUpd; ?>"
								/>
							</div>

							<div class="form-groupped">
								<label>no of days</label>
								<input
									type="text"
									class="form-control"
									name="noOfDays10"
									value="<?php echo $noOfDaysUpd; ?>"
								/>
							</div>

							<div class="form-groupped">
								<label>status</label>
								<select
									class="form-control"
									name="newStatus10"
									value="<?php echo $newStatusUpd; ?>"
								>
									<option
										value=""
										disabled
										selected
										hidden
									></option>
									<option value="open">open</option>
									<option value="on Going">
										on Going
									</option>
									<option value="closed">
										closed
									</option>
									<option value="done">done</option>
								</select>
							</div>

							<div class="form-groupped">
								<label>notes</label>
								<input
									class="form-control"
									type="text"
									name="notes10"
									value="<?php echo $notesUpd; ?>"
								/>
							</div>
							<!-- <span class="errorDiv10 showErr chek2d"></span> -->
							<div class="modal-footer">
							<a  href="./process.php?edit=<?php echo $idUpd; ?>" 
									class="btn btn-info btn-md"
									type="submit"
									name="update"
									> Update 
								</a>
								<!-- <a href="./process.php?edit=?php echo $row['id'];?>" 
									class="btn btn-info btn-md"
									type="submit"
									name="update"
									> Update 
								</a> -->
								<!-- CHANGE TO UPDATE BUTTON 4RM VID -->
								<button
									type="button"
									class="btn btn-danger btn-md"
									data-dismiss="modal"
									data-target="updateModal"
									data-role="close"
								>
									Close
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>

		
		
		<script src="./js/ajaxMethod.js"></script>
		<script src="./js/index.js" type="text/javascript"></script>
	</body>
</html>
