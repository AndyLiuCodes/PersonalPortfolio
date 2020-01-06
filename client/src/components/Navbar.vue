<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="nav_bar">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler fancy-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ml-auto text-right">
                    <li class="nav-item active">
                        <a class="nav-link scroll" href="#top">Home<span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link scroll" href="#aboutme">About Me</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link scroll" href="#">Projects</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link scroll" href="#">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script>
import $ from 'jquery'
export default {
    mounted (){
        
        $(document).ready(function(){
            var scrollLink = $('.scroll')

            //Smooth Scrolling
            scrollLink.click(function(e) {
                    e.preventDefault();
                    $('body, html').animate({
                        scrollTop: $(this.hash).offset().top -50
                    }, 800)
            });

            //Active Link Switching

            $(window).scroll(function(){
                var scrollbarLocation = $(this).scrollTop()
                
                scrollLink.each(function(){
                    var sectionOffset = $(this.hash).offset().top - 50
                    if (sectionOffset <= scrollbarLocation){
                        $(this).parent().addClass('active')
                        $(this).parent().siblings().removeClass('active')
                    }
                })
            })
        })
    }
}

</script>

<style scoped>
    .fancy-toggler.navbar-toggler .navbar-toggler-icon {
        background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(102, 252, 241, 1)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E");
    }

    .fancy-toggler.navbar-toggler {
        border: none;
    }

    .fancy-toggler.navbar-toggler:focus {
        border: none;
        outline: none;
    }

    li {
        margin-left: 20px;
        padding: 0 10px;
    }

    .navbar {
        margin-top: 20px;
    }

    .navbar-dark .navbar-nav .nav-link {
        color: #45A29E; 
    }

    .navbar-nav > .active > a {
        color: #66FCF1 !important;
    }

    .nav-item > a:hover {
        color: #66FCF1 !important;
    }

    .navbar-nav {
        width: 35%;
    }

</style>