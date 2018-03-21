$(document).ready(function() {
    $("#addItem").click(function() {
        AddItem();
    });

    function AddItem() {
        var content = $("#content").val();
        $("#list").append('<li><input class="check" type="checkbox"><p>' + content + '</p><a href="#"><span class="ion-close-circled deleteItem"></span></a></li>');
        dem();
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
        $("ul").html("");
        changeActive(this);
        dem();
    });
    
    function dem() {
        var dem = $("li:not(.completed)").length;
        $("#dem").html(dem + " things todo");
    }


});
