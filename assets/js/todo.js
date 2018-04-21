let li = document.getElementsByTagName("li");
let input = document.querySelector("input[type='text']");
let x = document.querySelectorAll("span");
let ul = document.querySelector("ul");
let plusIcon = document.querySelector(".fa-plus-square");


ul.addEventListener("click", function (event) {
    if(event.target.tagName === "LI"){
        event.target.classList.toggle("done");
    }else if(event.target.tagName ==="I"){
        //prevent event bubbling
        event.stopPropagation();
        //add fade out effect
        let fadeEffect = setInterval(function () {
            if (!event.target.parentNode.parentNode.style.opacity) {
                event.target.parentNode.parentNode.style.opacity = 1;
            }
            if (event.target.parentNode.parentNode.style.opacity < 0.1) {
                clearInterval(fadeEffect);
                event.target.parentNode.parentNode.parentNode.removeChild(event.target.parentNode.parentNode);
            } else {
                event.target.parentNode.parentNode.style.opacity -= 0.1;
            }
        }, 30);
    }
});

//adding new todos
input.addEventListener("keypress", function (event) {
    if(event.key === "Enter"){
        //extracting value from input
       let todoText = " " + this.value;
       //clearing input
       this.value = "";
       //creating new li element
       let newLi = document.createElement("LI");
       //creating new span element
       let newSpan = document.createElement("SPAN");
       //filling new span with character "X"
       let trash = document.createElement("I");
       trash.classList.add("far");
       trash.classList.add("fa-minus-square");
       newSpan.appendChild(trash);
       //appending span into new li
       newLi.appendChild(newSpan);
       //appending todoText into li
       newLi.append(todoText);
       //appending li into ul
       ul.appendChild(newLi);

    }
});
plusIcon.addEventListener("click", function () {
    input.classList.toggle("inputToggle");
});

