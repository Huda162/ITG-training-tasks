$(document).ready(function(){
    $("#validation-form").validate({
        rules:{
            email: {
                required: true,
                email: true
            },
            password: {
                required: true,
                minlength: 8,
                strongPassword: true
            }
        },
        messages:{
            email:{
                required: "Please Enter Your Email",
                email: "Please Enter A valid Email"
            },
            password:{
                required: "Please enter your password",
                minlength: "Your password must be at least 8 characters long",
                strongPassword: "Your password must be strong"
            }
        },
        errorPlacement: function (error, element) {
            if (element.attr("name") === "email") {
                error.appendTo("#password-alert");
                element.attr("id", "email-alert");
                $("#email-alert").css({
                    "color": "red"
                })
            } else if (element.attr("name") === "password") {
                error.appendTo("#password-alert");
                $("#password-alert").css({
                    "color": "red"
                })
            } 
        },
        highlight: function(element) {
            $(element).addClass('redClass');
            },
            unhighlight: function(element) {
            $(element).removeClass('redClass');
            },
        submitHandler: function (form) {
            submitted();
        }
    })
    $.validator.addMethod("strongPassword", function (value, element) {
        return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.-])[A-Za-z\d@$!%*?&]/.test(value);
    }, "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character");
    function submitted() {
        console.log("Form submitted!");
    }
})