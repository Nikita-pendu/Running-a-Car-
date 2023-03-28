m=0;
var y;
var a
// console.log("-----ds")
function start(){
    
    document.getElementById("startbutton").disabled = true;
    y=setInterval(run,100);
    function run(){
        if(m==1200){
            clearInterval(y);
            m=0;
        }
        else{
            m=m+10;
            var x = document.getElementById("img");
            x.style.marginLeft = m+'px';
        }
    }
}
function stop(){
    clearInterval(y);
            document.getElementById("startbutton").disabled = false;
            clearInterval(a);
}
function reverse(){
  stop()
    a=setInterval(run,100);
    function run(){
      
    m = m-10;
    if(m===0){

     clearInterval(a);
    }
    var x = document.getElementById("img");
    x.style.marginLeft = m+'px';
    }
}
