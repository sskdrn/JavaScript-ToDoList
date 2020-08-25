$("#expandInput").on("click",function(){
    $("#newTask").slideToggle(200);
});
$("#newTask").on("keypress",function(event){
    if(event.which==13)
    {
        var cont=$("#newTask").val();
        if(cont!="")
        {
            var str="<li><span class=\"text\">"+cont+"</span> <span class=\"buttons\"><i class=\"fas fa-check\"></i><i class=\"fa fa-undo\" aria-hidden=\"true\"></i><i class=\"fas fa-trash-alt\"></i></span></li>"
            $("#tasks").prepend(str);
            // "<li>"+cont+"<i class=\"fas fa-trash-alt\"></i>"+"</li>"
            $("#newTask").val("");
            $("ul li:nth-of-type(odd)").css("background","steelblue");
            $("ul li:nth-of-type(even)").css("color","black");
            $("ul li:nth-of-type(even)").css("background","skyblue");
            $("ul li:nth-of-type(odd)").css("color","white");
        }
    }
});
$("ul").on("click",".buttons .fas.fa-trash-alt",function(){
    $(this).parent().parent().fadeOut(200,function(){
        $(this).remove();
        $("ul li:nth-of-type(odd)").css("background","steelblue");
        $("ul li:nth-of-type(even)").css("color","black");
        $("ul li:nth-of-type(even)").css("background","skyblue");
        $("ul li:nth-of-type(odd)").css("color","white");
    });
    
});
$("ul").on("click",".buttons .fas.fa-check",function(){
    $(this).parent().parent().children(".text").toggleClass("strike");
    $(this).parent().children(".fa.fa-undo").fadeToggle(0);
    $(this).fadeToggle(0);
    
});
$("ul").on("click",".buttons .fa.fa-undo",function(){
    $(this).parent().parent().children(".text").toggleClass("strike");
    $(this).parent().children(".fas.fa-check").fadeToggle(0);
    $(this).fadeToggle(0);
    
});
$("ul").on("mouseenter","li",function(){
    $(this).children(".buttons").toggleClass("inflex-buttons");
  
});
$("ul").on("mouseleave","li",function(){
    $(this).children(".buttons").toggleClass("inflex-buttons");
  
});
$("ul li:nth-of-type(odd)").css("background","steelblue");
$("ul li:nth-of-type(even)").css("color","black");
$("ul li:nth-of-type(even)").css("background","skyblue");
$("ul li:nth-of-type(odd)").css("color","white");