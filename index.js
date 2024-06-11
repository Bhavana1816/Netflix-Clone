/*function x(){
    var a=18;
    function y(){
console.log(a);
    }
    y();
}
x();*/
/*function x(){
    for(var i=1;i<=5;i++){
        function close(x){
            setTimeout(function(){
                console.log(x);
            }, x*1000);
        }
        close(i);
    }
    console.log("namsthe javascript");
}
x();*/
function attachEventListener(){
    let count =0;
    document.getElementById("ClickMe").addEventListener("Click",function x(){
        console.log("Button clicked",++count);
    });
}
attachEventListener();
