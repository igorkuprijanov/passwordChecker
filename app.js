let output = document.getElementById("output");

var button = document.getElementsByClassName('button');

buttonArr = Array.from(button);

let out = Array.from(output);



for(var i =0; i<button.length; i++){
    buttonArr[i].addEventListener('click', function(e){
        console.log([e.target.innerHTML]);
        out.push(e.target.innerHTML);
       
        output.innerHTML = out.join("").slice(0,6);
        console.log(out.slice(0,5));
        
    });
};