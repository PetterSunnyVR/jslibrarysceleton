function addItem() {
	  var ul = document.getElementById("list");
	  var li = document.createElement("li");
	  
	  
	  var checkbox = document.createElement('input');
      checkbox.type = "checkbox";
      checkbox.name = "checkbox-1";
      checkbox.id = "checkbox-1";
      
      var label = document.createElement('label');
      label.value = "text";
      label.appendChild(checkbox);
	  
	  li.appendChild(checkbox);
	  ul.appendChild(li);
}

    var button = document.getElementById('btn');
    button.onclick = addItem;