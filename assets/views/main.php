<!DOCTYPE html>
<html>
	<head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
		<title>PHPixie</title>
        <link href="css/bootstrap.min.css" rel="stylesheet" type="text/css">
	</head>
	<body>
        <div class="container">
            <div class="page-header">
                <h1>Sticky footer</h1>
            </div>
            <p class="lead">Pin a fixed-height footer to the bottom of the viewport in desktop browsers with this custom HTML and CSS.</p>
            <p>Use the sticky footer with a fixed navbar if need be, too.</p>
        </div>
		<!-- Here is where we include a subtemplate -->
		<?php include($subview.'.php');?>

        <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
        <!-- Include all compiled plugins (below), or include individual files as needed -->
        <script src="../js/bootstrap.min.js"></script>
	</body>
</html>