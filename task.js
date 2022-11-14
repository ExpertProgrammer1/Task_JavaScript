
async function ToDoListURL(myFatherDiv,countDiv,data){
    for(let item in data){   
        let newDiv =  document.createElement("div");
        newDiv.setAttribute("class",`Div${countDiv}`);
        newDiv.innerHTML ="Id: "+ data[item].id+"</br>"+"Site Name: "+ data[item].name+"</br>";
        let link =  document.createElement("a");
        link.setAttribute("class","link");
        link.setAttribute("href","https://"+data[item].url)
        link.innerHTML ="Site Url: "+ data[item].name+"</br>"
        newDiv.appendChild(link)
        myFatherDiv.appendChild(newDiv);
        if(data[item].subData){
          countDiv=countDiv+1;
          await  ToDoListURL(newDiv,countDiv,data[item].subData);
          countDiv--;
        }             
    }
 }

let countDiv=1;
let body = document.getElementsByTagName("body")[0];

    fetch("task.json")
    .then(response => response.json())
    .then(data=>ToDoListURL(body,countDiv,data) );
   