let task= document.querySelector(".value");
let submit= document.querySelector(".submit");
let showText = document.querySelector(".colTwo");



submit.addEventListener("click", ()=>{
    if(task.value==""){
        alert("Enter your task name!")
    }
    else{
        let value = task.value.trim();
        let div= document.createElement("div");
        let text= document.createElement("p");
        let updateBtn= document.createElement("button");
        let delBtn= document.createElement("button");
        text.appendChild(document.createTextNode(value));
        div.setAttribute("class", "mb-3");
        updateBtn.setAttribute("class", "update");
        delBtn.setAttribute("class", "del");
       
        updateBtn.appendChild(document.createTextNode("Edit"));
        delBtn.appendChild(document.createTextNode("Delete"));
    
        div.append(text, updateBtn, delBtn);
        showText.appendChild(div);
        task.value="";
        
        delBtn.addEventListener("click", ()=>{
            delBtn.parentNode.remove(); 
        });

        updateBtn.addEventListener("click", ()=>{
            submit.disabled =true;
            delBtn.disabled=true;
            task.value= text.textContent;
            let updated= document.createElement("button");
            updated.setAttribute("class", "update")
            updated.appendChild(document.createTextNode("Updated"));
            updateBtn.replaceWith(updated);
            updated.addEventListener("click",()=>{
                if(!task.value==""){
                    text.textContent=task.value;
                    updated.replaceWith(updateBtn);
                    task.value="";
                    submit.disabled= false;
                    delBtn.disabled=false;
                }
                
            })
        })

       
    }
   

})

