<?php
/**
 * @author Will Hogben <will@getitllc.com>
 * @copyright Copyright (c) 2014 GetIt, LLC (http://www.getit.me)
 */

class StoreController extends BaseController {

    const ITEMS_PER_PAGE = 16;

    /**
     * The basic action of the store. Lists items based on search results or
     * categories.
     *
     * @return \Illuminate\View\View
     */
    public function storeAction()
    {
        $category = Input::get('category');
        $item = new Item;
        $item->setName('name');
        $item->setShortDescription('description');

        $this->layout = View::make('store');
        $this->with['items'] = array($item, $item, $item, $item, $item, $item);
        $this->addViewParams();

        return $this->layout;
    }

    /**
     * Goes to the cart page.
     */
    public function cartAction()
    {
        $this->layout = View::make('cart');
        $this->addViewParams();

        $cartId = Session::get('cartId');

        /** @var Cart $cart */
        $cart = Cart::find($cartId);
        $items = $cart->getItems();

        $this->with['items'] = $items;

        return $this->layout;
    }

    public function checkoutAction()
    {
        if (!User::isAuthenticated() && !Input::get('guest')) {
            return Redirect::action('IndexController@loginAction',
                array(
                    'redirect' => 'cart',
                    'fromCart' => true
                )
            );
        }

        $cartId = Input::get('cartId');
        $this->layout = View::make('checkout');
        $this->with = array(
            'cartId' => $cartId
        );
        $this->addViewParams();

        return $this->layout;
    }

}
 
 