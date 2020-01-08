<template>
    <div class="wrapper">
        <div id="title" class="col-md-offset-3 col-md-9">
            <div class="jumbotron bg-home">
                <h1 class="display-4" id="line">Contact Me</h1>
            </div>
        </div>


        <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet">

        <!-- Button trigger modal -->
        <div class="row justify-content-center content">
            <div class="col-4">
                <p class="display-6 text-left">
                    <label>Want to get in touch?</label>
                    <br>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum 
                    massa mi, accumsan at venenatis eu, ultrices in ante. Donec sagittis 
                    est
                </p>
            </div>

            <div class="mail col-2">
                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
                    <i class="fa fa-envelope"></i> andyliu5898@gmail.com
                </button>
            </div>
        </div>

        <!-- Modal -->
        <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLongTitle">Contact Me</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <!--Section: Contact v.2-->
                        <section class="mb-4">
                            <div class="row justify-content-center">
                                <!--Grid column-->
                                <div class="col-md-9 mb-md-0 mb-5">
                                    <form id="contact-form" name="contact-form" action="mail.php" method="POST">

                                        <!--Grid row-->
                                        <div class="row">

                                            <!--Grid column-->
                                            <div class="col-md-6">
                                                <div class="md-form mb-0">
                                                    <input type="text" id="name" name="name" class="form-control">
                                                    <label for="name" class="">Your name</label>
                                                </div>
                                            </div>
                                            <!--Grid column-->

                                            <!--Grid column-->
                                            <div class="col-md-6">
                                                <div class="md-form mb-0">
                                                    <input type="text" id="email" name="email" class="form-control">
                                                    <label for="email" class="">Your email</label>
                                                </div>
                                            </div>
                                            <!--Grid column-->

                                        </div>
                                        <!--Grid row-->

                                        <!--Grid row-->
                                        <div class="row">
                                            <div class="col-md-12">
                                                <div class="md-form mb-0">
                                                    <input type="text" id="subject" name="subject" class="form-control">
                                                    <label for="subject" class="">Subject</label>
                                                </div>
                                            </div>
                                        </div>
                                        <!--Grid row-->

                                        <!--Grid row-->
                                        <div class="row">

                                            <!--Grid column-->
                                            <div class="col-md-12">

                                                <div class="md-form">
                                                    <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea"></textarea>
                                                    <label for="message">Your message</label>
                                                </div>

                                            </div>
                                        </div>
                                        <!--Grid row-->
                                    </form>
                                    <div class="status"></div>
                                </div>
                                <!--Grid column-->
                            </div>

                        </section>
                        <!--Section: Contact v.2-->
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <a class="btn btn-primary" onclick="document.getElementById('contact-form').submit();">Send</a>
                    </div>
                </div>
            </div>
        </div>  
        <!--/.nav-collapse -->
        <hr>
        <div id="footer">
            <div class="row ">
                <div class="col-6 text-left">
                    <div class="footer-copyright text-center py-3">© 2020 Copyright:
                        <a href="#"> andyliu.com</a>
                    </div>
                </div>
                <div class="col-6 text-right">
                    <ul class="social nav navbar-nav navbar-right nav-pills list-group list-group-horizontal">
                        <li>
                            <a href="http://facebook.com/" class="btn-facebook list-group-item">
                                <i class="fa fa-facebook"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#" class=" btn-instagram list-group-item">
                                <i class="fa fa-instagram"></i>
                            </a>
                        </li>
                        <li>
                            <a
                                href="http://www.linkedin.com/in/"
                                class="btn-linkedin list-group-item"
                            >
                                <i class="fa fa-linkedin"></i>
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://github.com/broadmarkio"
                                class="btn-github list-group-item"
                            >
                                <i class="fa fa-github"></i>
                            </a>
                        </li>
                        <li class="leet">
                            <a href="#" class="list-group-item">
                                <span class="iconify" data-icon="simple-icons:leetcode" data-inline="false"></span>
                            </a>
                        </li>
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

.wrapper{
    height: 100%;
    position: relative;
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

#title{
    margin: 0 auto;
}

button {
    background-color: transparent;
    border: solid 3px #66FCF1;
    border-radius: 10px;
    color: #C5C6C7;

}

.content {
    position: relative;
    top: 100px;
}

p {
    color: #C5C6C7;
}

p > label {
    color: #45A29E;
}

.mail {
    position: relative;
    top: 25px;
    margin-left: 50px;
}

#footer {
    position: relative;
    top: 150px;
}

#footer a{
    background-color: transparent !important;
    color: #66FCF1;
}

.leet {
    position: relative;
    bottom: 2px;
}
.footer-copyright {
    color: #C5C6C7;
}

.social {
    margin-left: 200px;
}

hr {
    height: 0.5px;
    background-color: #595959;
    position: relative;
    top: 150px;
    margin-top: 250px;
}
</style>