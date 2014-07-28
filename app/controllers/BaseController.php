<?php

class BaseController extends \Illuminate\Routing\Controller {

    /**
     * @var array values to add to the view.
     */
    protected $with = array();

	/**
	 * Setup the layout used by the controller.
	 *
	 * @return void
	 */
	protected function setupLayout()
	{
		if ( ! is_null($this->layout))
		{
			$this->layout = View::make($this->layout);
		}
	}

    /**
     * Add the view parameters to the view.
     */
    protected function addViewParams()
    {
        $this->addDefaultViewParams();
        foreach ($this->with as $key => $param) {

            $this->layout->with($key, $param);
        }
    }

    /**
     * Add view params that are used on every page.
     */
    protected function addDefaultViewParams()
    {
        $this->with['cart'] = 0;
    }

}
