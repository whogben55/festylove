<?php

use Illuminate\Auth\UserTrait;
use Illuminate\Auth\UserInterface;
use Illuminate\Auth\Reminders\RemindableTrait;
use Illuminate\Auth\Reminders\RemindableInterface;

class User extends Eloquent implements UserInterface, RemindableInterface {

	use UserTrait, RemindableTrait;

    private static $_authenticatedUser;

	/**
	 * The database table used by the model.
	 *
	 * @var string
	 */
	protected $table = 'users';

	/**
	 * The attributes excluded from the model's JSON form.
	 *
	 * @var array
	 */
	protected $hidden = array('password', 'remember_token');

    private $stripeId;

    /**
     * @var integer
     */
    private $id;


    /**
     * Check if there is a user logged in.
     *
     * @return bool
     */
    public static function isAuthenticated()
    {
        return isset(self::$_authenticatedUser);
    }

    public static function getAuthenticatedUser()
    {
        return self::$_authenticatedUser;
    }

    /**
     * @TODO Comment this!
     *
     * @param integer $id
     *
     * @return $this
     */
    public function setId($id)
    {
        $this->id = $id;
        return $this;
    }

    /**
     * @TODO Comment this!
     *
     * @return integer
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * @TODO Comment this!
     *
     * @param mixed $stripeId
     *
     * @return $this
     */
    public function setStripeId(mixed $stripeId)
    {
        $this->stripeId = $stripeId;
        return $this;
    }

    /**
     * @TODO Comment this!
     *
     * @return mixed
     */
    public function getStripeId()
    {
        return $this->stripeId;
    }
}
