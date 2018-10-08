var liGroup2 = document.getElementsByClassName("class2"); 
console.log(liGroup2);
var idContent = document.getElementById("container");
console.log(idContent);
var allLiTag = document.getElementsByTagName("li");
console.log(allLiTag);
var titleId = document.getElementById("page-title");
console.log(titleId);
var testA = document.getElementById('test');
console.log(testA);
console.log(testA.getAttribute('href'));
var menu = document.getElementById('menu');

// changing content

liGroup2[0].innerHTML = "added by innerHTML";
titleId.textContent= "New title";

// changing attributes

testA.setAttribute( "alt" , "pie");
testA.className = "newClass";

// changing CSS

testA.setAttribute("style", "margin: 10px ; padding-left: 10px");
testA.style.paddingLeft = "50px";

// adding elements to the DOM

var newMenuLi = document.createElement('li');
var newAtag = document.createElement('a');

menu.appendChild(newMenuLi);    //add element to the end
newMenuLi.appendChild(newAtag);        
newAtag.innerHTML = "New menu link";

menu.insertBefore(newMenuLi , menu.getElementsByTagName('li')[0]);  // add element before li tag with index 0

// Remove elements from the DOM

var menuSecondChild = menu.getElementsByTagName('li')[1];
var removed = menu.removeChild(menuSecondChild);
console.log(removed);


