$(document).ready(function() {

    $("#content").keyup(function() {
        if(event.keyCode == 13){
            AddItem();
            dem();
        }
    });

    function AddItem() {
        var content = $("#content").val();
        $("#list").append('<li><input class="check" type="checkbox"><p>' + content + '</p><a href="#"><span class="ion-close-circled deleteItem"></span></a></li>');
        dem();
        $("#content").val("");
    };

    $("body").on('click', ".deleteItem", function(){
        $(this).parent().parent().remove();
        dem();
    });

    $("body").on('change', ".check", function(){
        $(this).parent().toggleClass("completed");

        dem();
    });

    function changeActive(a){
        $("button").removeClass("active");
        $(a).addClass("active");
        dem();
    }

    $("#all").on("click", function() {
        changeActive(this);
        $("li").show();
    });

    $("#active").on("click", function() {

        $("li:not(.completed)").show();
        $("li.completed").hide();
        changeActive(this);
    });


    $("#completed").on("click", function() {
        // $("li").not(".completed").hide();
        $("li:not(.completed)").hide();
        $("li.completed").show();
        changeActive(this);
    });

    $("#completedall").on("click", function() {
        $('.check').prop("checked", true);
        $("li").addClass("completed");
        $("li").show();
        changeActive(this);
        dem();
    });

    $("#clear").on("click", function() {
        $(".completed").remove();
        changeActive(this);
        dem();
    });

    function dem() {
        var dem = $("li:not(.completed)").length;
        $("#dem").html(dem + " things todo");

        var dem1 = $(".completed").length;

        if(dem1 > 0) {
            $("#clear").show();
        } else {
            $("#clear").hide();
        }

        // alert(dem1);
        // if(dem1 > 0) {
        //     $("#completedall").hide();
        // } else {
        //     $("#completedall").show();
        // }
    }
});
