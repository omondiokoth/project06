$(function(){
    let $pop = $('#popup'),
        $pcont =$('#popup .contents'),
        $pimg = $pcont.find('img')
        $click =$('.partner a');
    
    
    $click.on('click', function(event){
        event.preventDefault();
        $pop.css("display", "block");
        $pimg("display","block");
    });
    
    $pop.find('button').on('click', function(){
        $pop.css("display", "none");
    });

    
});