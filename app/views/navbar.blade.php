<nav class="navbar navbar-fixed-top navbar-inverse" role="navigation">
    <div class="container">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="/">Home</a>
        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse navbar-ex1-collapse">
            <ul class="nav navbar-nav">
                <li><a href="/store">Store</a>
                </li>
                <li><a href="/community">Community</a>
                </li>
                <li><a href="/storyboard">Story Board</a>
                </li>
            </ul>
            <ul class="nav navbar-nav navbar-right">
                <li class="navbar-right"><a href="/login">Login</a></li>
                @if ($cart >= 0)
                    <li class="navbar-right"><a href="/cart">Cart({{ $cart }})</a></li>
                @endif
            </ul>
        </div>
        <!-- /.navbar-collapse -->
    </div>
    <!-- /.container -->
</nav>
 
 