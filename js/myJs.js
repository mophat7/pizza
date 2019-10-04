$(document).ready(function(){
$('#small').click(function(){
    $('#orderlist').show(function(){
        
    });
})

$(this).click(()=>{
    $('#ordercontent').wrapInner((this).val());
})




});