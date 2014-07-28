<?php
/**
 * @author Will Hogben <will@getitllc.com>
 * @copyright Copyright (c) 2014 GetIt, LLC (http://www.getit.me)
 */


class CartItem extends Eloquent {

    /**
     * @var integer
     */
    private $id;

    /**
     * @var integer
     */
    private $cartId;

    /**
     * @var integer
     */
    private $itemId;

    /**
     * @var integer
     */
    private $quantity;

    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'cart_item';

    /**
     * Creates an item and adds it to the cart. If the item is already in the
     * cart this function updates the quantity.
     *
     * @param $cartId
     * @param $itemId
     * @param $quantity
     */
    public static function addItemToCart($cartId, $itemId, $quantity)
    {
        /** @var CartItem $cartItem */
        $cartItem = CartItem::where('cartId', '=', $cartId)
            ->where('itemId', '=', $itemId)->first();
        if (!$cartItem) {

            $cartItem = new CartItem();
            $cartItem->setCartId($cartId);
            $cartItem->setQuantity($quantity);
            $cartItem->setItemId($itemId);
        } else {

            $cartItem->setQuantity($quantity + $cartItem->getQuantity());
        }

        $cartItem->save();
    }

    /**
     * @TODO Comment this!
     *
     * @param integer $cartId
     *
     * @return $this
     */
    public function setCartId($cartId)
    {
        $this->cartId = $cartId;
        return $this;
    }

    /**
     * @TODO Comment this!
     *
     * @return integer
     */
    public function getCartId()
    {
        return $this->cartId;
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
     * @param integer $itemId
     *
     * @return $this
     */
    public function setItemId($itemId)
    {
        $this->itemId = $itemId;
        return $this;
    }

    /**
     * @TODO Comment this!
     *
     * @return integer
     */
    public function getItemId()
    {
        return $this->itemId;
    }

    /**
     * @TODO Comment this!
     *
     * @param integer $quantity
     *
     * @return $this
     */
    public function setQuantity($quantity)
    {
        $this->quantity = $quantity;
        return $this;
    }

    /**
     * @TODO Comment this!
     *
     * @return integer
     */
    public function getQuantity()
    {
        return $this->quantity;
    }
} 