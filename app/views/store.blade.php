@extends('layout')
@section('content')
<div class="container header">
    <div class="breadcrumbs">
        <h1>The Trading Post</h1>
        <hr class="featurette-divider">
    </div>
    <div class="header">
        <div class="col-lg-4">
            <a class="darken" href="/store/festival">
                <div class="thumbnail">
                    <img src="/images/festival.jpg" alt="festival">
                    <h2 class="imgDescription">In The Festival</h2>
                </div>
            </a>
        </div>

        <div class="col-lg-4">
            <a class="darken" href="/store/camping">
                <div class="thumbnail">
                    <img src="/images/camping.jpg" alt="camping">
                    <h2 class="imgDescription">The Campground</h2>
                </div>
            </a>
        </div>

        <div class="col-lg-4">
            <a class="darken" href="/store/road">
                <div class="thumbnail">
                    <img src="/images/road.jpg" alt="road">
                    <h2 class="imgDescription">The Roadtrip</h2>
                </div>
            </a>
        </div>

    </div>
</div>

<div class="container">
    <hr class="featurette-divider">
    <div>
        <h2>Most Popular</h2>
    </div>
    <hr class="featurette-divider">
</div>

<div class="container">
    <div class="row text-center">

        @foreach ($items as $item)
        <div class="col-lg-3 hero-feature">
            <img class="img-square" src="http://placehold.it/800x800" alt="Generic placeholder image" style="width: 200px; height: 200px;">
            <div class="caption">
                <h3>{{ $item->getName() }}</h3>
                <p> {{ $item->getShortDescription() }}</p>
                <p><a href="#" class="btn btn-primary">Add to Cart</a>  <a href="#" class="btn btn-default">More Info</a>
                </p>
            </div>
        </div>
        @endforeach

    </div>
</div>
@stop
@section('header')
<link href="css/store.css" rel="stylesheet" type="text/css">
@stop