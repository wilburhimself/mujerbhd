$(document).ready(function() {
    $('.accordion a').click(function(e) {
        var n = $(this).next(".ac-content");
        if (n.css('display') !== 'none') {
            n.hide("slow");
        } else {
            n.show("slow");
        } 

        return false;
    })    
});