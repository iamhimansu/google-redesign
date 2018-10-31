var inputBox = document.getElementById("input");
var inputList = ["Himanshu", "Raj", "Aman"];
var suggestionList = document.querySelector(".suggests")
inputBox.addEventListener("input", function(e){
	if (inputBox.value.length > 3) {
		for (var i = 0; i < inputList.length; i++) {
		var li = document.createElement("li");
		li.appendChild(document.createTextNode(inputList[i]));
		suggestionList.appendChild(li);
		}
		
		// alert("Hey you searched Google for : " + inputBox.value);
	}
});


// alert(inputList[1]);
// var popup = document.querySelectorAll(".popover");
// 	for (var i = 0; i < popup.length; i++) {
// 		document.querySelector(".popover")
// 		.addEventListener("mouseover", function(){
// 			document.querySelectorAll(".popover")[i].classList.add("popup");
// 		})
		
// 	}

