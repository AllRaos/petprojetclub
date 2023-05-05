let closes = document.getElementsByClassName("list__item__close");
//обновлення кількість списку
// видалення елементів списку
for(let i = 0; i < closes.length; i++){
    closes[i].onclick = function() {
        let v = closes.length;
        document.getElementById("score__full").innerHTML = v-1;  
        this.parentElement.remove();
    };
};
// добавлення провірки
let list = document.querySelector("ul");
list.addEventListener("click", function(ev){
    if(ev.target.tagName = "li"){
        ev.target.classList.toggle("checked");
        //кількість елементів з класом "checked"
        document.getElementById("score").innerHTML = document.querySelectorAll(".list__item.checked").length;
    };
});
// створення нового елемента списку
let btn = document.getElementById("input-block__accept");
btn.addEventListener("click", function (){
        // створення нового елемента списку
        let element = document.createElement("li");
        let value = document.getElementById("input-block__enter").value;
        let t = document.createTextNode(value);
        element.appendChild(t);
        element.classList.add("list__item");
        if(value === ""){
            alert("You must write something!");
        }
        else{
            document.getElementById("list").appendChild(element);
            // створення кнопок вимкнень
            let span = document.createElement("SPAN");
            let txt = document.createTextNode("x");
            span.classList.add("list__item__close");
            span.appendChild(txt);
            element.appendChild(span);
            for (i = 0; i < closes.length; i++) {
                closes[i].onclick = function() {
                    let v = closes.length;
                    document.getElementById("score__full").innerHTML = v-1;   
                    this.parentElement.remove();
                }
            }
        }
        document.getElementById("input-block__enter").value = "";
});
//кнопка підрахування кількості тасків
btn.addEventListener("click", function(){
    let v = closes.length;
    document.getElementById("score__full").innerHTML = v;    
})
//кнопка для очистки виконаних тасків
let clear = document.getElementById("clear-block__clear-btn");
clear.addEventListener("click", function(){
    let checkedItems = document.querySelectorAll(".list__item.checked");
    for(let i = 0; i < checkedItems.length; i++){
        checkedItems[i].remove();
        let v = closes.length;
        document.getElementById("score__full").innerHTML = v;
    };
    document.getElementById("score").innerHTML = document.querySelectorAll(".list__item.checked").length;
});