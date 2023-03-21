function test() {
 console.log(sum(0)==0?"Passed":"Failed");
 console.log(sum(2)==3?"Passed":"Failed");
 console.log(sum(4)==10?"Passed":"Failed");
    if (typeof document.getElementById("n").value === "String")
        console.log("not a number");
    else
        console.log(sum(document.getElementById("n").value));
 console.log(sum() == "n is undefined" ? "Passed" : "Failed");
 }
 test ();
 
(function(){
 console.log(sum(0)==0?"Passed":"Failed");
 console.log(sum(2)==3?"Passed":"Failed");
 console.log(sum(4)==10?"Passed":"Failed");
 console.log(sum()=="invalid argument"?"Passed":"Failed");
 })();
 
 console.log("reapelare test");
 test ();
 