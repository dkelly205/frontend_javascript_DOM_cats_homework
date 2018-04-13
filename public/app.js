// const app = function(){
//
//   // 1.Create the parent container and its class
//     let cat = document.createElement("ul");
//     cat.classList.add("cat");
//
//     //create the first child - li, text
//     let name = document.createElement("li");
//     name.innerText = "Name: Kit";
//
//     //create the second child - li, text
//     let favouriteFood = document.createElement("li");
//     favouriteFood.innerText = "Favourite food: Pizza";
//
//     //create the third child - li, img
//     let picture = document.createElement("li");
//
//     let image = document.createElement("image");
//     image.innerHTML = '<img width="500" src="https://68.media.tumblr.com/88d0fcf2b84a7b098dda839130597569/tumblr_okuo4teiql1uhevdso1_1280.jpg">'
//
//     picture.appendChild(image);
//
//     cat.appendChild(name);
//     cat.appendChild(favouriteFood);
//     cat.appendChild(picture);
//
//     let cats = document.querySelector('#cats');
//     cats.appendChild(cat);
//     debugger;
// }
// window.onload = app;


//create ul
var createul = function(){
  let ul = document.createElement("ul");
  ul.classList.add("cat");
  return ul;
}

//create li
var createli = function(label, text){
 let li = document.createElement("li");
 li.innerText = `${label}: ${text}`;
 return li;
}

//create image
var createImage = function(text){
 let li = document.createElement("li");
 let image = document.createElement("img");
 image.src = text;
 image.width = 300;
 li.appendChild(image);
 return li;
}


//append items
var appendElements = function(catSection, listElement, name, favFood, image){
  listElement.appendChild(name);
  listElement.appendChild(favFood);
  listElement.appendChild(image);
  catSection.appendChild(listElement);
}

//add cat function
var addCat = function(name, favFood, url){
  let ul = createul();
  let nameli = createli("Name: ", name)
  let favFoodli = createli("Favourite Food: ", favFood);
  let imageli = createImage(url);
  let catSection = document.querySelector('#cats')

  appendElements(catSection ,ul, nameli, favFoodli, imageli);
}

const cats = [{
  name: "Boba",
  favFood: "sock fluff",
  image: "http://66.media.tumblr.com/d1f01bbe0150fda0c40d2151c5eaeac8/tumblr_odlqqskjj61v9cejwo1_400.jpg"

},
{
  name: "Tom",
  favFood: "Mice",
  image: "tom_cat.jpg"
},
{
  name: "Max",
  favFood: "Whiskas Temptations",
  image: "http://66.media.tumblr.com/7c5784ea89369c780e782bf10c60315a/tumblr_npb0hlYwhV1u63jaco1_1280.jpg"
},
{
  name: "Barnaby",
  favFood: "Tuna",
  image: "https://68.media.tumblr.com/88d0fcf2b84a7b098dda839130597569/tumblr_okuo4teiql1uhevdso1_1280.jpg"
}
]

const app = function(){

  cats.forEach(function(cat){
    addCat(cat.name, cat.favFood, cat.image);
  })
}

window.onload = app;
