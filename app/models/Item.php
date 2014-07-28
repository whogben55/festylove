<?php
/**
 * @author Will Hogben <will@getitllc.com>
 * @copyright Copyright (c) 2014 GetIt, LLC (http://www.getit.me)
 */


class Item extends Eloquent{

    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'items';

    /**
     * @var string
     */
    private $_shortDescription;

    /**
     * @var string
     */
    private $_name;

    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = array('password', 'remember_token');

    /**
     * @param string $shortDescription
     *
     * @return Item $this
     */
    public function setShortDescription($shortDescription)
    {
        $this->_shortDescription = $shortDescription;

        return $this;
    }

    /**
     * @return string
     */
    public function getShortDescription()
    {
        return $this->_shortDescription;
    }

    /**
     * @param string $name
     *
     * @return $this
     */
    public function setName($name)
    {
        $this->_name = $name;
        return $this;
    }

    /**
     * @return string
     */
    public function getName()
    {
        return $this->_name;
    }

    /**
     * Get all items that are in a specific category.
     *
     * @param string $category
     *
     * @return Item[]
     */
    public static function getByCategory($category)
    {
        $items = Item::where('category', '=', $category)->all();

        return $items;
    }



} 