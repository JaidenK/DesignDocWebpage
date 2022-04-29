$("header").prepend();

$(function() {
    $(".latex").latex();
    $("title").prepend("Pellentesque | ");
});
hljs.initHighlightingOnLoad();

$("#header").html(`
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
        <div class="container">
            <a class="navbar-brand" href="index.html"><img class="navbar-brand" src="images/logo.svg" height="32"/> Pellentesque</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="collapsibleNavbar">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                <a class="nav-link" href="#">Foo</a>
                </li>
            </ul>
            </div>
        </div>
    </nav>
`);

$("#footer").html(`
<style>
    body 
    {
        position: relative;
        min-height: 100vh;
    }
    main
    {
        padding-bottom: 4rem;
    }
    footer {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 4rem;
        line-height: 4rem;
        background-color: #f5f5f5;
    }
</style>

<footer class="footer">
    <div class="container">
        <span class="text-muted">Html and JavaScript by Jaiden King. Subject to est nec placerat commodo, arcu est luctus quam on the homepage of this document.</span>
    </div>
</footer>
`);

$("#sidenav").html(`
<nav class="bd-links">
    <div class="bd-toc-item">
        <a class="bd-toc-link" href="#">Thing</a>
        <ul class="nav bd-sidenav">
            <li class="">
                <a class="" href="#">Thing</a>
            </li>
            <li class="">
                <a href="#">Thing</a>
            </li>
            <li class="">
                <a href="#">Thing</a>
            </li>
            <li class="">
                <a href="#">Thing</a>
            </li>
            <li class="">
                <a href="#">Thing</a>
            </li>
        </ul>
    </div>
    <div class="bd-toc-item">
        <a class="bd-toc-link" href="#">Thing</a>
        <ul class="nav bd-sidenav">
            <li class="">
                <a class="" href="#">Thing</a>
            </li>
            <li class="">
                <a href="#">Thing</a>
            </li>
            <li class="">
                <a href="#">Thing</a>
            </li>
            <li class="">
                <a href="#">Thing</a>
            </li>
            <li class="">
                <a href="#">Thing</a>
            </li>
        </ul>
    </div>
    <div class="bd-toc-item">
        <a class="bd-toc-link" href="#">Thing</a>
        <ul class="nav bd-sidenav">
            <li class="">
                <a class="" href="#">Thing</a>
            </li>
            <li class="">
                <a href="#">Thing</a>
            </li>
            <li class="">
                <a href="#">Thing</a>
            </li>
            <li class="">
                <a href="#">Thing</a>
            </li>
            <li class="">
                <a href="#">Thing</a>
            </li>
        </ul>
    </div>
</nav>
`);