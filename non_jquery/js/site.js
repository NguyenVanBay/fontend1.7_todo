function AddItem() {
    var content = document.getElementById("content").value;
    console.log(content);
    if(content == "") {
        alert("Chưa có dữ liệu");
    } else {

        var list = document.getElementById("list");
        var li = document.createElement("LI");

        var check_box = document.createElement("input");
        check_box.setAttribute("type", "checkbox");
        check_box.setAttribute("class", "form-check-input");
        check_box.setAttribute("class", "none-active")
        check_box.addEventListener("change", function() {
            this.parentElement.classList.toggle("completed");
            if(this.parentElement.classList.contains('completed')) {
                // alert('Chưa làm gì');
                soViec();
            } else {
                // alert("Chưa làm gì");
                soViec();
            }
        });
        li.appendChild(check_box);

        var btn_remove = document.createElement("a");

        btn_remove.addEventListener("click", function() {
            this.parentElement.remove();
            soViec();
        });

        btn_remove.setAttribute("href" , "#");
        var span_remove = document.createElement("span");
        span_remove.setAttribute("class", "ion-close-circled");
        btn_remove.appendChild(span_remove);
        var text = document.createElement("P");
        text.appendChild(document.createTextNode(content));

        li.appendChild(text);
        li.appendChild(btn_remove);
        list.appendChild(li);

        soViec();
    }
}

document.getElementById("content").addEventListener('keypress', function() {

    if(event.keyCode == 13){
        AddItem();
        soViec();
    }

});


document.getElementById("clear").addEventListener("click", function(){
    document.getElementById("clear").classList.add("active");
    document.getElementById("active").classList.remove("active");
    document.getElementById("completed").classList.remove("active");
    document.getElementById("completedall").classList.remove("active");
    document.getElementById("all").classList.remove("active");
    document.getElementById("list").innerHTML = "";
    soViec();
});


document.getElementById("all").addEventListener("click", function(){
    document.getElementById("all").classList.add("active");
    document.getElementById("active").classList.remove("active");
    document.getElementById("completed").classList.remove("active");
    document.getElementById("completedall").classList.remove("active");
    document.getElementById("clear").classList.remove("active");
    var input = document.getElementsByTagName("LI");
    for(i = 0;i < input.length; i++)
    {
        input[i].classList.remove("hide");
    }
});


document.getElementById("active").addEventListener("click", function(){
    document.getElementById("active").classList.add("active");
    document.getElementById("all").classList.remove("active");
    document.getElementById("completed").classList.remove("active");
    document.getElementById("completedall").classList.remove("active");
    document.getElementById("all").classList.remove("active");

    var input = document.getElementsByTagName("LI");

    for(i = 0;i < input.length; i++)
    {
        if(input[i].classList.contains("completed"))
            input[i].classList.add("hide");
        else
            input[i].classList.remove("hide");
    }
});


document.getElementById("completed").addEventListener("click", function(){
    document.getElementById("completed").classList.add("active");
    document.getElementById("clear").classList.remove("active");
    document.getElementById("active").classList.remove("active");
    document.getElementById("completedall").classList.remove("active");
    document.getElementById("all").classList.remove("active");

    var input = document.getElementsByTagName("LI");
    for(i = 0;i < input.length; i++)
    {
        if(input[i].classList.contains("completed"))
            input[i].classList.remove("hide");
        else
            input[i].classList.add("hide");
    }
    soViec();
});


document.getElementById("completedall").addEventListener("click", function(){
    document.getElementById("completedall").classList.add("active");
    document.getElementById("active").classList.remove("active");
    document.getElementById("completed").classList.remove("active");
    document.getElementById("clear").classList.remove("active");
    document.getElementById("all").classList.remove("active");

    var input = document.getElementsByTagName("LI");
    for(i = 0;i < input.length; i++)
    {
        input[i].classList.remove("hide");
        input[i].classList.add("completed");
        input[i].firstChild.checked = true;
    }
    soViec();
});

function soViec() {
    var dem = 0;
    var input = document.getElementsByTagName("LI");
    for (i = 0; i < input.length; i++) {
        if(!input[i].classList.contains("completed")) dem ++;
    }

    if(dem > 0) {
        document.getElementById("clear").style.display=  "block";
    } else {
        document.getElementById("clear").style.display = "none";
    }


    document.getElementById("dem").innerHTML = dem + "things todo";
}
