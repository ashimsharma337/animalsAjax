var btn = document.getElementById("btn");
var container = document.getElementById("animal-info");
var pageCounter = 1;

   btn.addEventListener("click" , function(){

    var xhr = new XMLHttpRequest();
    xhr.open("GET" ,"https://learnwebcode.github.io/json-example/animals-" +pageCounter+'.json');
    xhr.onload = function(){
        var myData = JSON.parse(xhr.responseText);
        myHtml(myData);
        
    };

    xhr.send();
    pageCounter++;
    if(pageCounter>3){
        btn.classList.add("hideme");
    }

   });



   function myHtml(data){
   var string ="";
   
   for(var i =0; i<data.length; i++){

       string += "<p>"+data[i].name+" is a "+data[i].species+" that likes to eat ";
    
       for(ii=0; ii<data[i].foods.likes.length; ii++){
           if(ii==0){
            string += data[i].foods.likes[ii]; 
           }
           else{
               string += " and " + data[i].foods.likes[ii];
           }
       }
       
       for(ii=0; ii<data[i].foods.dislikes.length; ii++){
         if(ii==0){
         string += " and dislikes " + data[i].foods.dislikes[ii]; 
         }
         else{
            string += " and " + data[i].foods.dislikes[ii];
         }
       }
       

    string += ".</p>";  

    }
    
         

    container.insertAdjacentHTML("beforeend" , string);
  }

   





    


    
