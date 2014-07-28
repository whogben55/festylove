<?php
/**
 * @author Will Hogben <will@getitllc.com>
 * @copyright Copyright (c) 2014 GetIt, LLC (http://www.getit.me)
 */

use Stripe;
use Stripe_Charge;

class Cart extends Eloquent {

    /**
     * @var integer
     */
    private $userId;

    /**
     * @var integer
     */
    private $id;

    /**
     * @var string
     */
    private $created;

    /**
     * Send the cart.
     */
    public function checkOut()
    {
        Stripe::setApiKey('apikey');

        if (User::isAuthenticated()) {


        }
    }

    /**
     * Add an item to the cart
     *
     * @param integer $itemId
     * @param integer $quantity
     */
    public static function addItem($itemId, $quantity)
    {
        // If we have a curent user than
        $cartId = Session::get('cartId', false);

        if (!$cartId) {

            $cart = new Cart;
            $cart->setCreated(date('Y-m-d H:i:s'));
            if (User::isAuthenticated()) {
                $user = User::getAuthenticatedUser();
                $cart->setUserId($user->getId());
            }
            $cart->save();
            Session::set('cartId', $cart->getId());
        } else {

            $cart = Cart::find($cartId);
        }

        CartItem::addItemToCart($cart->getId(), $itemId, $quantity);
    }

    /**
     * Get all the items in the cart.
     *
     * @return CartItem[]
     */
    public function getItems()
    {
        /** @var CartItem[] $items */
        $items = CartItem::where('cartId', '=', $this->id)->all();

        return $items;
    }

    /**
     * @param integer $userId
     *
     * @return $this
     */
    public function setUserId($userId)
    {
        $this->userId = $userId;

        return $this;
    }

    /**
     * @return integer
     */
    public function getUserId()
    {
        return $this->userId;
    }

    /**
     * @param string $created
     *
     * @return $this
     */
    public function setCreated($created)
    {
        $this->created = $created;
        return $this;
    }

    /**
     * @return string
     */
    public function getCreated()
    {
        return $this->created;
    }

    /**
     * @return integer
     */
    public function getId()
    {
        return $this->id;
    }



} 