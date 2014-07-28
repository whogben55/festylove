@extends('layout')
@section('content')
<div class="container login">
    <form class="form-signin" role="form" action"{{{ $redirect or '/' }}}">
    <h2 class="form-signin-heading">Shipping Information</h2>
    Email<input type="email" class="form-control" placeholder="Email address" required autofocus>
    First Name<input type="firstName" class="form-control" required>
    Last Name<input type="lastName" class="form-control" required>
    Address<input type="firstName" class="form-control" required>
    Suite, Apt No.<input type="address2" class="form-control" required>
    City<input type="firstName" class="form-control" required>
    State<input type="firstName" class="form-control" required>
    <div class="checkbox">
        <label>
            <input type="checkbox" value="remember-me"> Remember me
        </label>
    </div>
    <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
    <a class="account" href="/forgot-password">Forgot Password</a>
    <a class="account" id="right" href="/sign-up">Sign Up</a>
    </form>
    @if ($fromCart)
    <h3>Or, Checkout as a <a href="cart/checkout?guest=1">Guest</a></h3>
    @endif

</div> <!-- /container -->
@stop

@section('header')
<link href="css/login.css" rel="stylesheet">
@stop
 
 