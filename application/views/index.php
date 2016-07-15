
<!doctype html>
<html lang="es">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width">
		<title>PHP Seed</title>

		<script src="./public/bower_components/angular/angular.js"></script>
		<script src="./public/bower_components/angular-bootstrap/ui-bootstrap-tpls.js"></script>
		<script src="./public/bower_components/angular-resource/angular-resource.js"></script>
		<script src="./public/bower_components/angular-ui-router/release/angular-ui-router.js"></script>
		<script src="./public/bower_components/jquery/dist/jquery.js"></script>

		<link rel="stylesheet" href="./public/assets/css/style.css">
		<link rel="stylesheet" href="./public/bower_components/bootstrap/dist/css/bootstrap.css">

		<script src="./public/app.js"></script>
		<script src="./public/routes/home.js"></script>
		<script src="./public/routes/public.js"></script>
		<script src="./public/routes/demo.js"></script>
		<script src="./public/routes/tablero.js"></script>
		<script src="./public/routes/config.js"></script>

		<script src="./public/services/persons.js"></script>

		<script src="./public/controllers/main.js"></script>
		<script src="./public/controllers/home.js"></script>
		<script src="./public/controllers/contact.js"></script>
		<script src="./public/controllers/demo/persons.js"></script>
		<script src="./public/controllers/tablero-controller.js"></script>
		<script src="./public/controllers/versiculo-controller.js"></script>
		<script src="./public/controllers/week-controller.js"></script>
		<script src="./public/controllers/config-controller.js"></script>

		<style>
			/*
			background-image: url("img_tree.png");
			background-repeat: no-repeat;
			background-position: right top;
			margin-right: 200px;
			background-attachment: fixed;
	 		*/
			body {
				background-color: #D5FCC6;
				overflow-y: auto;
				overflow-x: hidden;
			}
		</style>
	</head>

	<body>

		<div ng-app="seedApp">

			<div class="superBack"><br><br></div>

			<div class="superFront"></div>

			<div class="header text-center">
				<a class="btn btn-success" role="button" ui-sref="home.tablero">Go to Tablero</a>
				<a class="btn btn-danger" role="button" ui-sref="home.config" ng-click="init();">Conf.*</a>
			</div>

			<div ui-view></div>
			<div class="footer">
				<hr>
				<p class="alert alert-info text-center">Press <kbd>F11</kbd> for enter and out of full screen mode</p>
				<pre ng-controller="TableroController" class="alert alert-danger text-right"><strong>User:</strong> <em> Visite </em> - You logged on time: <mark> {{mytime | date:'shortTime' }} </mark></pre>

			</div>

		</div>

	</body>
</html>
