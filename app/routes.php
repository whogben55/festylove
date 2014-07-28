<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the Closure to execute when that URI is requested.
|
*/
$routes = array(
    '/' =>   'IndexController@indexAction',
    '/login' => 'IndexController@loginAction',
    '/store' => 'StoreController@storeAction',
    '/cart' => 'StoreController@cartAction',
    '/cart/checkout' => 'StoreController@checkoutAction'
);

foreach ($routes as $url => $function) {
    Route::get($url, $function);
}

Route::post('/cart/checkout', 'StoreController@paymentAction');
