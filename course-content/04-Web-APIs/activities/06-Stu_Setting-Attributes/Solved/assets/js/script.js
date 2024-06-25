const sitesEl = document.querySelector(".sites");

const site1El = document.querySelector(".site1");
const site1AEl = document.querySelector(".site1 a");

const site1AImgEl = document.querySelector(".site1 a img");

const site2El = document.querySelector(".site2");
const site3El = document.querySelector(".site3");
// Store all h4 elements in a variable
//We use querySelectorAll() to select all the <h4> elements in the document

const siteTitles = document.querySelectorAll("h4");
// https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelectorAll#selector_scope
const siteTitlesLimited = document.querySelectorAll(":scope .site3 h4");

site1El.children[0].textContent = "Site 1";
site1AEl.setAttribute("href", "https://google.com");
// site1El.children[1].setAttribute("href", "https://google.com");
// site1El.children[1].children[0].setAttribute("src", "assets/images/image_1.jpg");
// site1El.children[1].children[0].setAttribute("alt", "man working");
// site1El.children[1].children[0].setAttribute("style", "padding:10px;");
site1AImgEl.setAttribute("src", "assets/images/image_1.jpg");
site1AImgEl.setAttribute("alt", "man working");
site1AImgEl.setAttribute("style", "padding:10px;");

site2El.children[0].textContent = "Site 2";
site2El.children[1].setAttribute("href", "https://twitter.com");
site2El.children[1].children[0].setAttribute("src", "assets/images/image_2.jpg");
site2El.children[1].children[0].setAttribute("alt", "group brainstorm");
site2El.children[1].children[0].setAttribute("style", "padding:10px;");

site3El.children[0].textContent = "Site 3";
site3El.children[1].setAttribute("href", "https://instagram.com");
site3El.children[1].children[0].setAttribute("src", "assets/images/image_3.jpg");
site3El.children[1].children[0].setAttribute("alt", "women working");
site3El.children[1].children[0].setAttribute("style", "padding:10px;");

// Loop through all h4 elements to add styling
//We use a loop to iterate over all the <h4> elements in the list and apply the styles, as shown in the following example:
for (let i = 0; i < siteTitles.length; i++) {
  //We use setAttribute() to set the styles for the elements. We can set multiple styles at the same time
  siteTitles[i].setAttribute("style", "color: blue; font-weight: bolder; font-size: 30px; padding-left:10px; margin: 0");

}
// siteTitles.forEach(function(element) {
//   element.setAttribute("style", "color: blue; font-weight: bolder; font-size: 30px; padding-left:10px; margin: 0");
  
// });

// for(const element of siteTitles){
//   element.setAttribute("style", "color: blue; font-weight: bolder; font-size: 30px; padding-left:10px; margin: 0");
// }

for (let i = 0; i < siteTitlesLimited.length; i++) {
  //We use setAttribute() to set the styles for the elements. We can set multiple styles at the same time
  siteTitlesLimited[i].setAttribute("style", "color: green; font-weight: bolder; font-size: 30px; padding-left:10px; margin: 0");

}


