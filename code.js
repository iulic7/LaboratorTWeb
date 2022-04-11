
var r=0;
var g=0;
var b=0;

console.log('test');
$('#coloana1').find('input').each(function (i) {
    
    $(this).on('click', function (event) {
        $('#img1').attr("src","http://flags.net/images/largeflags/"+$(event.target).attr('value')+".GIF");
        $('#img1').attr("alt",$(event.target).attr('id'));
        r=$(event.target).index();
        if(r==3) r=25;
        else if (r==6) r=50;
        else if (r==9) r=75;
        else if (r==12)  r=100;
      
        $('#coloana1').addClass("bordura");
        $('#coloana2').removeClass("bordura");
        $('#coloana3').removeClass("bordura");
        $('#coloana1').css("border-color", "rgb("+r+"%,"+g+"%,"+b+"%)");
    })
})
$('#coloana2').find('input').each(function (i) {
    
    $(this).on('click', function (event) {
        $('#img2').attr("src","http://flags.net/images/largeflags/"+$(event.target).attr('value')+".GIF");
        $('#img2').attr("alt",$(event.target).attr('id'));
        g=$(event.target).index();
        if(g==3) g=25;
        else if (g==6) g=50;
        else if (g==9) g=75;
        else if (g==12)  g=100;
       
        $('#coloana2').addClass("bordura");
        $('#coloana1').removeClass("bordura");
        $('#coloana3').removeClass("bordura");
        $('#coloana2').css("border-color", "rgb("+r+"%,"+g+"%,"+b+"%)");
    })
})
$(document).ready(function() {
    console.log('ready');
});

$('#coloana3').find('input').each(function (i) {
    
    $(this).on('click', function (event) {
        $('#img3').attr("src","http://flags.net/images/largeflags/"+$(event.target).attr('value')+".GIF");
        $('#img3').attr("alt",$(event.target).attr('id'));
        console.log($(event.target).attr('id'));
        b=$(event.target).index();
        if(b==3) b=25;
        else if (b==6) b=50;
        else if (b==9) b=75;
        else if (b==12)  b=100;
       
        $('#coloana3').addClass("bordura");
        $('#coloana1').removeClass("bordura");
        $('#coloana2').removeClass("bordura");
        $('#coloana3').css("border-color", "rgb("+r+"%,"+g+"%,"+b+"%)");
    })
})
$(document).ready(function() {
    console.log('ready');
});


$('#divm').find('img').each(function (i) {
    
    $(this).on('click', function (event) {
        $('#text').empty().append($(event.target).attr('alt'));
    })
})

$("#curata").on('click',function(){
    $('#text').empty().append("flag");
    $("#Franta").prop('checked', true);
    $("#USA").prop('checked', true);
    $("#Belgia").prop('checked', true);
    $('#img1').attr("src","http://flags.net/images/largeflags/FRAN0001.GIF");
    $('#img2').attr("src","http://flags.net/images/largeflags/UNST0001.GIF");
    $('#img3').attr("src","http://flags.net/images/largeflags/BELG0001.GIF");
    $('#coloana1').removeClass("bordura");
    $('#coloana2').removeClass("bordura");
    $('#coloana3').removeClass("bordura");
})
