$(document).ready(function() {
    $('.accordion a').click(function(e) {
        e.preventDefault();
        $(".ac-content").hide("slow");
        $(this).next(".ac-content").show("slow");
        return false;
    })    
});