let output = document.getElementById("output");
let del = document.getElementById("del");
let ok = document.getElementById("ok");
let message = document.getElementById('message');

var but = document.getElementsByClassName('but');
let password = [];


let login = document.getElementById('login');
let workspace = document.getElementById('workspace');

login.style.visibility = 'visible';
workspace.style.visibility = 'hidden';

message.style.visibility = 'hidden';

buttonArr = Array.from(but);

let out = Array.from(output);
enterPassword();

del.addEventListener('click', function(){
    out = out.slice(0,6);
    out.pop();
    output.innerHTML = out.join("").slice(0,6);
   console.log('delete'); 
});

for(var i =0; i<but.length; i++){
    buttonArr[i].addEventListener('click', function(e){
        console.log([e.target.innerHTML]);
        out.push(e.target.innerHTML);
        output.innerHTML = out.join("").slice(0,6);
        console.log(out);
        
    });
};


ok.addEventListener('click', function(){
    if(output.innerHTML.length == 6){
        if(localStorage.getItem('password') == null){           //if there is no set password
            password = out.slice(0,6);
            localStorage.setItem("password", password);
            workspace.style.visibility = 'visible';
        login.style.visibility = 'hidden';
        }else{                                                  // if the password is already set
            checkPassword();
        };
    }else{
        message.style.visibility = 'visible';
        message.innerHTML = "Enter a valid password"
      console.log("enter a valid password");  
    };
});

function enterPassword(){
    if(localStorage.getItem('password') != null){
        document.getElementById('title').innerHTML = "Enter password";
        
    }else{
    document.getElementById('title').innerHTML = "Create a password (6 characters)";
    };
};

function checkPassword(){  
    if(out.slice(0,6) == localStorage.getItem('password')){
        message.style.visibility = 'hidden';
        workspace.style.visibility = 'visible';
        login.style.visibility = 'hidden';
            console.log('logd in');
       }else{
           message.style.visibility = 'visible';
           message.innerHTML = 'Wrong password'
           console.log('wrong password');
       };
};