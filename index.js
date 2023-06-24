$(".btn").click(function(){

    if ($("#page1").hasClass("hidden")){

        $("#page1").removeClass("hidden");
        $("#page2").addClass("hidden");

    }

    else{

        $("#page2").removeClass("hidden");
        $("#page1").addClass("hidden");

    }
})
