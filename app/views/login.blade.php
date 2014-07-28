@extends('layout')
@section('content')
<div class="container login">
    <form class="form-signin" role="form" action"{{{ $redirect or '/' }}}">
        <h2 class="form-signin-heading">Login</h2>
        <input type="email" class="form-control" placeholder="Email address" required autofocus>
        <input type="password" class="form-control" placeholder="Password" required>
        <div class="checkbox">
            <label>
                <input type="checkbox" value="remember-me"> Remember me
            </label>
        </div>
        <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
        <a class="account" href="/forgot-password">Forgot Password</a>
        <a class="account" id="right" href="/sign-up{{{ isset($redirect) ? 'redirect=' . $redirect : '' }}}
        ">Sign Up</a>
    </form>
    @if ($fromCart)
    <h3>Or, Checkout as a <a href="cart/checkout?guest=1">Guest</a></h3>
    @endif

</div> <!-- /container -->
@stop

@section('header')
<link href="css/login.css" rel="stylesheet">
@stop
 
 