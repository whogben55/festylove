<?php

class IndexController extends BaseController {

	/*
	|--------------------------------------------------------------------------
	| Default Home Controller
	|--------------------------------------------------------------------------
	|
	| You may wish to use controllers instead of, or in addition to, Closure
	| based routes. That's great! Here is an example controller method to
	| get you started. To route to this controller, just add the route:
	|
	|	Route::get('/', 'HomeController@showWelcome');
	|
	*/

	public function indexAction()
	{
		$this->layout = View::make('home');
        $this->addViewParams();

        return $this->layout;
	}

    public function loginAction()
    {
        $this->layout = View::make('login');
        $this->with['fromCart'] = Input::get('fromCart', true);
        $this->addViewParams();

        return $this->layout;
    }

}
