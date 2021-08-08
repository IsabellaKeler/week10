//function addList (){
    //let items =[];


    //for (i=0; i<=2; i++){
        //items[i]= prompt("Please enter the items for your Shopping List");
    //}
    //for (i=0; i<items.length; i++){
    //    document.getElementById("main").innerHTML+=("<ul><li>"+items[i]);
    //}

    function addItem() {
        var a = document.getElementById("list");
        var item = document.getElementById("item");
        var li = document.createElement("li");
        li.setAttribute('id', item.value);
        li.appendChild(document.createTextNode(item.value));
        a.appendChild(li);
    }

    function removeItem() {

        var a = document.getElementById("list");
        var item = document.getElementById("item");
        var item = document.getElementById(item.value);
        a.removeChild(item);
    }
