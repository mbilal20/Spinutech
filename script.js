$(document).ready(function(){

    //On Hover adding the opacity to the other circles and squares
    $('.circle-row, #square-row').on('mouseenter', '.circle, .square', function(){
        $('.circle, .square').removeClass('circle-opaque');
        $(this).prevAll('.circle, .square').addClass('circle-opaque');
        $(this).nextAll('.circle, .square').addClass('circle-opaque');
    });

    //on Hover exit remove the opacity from all the circle and squares
    $('.circle-row, #square-row').on('mouseleave', '.circle, .square', function(){
        $('.circle, .square').removeClass('circle-opaque');
    });

    //Show the Square row on the click of any of the circles
    $('.circle-row').on('click', '.circle', function(){
            $('#square-row').css("display", "flex");
    });

    //Clicking on the 2nd row squares, making the sqare circle and moving it to the first spot
    $('#square-row').on('click', '.square', function(){
        $(this).removeClass("square");
        $(this).addClass("circle");
        $(this).prependTo($(this).parent());
    });

});