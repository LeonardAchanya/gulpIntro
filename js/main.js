$("document").ready(function() {
    console.log("Loaded");
    let p1 = $(".p-one");
    let imgQuote = $(".img-quote");

    p1.html("Hello").css("color", "blue");
    p1.hover(
        function() {
            $(this).css("color", "green");
            imgQuote.css({opacity: 1, transition: "all .5s ease-in"});
        }, 
        function() {
            $(this).css("color", "blue");
            imgQuote.css({opacity: 0});
        }
    );

    let places = ["Sweden", "Denmark", "Rwanda", "Mauritius"];

    $("#list li").each(function(index) {
        $(this).html(places[index]);
        $(this).css("opacity", 0);
        $(this).animate({opacity: 1}, 2000);
    })

    $("#btn-theme").click(function() {
        $("body").toggleClass("dark-theme");
    })

    $(".btn-close").click(function() {
        $(".box").slideUp(1000);    
    })

    $.ajax({
        url: "https://jsonplaceholder.typicode.com/todos/1",
        // data: {
        //   zipcode: 97201
        // },
        success: function( result ) {
          $( "#todo" ).html( "Your Todo: " + result.title );
        }
    });

    let username = $("#username");
    username.blur(function() {
        if(username.val().length < 1) {
            $("#username").after("<span class='error'>Username Required!");
        }else {
            $(".error").remove();
        }
    })

    $("#register-form").submit(function(e) {
        e.preventDefault();
        let username = $("#username").val();
        let password = $("#password").val();

        $(".error").remove();

        if(username.length < 1) {
            $("#username").after("<span class='error'>Username Required!");
        }
        if(password.length < 1) {
            $("#password").after("<span class='error'>Password Required!");
        }
    })

})
