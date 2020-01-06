<template id="about">
    <div id="wrapper">
        <div id="title" class="col-md-offset-3 col-md-9">
            <div class="jumbotron bg-home">
                <h1 class="display-4" id="line">About Me</h1>
            </div>
        </div>

        <div id="content">
            <div class="row" id="about">
                <div class="col-lg-12 col-md-11 col-sm-12">
                    <p class="text-left desc">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum 
                        massa mi, accumsan at venenatis eu, ultrices in ante. Donec sagittis 
                        est sed sem tempor tristique at eu tellus. Aliquam dolor orci, lacinia 
                        et ultrices sollicitudin, posuere ut enim. Class aptent taciti sociosqu ad 
                        litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque habitant 
                        morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam sed suscipit
                        mauris. Suspendisse vestibulum congue eros gravida interdum. Donec eu finibus dui.
                        litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque habitant 
                        morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam sed suscipit                       
                    </p>
                </div>
            </div>

            <div class="row other">
                <div class="col-lg-8 col-sm-12">
                    <h2 class="display-6 text-left">Education</h2>
                    <br>
                    <p class="text-left">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum 
                        massa mi
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum 
                        massa mi
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum 
                        massa mi
                    </p>
                </div>
            </div>

            <div class="row other">
                <div class="col-lg-3 col-sm-12">
                    <h2 class="display-6 text-left">Skills</h2>
                </div>
            </div>
            <br>
            <div class="row justify-content-center" id="skill">
                <div class="col-lg-2 col-md-5 col-sm-12">
                    <h4 class="text-center">Languages</h4>
                    <ul class="text-center">
                        <li>Lorem ipsum</li>
                        <li>Lorem ipsum</li>
                        <li>Lorem ipsum</li>
                        <li>Lorem ipsum</li>
                        <li>Lorem ipsum</li>
                        <li>Lorem ipsum</li>
                        <li>Lorem ipsum</li>
                        <li>Lorem ipsum</li>
                    </ul>
                </div>
                <div class="col-lg-2 col-sm-12">
                    <h4 class="text-center">Frameworks</h4>
                    <ul class="text-center">
                        <li>Lorem ipsum</li>
                        <li>Lorem ipsum</li>
                        <li>Lorem ipsum</li>
                        <li>Lorem ipsum</li>
                        <li>Lorem ipsum</li>
                        <li>Lorem ipsum</li>
                        <li>Lorem ipsum</li>
                        <li>Lorem ipsum</li>
                    </ul>
                </div>
                <div class="col-lg-2 col-sm-12">
                    <h4 class="text-center">Tools</h4>
                    <ul class="text-center">
                        <li>Lorem ipsum</li>
                        <li>Lorem ipsum</li>
                        <li>Lorem ipsum</li>
                        <li>Lorem ipsum</li>
                        <li>Lorem ipsum</li>
                        <li>Lorem ipsum</li>
                        <li>Lorem ipsum</li>
                        <li>Lorem ipsum</li>
                    </ul>
                </div>
                <div class="col-lg-2 col-sm-112">
                    <h4 class="text-center">Something</h4>
                    <ul class="text-center">
                        <li>Lorem ipsum</li>
                        <li>Lorem ipsum</li>
                        <li>Lorem ipsum</li>
                        <li>Lorem ipsum</li>
                        <li>Lorem ipsum</li>
                        <li>Lorem ipsum</li>
                        <li>Lorem ipsum</li>
                        <li>Lorem ipsum</li>
                    </ul>
                </div>
            </div>
                
        </div>
    </div>
</template>

<script>

</script>

<style scoped>

.bg-home{
    width: 97%;
}

#about{
    width: 80%;
    height: 100%;

}

.other {
    width: 80%;
}

#line {
    position: relative;
    font-size: 40px;
    z-index: 1;
    overflow: hidden;
    text-align: center;
    color: #66FCF1;
}

#line:before, #line:after {
    position: absolute;
    top: 51%;
    overflow: hidden;
    width: 50%;
    height: 0.4px;
    content: '\a0';
    background-color: #C5C6C7;

}

#line:before {
    margin-left: -52%;
    text-align: right;
}
#line:after {
    margin-left: 2%;
    text-align: left;
}

#content {
    position: relative;
    margin-left: 16%;
    top: 125px;
}

.other{
    margin-top: 100px;    
}

.other h2 {
    color: #45A29E;
}

#content p, #content li {
    color: #C5C6C7;
}

ul {
    list-style: none;
    margin-left: 0;
    padding-left: 0
}

li {
    padding-left: 1em;
    text-indent: -1em;
}

li:before {
    content: ">";
    padding-right: 5px;
}

.desc {
    font-size : 18px;
}

#title, #skill{
    margin: 0 auto;
}

#content > #skill {
    transform: translateX(-5%);
}

</style>