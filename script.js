
//gets a new object and returns greeting as h1 text
$('#login').click(function(){
    
    //create new G$ object
    var logInGreeter = G$('john','doe');
    
    //hids div id=logindiv
    $('#logindiv').hide();
    
    //sets h1 to greeting text and logs greeting to console
    logInGreeter.setLanguage($('#lang').val()).HTMLGreet('#greeting').log();
});
