var btn = document.getElementById("btn");
var container = document.getElementById("animal-info");

   btn.addEventListener("click" , function(){

    var xhr = new XMLHttpRequest();
    xhr.open("GET" ,"https://learnwebcode.github.io/json-example/animals-1.json");
    xhr.onload = function(){
        var myData = JSON.parse(xhr.responseText);
        myHtml(myData);
        
    };

    xhr.send();

});
function myHtml(data){
   var string ="";
   
   for(var i =0; i<data.length; i++){
       string += "<p>"+"My Name is "+data[i].name+",and i am "+data[i].species+".</p>";
   }




   container.insertAdjacentHTML("beforeend" , string);

}


    


    
