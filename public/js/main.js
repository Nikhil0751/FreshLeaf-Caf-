(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner(0);


    // Fixed Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-200px');
        }
    });
    
    
   // Back to top button
   $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Latest-news-carousel
    $(".latest-news-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 2000,
        center: false,
        dots: true,
        loop: true,
        margin: 25,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            },
            1200:{
                items:4
            }
        }
    });


    // What's New carousel
    $(".whats-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 2000,
        center: false,
        dots: true,
        loop: true,
        margin: 25,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:2
            },
            1200:{
                items:2
            }
        }
    });



    // Modal Video
    $(document).ready(function () {
        var $videoSrc;
        $('.btn-play').click(function () {
            $videoSrc = $(this).data("src");
        });
        console.log($videoSrc);

        $('#videoModal').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        $('#videoModal').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc);
        })
    });
    $("#txtemail").blur(function () {
        if($("#txtemail").val()=="")
        { //alert("Empty");
          return;
        }
var Emailkuu =$("#txtemail").val();
var a=0;
        var r=/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/  ;
               if(r.test(Emailkuu)==true)
                    {
                        // $("#result").html("OK");
                        $("#result").removeClass("okhay").html("");
                        a=5;
                    }
                else
                    {
                        $("#result").html("Invalid email id").addClass("okhay").removeClass("sokhay");

                    }
if(a!=5)
{
  return;
}
        var emailku = $(this).val();
        var obj = {
          type: "get",
          url: "/user/check",
          data: {
            kuchemail: emailku
          }
        }
        $.ajax(obj).done(function (respkuch) {
          $("#result").html(respkuch);
          if (respkuch == "Already Taken...")
            {$("#result").html(respkuch).css("color", "red");
            $("#SendOtp").css("display","none");
        }
          else
          {
            $("#result").html(respkuch).css("color", "black");
            $("#SendOtp").css("display","block");
          }
        }).fail(function (errkuch) {
          $("#result").html(respkuch);
        })
      });

     //===================================================
     $("#txtpwd").blur(function(){
      var r=/(?=^.{8,}$)(?=.*\d)(?=.*[!@#$%^&*]+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
                var pwd=$("#txtpwd").val();
               if(r.test(pwd)==true)
                    $("#errPwd").html("").removeClass("okhay");
                else
                    $("#errPwd").html("Please Choose Strong Password").addClass("okhay");
     })
      //================================================= 
      $("#BUTON").click(function () {
        var Emailkuu = $("#txtemail").val();
        var Passku = $("#txtpwd").val();
 
      if( $("#errPwd").html()!="Please Choose Strong Password" && $("#result").html()!="Already Taken...")
{
        var obj = {
          type: "get",
          url: "/user/signup",
          data: {
            kuchemail: Emailkuu,
            kuchPWD: Passku,
          }
        }
        $.ajax(obj).done(function (Response) {
          if(Response=="You are Successfully Signed Up")
          {
            alert(Response);
          }
          else
          {
            alert(Response);
          }
          $("#Sres").html(Response);
        }).fail(function (errkuch) {
          $("#Sres").html(Response);
        })

      }
      else
      alert("Invalid Email-Id/Password");
      });

// ============================================================
      //====================================
      $("#BUTONLOG").click(function () {
        var Emailkuu = $("#txtemailLog").val();
        var Pwdku = $("#txtpwdlog").val();
        var obj = {
          type: "get",
          url: "/user/login",
          data: {
            kuchemaillog: Emailkuu,
            kuchpwdlog: Pwdku,
          }
        }
        $.ajax(obj).done(function (respkuch) {
          localStorage.setItem("ActiveUser", $("#txtemailLog").val());
          $("#loginResp").html(respkuch + " User: "+$("#txtemailLog").val());
          if (respkuch == "Incorrect Password")
            $("#loginResp").html("Incorrect Password").css("color", "red");

          if (respkuch == "User Blocked")
            $("#loginResp").html("You Are Blocked").css("color", "red");

          if(respkuch == "Welcome")
          {
            $("#showLog").css("display","block");
          }
          else {
            $("#showLog").css("display","none");
          }
        });
      });
      $("#showLog").click(function(){
        location.href = "../cart.html";
      })
      //====================================
      $("#txtemailLog").blur(function () {
        var Emailkuu = $("#txtemailLog").val();
        var obj = {
          type: "get",
          url: "/user/login-chk",
          data: {
            kuchemaillog: Emailkuu,
          }
        }
        $.ajax(obj).done(function (respkuch) {
          if (respkuch == "Invalid Email-Id")
            $("#resultLog").html(respkuch).css("color", "red");
          else
            $("#resultLog").html(" ").css("color", "red");
        });
      });
      //====================================
      $("#txtpwdlogeye").mousedown(function () {
        $(this).removeClass("fa-eye").addClass("fa-eye-slash");
        $("#txtpwdlog").prop("type", "text");
      });
      $("#txtpwdlogeye").mouseup(function () {
        $("#txtpwdlog").prop("type", "password");
        $(this).addClass("fa-eye").removeClass("fa-eye-slash");
      });
      //====================================
      $("#txtpwdeye").mousedown(function () {
        $(this).removeClass("fa-eye").addClass("fa-eye-slash");
        $("#txtpwd").attr("type", "text");
      });
      $("#txtpwdeye").mouseup(function () {
        $("#txtpwd").attr("type", "password");
        $(this).addClass("fa-eye").removeClass("fa-eye-slash");
      });
      $("#cart").click(function(){
        if(localStorage.getItem("ActiveUser"))
        location.href = "../cart.html";
      })
      
var email=$("#txtemailLog").val();
})(jQuery);

