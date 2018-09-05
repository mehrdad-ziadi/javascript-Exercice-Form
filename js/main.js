function send() {
var i,f1=[];
for (i=0;i<5;i++){
f1[i] = document.getElementsByTagName("input")[i].value;
}
var f2 = document.getElementById("field").value;
f1[i+1]=f2;


if (f2 == ""){
alert("Please enter all fields!");

}else{
var pTag = document.createElement("p");

var tf1 =document.createTextNode(f1);

pTag.appendChild(tf1);

var hr =document.createElement("hr"); 
var result=document.getElementById("result");
result.appendChild(hr);
result.appendChild(pTag);
}
}