//; for if there was a before library that did not finish properly
;(function(windowObj, $){
    
    //"new" an object
    var Greeter = function(firstName, lastName, language){
        return new Greeter.init(firstName,lastName,language);
    }
    
    //hidden vars
    var supportedLanguages = ['en','es','zh_hk'];
    
    //informal greeting
    var greetings = {
        en: 'Hello',
        es: 'Hola',
        zh_hk: 'Ni hao' 
    };
    
    //formal greetings
    var formalGreetings = {
        en: 'Greetings',
        es: 'Saludos',
        zh_hk: 'Ni hao' 
    };
    
    //logged message
    var loggMessages = {
        en: 'Logged in',
        es: 'Logged in spanish',
        zh_hk: 'Logged in chinese'
    }
    
    //prototype holds methods to save memoby space
    Greeter.prototype = {
        
        //return full name
        fullName: function(){
            return this.firstName+' '+this.lastName;
        },
        
        //validate is language is supported
        validate: function(){
            if(supportedLanguages.indexOf(this.language) === -1){
                throw "Invalid language";
            }
        },
        
        //creates informal greeting
        greeting: function(){
            return greetings[this.language]+' '+this.firstName+ ' !';
        },
        
        //creates formal greeting
        formalGreeting: function(){
            return formalGreetings[this.language]+' '+this.fullName()+ '.';
        },
        
        //creates greeting by passing if it is formal or not
        greet: function(formal){
            var msg;
            
            if(formal){
                msg = this.formalGreeting();
            }else{
                msg = this.greeting()
            }
            
            if(console){
                console.log(msg);
            }
            
            return msg;
            
        },
        
        //logs login message
        log: function(){
            if(console){
                console.log(loggMessages[this.language]+': '+this.fullName());
        
            }
            
            return this;
        },
        
        //set different language
        setLanguage: function(language){
            this.language = language;
            this.validate();
            
            return this;
        },
        
        //change html text to our greeting
        HTMLGreet: function(selector, formal){
            if(!$){
                throw "jQuery not loaded";
            }
            if(!selector){
                throw "missing selector";        
            }
            
            var msg = this.greet(formal);
            console.log("msg "+msg);
            $(selector).html(msg);
            
            
            return this;
        }
    };
        
    //the actual object is created here, allowing new object to be craded withoud calling "new"
    Greeter.init = function(firstName, lastName, language){
        var self = this;
        
        self.firstName = firstName || 'default';
        self.lastName = lastName || 'default';
        self.language = language || 'en';
        
        self.validate();
    }
    
    //any object created by us points to Greeter.prototype - so we dont have to use 'new' keyword
    Greeter.init.prototype = Greeter.prototype;
    
    //attach greeter to the global object so we can call G$ to use the library
    windowObj.G$ = windowObj.Greeter = Greeter;
})(this, jQuery);