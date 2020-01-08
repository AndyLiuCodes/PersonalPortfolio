<template>
    <div>
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
      </div>
</template>

<script>

</script>

<style scoped>
.bg-home{
    width: 97%;
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
</style>