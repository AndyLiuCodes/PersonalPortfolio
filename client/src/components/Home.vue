<template id="home">
    <div class="wrapper text-center">
        <div class="jumbotron bg-home">
            <div class="container">
                <h1 class="display-4 text-left">Hi, <br> I'm <strong>Andy Liu</strong></h1>
                
                <p class="lead text-left" id="type-anim">
                </p>
                
            </div>
        </div>
    </div>
</template>

<script>
    //Animation
    var i = 0;
    var txt = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum massa mi, accumsan at venenatis eu, ultrices in ante. Donec sagittis est sed sem tempor tristique at eu tellus. Aliquam dolor orci, lacinia et ultrices sollicitudin, posuere ut enim. Class aptent taciti sociosqu ad '; /* The text */
    var speed = 10; /* The speed/duration of the effect in milliseconds */
    window.onload = function(){
        typeWriter();
    };

    function typeWriter() {
        if (i < txt.length) {
            document.getElementById("type-anim").innerHTML += txt.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }

</script>

<style>
    #home {
        height: 100%;
    }
    .wrapper {
        position: relative;
        height: 50em;
    }
    .jumbotron {
        width: 70%;
        position: absolute;
    }
    .container h1 {
        margin-bottom: 40px;
    }
    .container p{
        color: #C5C6C7;
    }
    .bg-home {
        background: transparent !important;
        padding: 0 !important;
    }

</style>