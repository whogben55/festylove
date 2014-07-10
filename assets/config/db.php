<?php

return array(
	'default' => array(
		'user' => 'root',
		'password' => 'devpass',
		'driver' => 'PDO',

		//'Connection' is required if you use the PDO driver
		'connection' => 'mysql:host=localhost;dbname=netflix',

		// 'db' and 'host' are required if you use Mysql driver
		'db'  => 'netflix',
		'host' => 'localhost',
	)
);
