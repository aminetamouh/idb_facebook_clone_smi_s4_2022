/*function connecter(){
    var login = document.getElementById("login").value;
    var password = document.getElementById("password").value;
    if(login=="" && password==""){
        document.getElementById("login").style.border='1px solid red'
        document.getElementById("password").style.border='1px solid red'
        document.getElementById("erreurlog").style.display="block"
        document.getElementById("erreurpass").style.display="block"
    }else if(login!="" && password==""){
        document.getElementById("password").style.border='1px solid red'
        document.getElementById("erreurpass").style.display="block"
    }else if(login=="" && password!=""){    
        document.getElementById("login").style.border='1px solid red'
        document.getElementById("erreurlog").style.display="block"
    }else{
        
    }
}*/

function valider(){
    var login = document.getElementById("login").value;
    var password = document.getElementById("password").value;
    
    if(login=="" && password==""){
        document.getElementById("login").classList.add("is-invalid")
        document.getElementById("password").classList.add("is-invalid")
    }else if(login!="" && password==""){
        document.getElementById("password").classList.add("is-invalid")
    }else if(login=="" && password!=""){    
        document.getElementById("login").classList.add("is-invalid")
    }else{
        
    }
}