<?php
/**
 * @author Will Hogben <will@getitllc.com>
 * @copyright Copyright (c) 2014 GetIt, LLC (http://www.getit.me)
 */


class CartController extends BaseController {

    public function checkoutAction()
    {

    }

    public function addToCart()
    {
        $itemId = Input::get('itemId');
        $quantity = Input::get('quantity', 1);

        if (!$itemId) {

            return array('success' => false);
        }

        $cartId = Session::get('cartId');
        if ($cartId) {

            /** @var Cart $cart */
            $cart = Cart::find($cartId);
        } else {

            $cart = new Cart();
            $userId = Input::get('userId');

            $cart->setUserId($userId);
            $cart->addItem($itemId, $quantity);
        }
    }

} 