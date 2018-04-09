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

var createCat = function(){
  let cat = document.createElement("ul");
  cat.classList.add("list-unstyled");
  return cat;
}

var createName = function(text){
 let name = document.createElement("li");
 name.innerText = "Name: " + text;
 return name;
}

var createFavouriteFood = function(text){
 let favouriteFood = document.createElement("li");
 favouriteFood.innerText = "Favourite food: " + text;
 return favouriteFood;
}

var createPicture = function(){
 let picture = document.createElement("li");
 return picture;
}

var createImage = function(text){
 let image = document.createElement("image");
 image.innerHTML = text;
 return image;
}



var appendElements = function(cat, name, favouriteFood, image, picture){
  picture.appendChild(image);
  cat.appendChild(name);
  cat.appendChild(favouriteFood);
  cat.appendChild(picture);

  let cats = document.querySelector('#cats');
  cats.appendChild(cat);
}


var addCat = function(name, favouriteFood, image){
  var catName = createName(name);
  var catFavouriteFood = createFavouriteFood(favouriteFood);
  var catImage = createImage(image);
  var picture = createPicture();
  var cat = createCat();

  appendElements(cat ,catName, catFavouriteFood, catImage, picture);
}

window.onload = function(){
addCat("Tom", "Mice", '<img width="300" src=tom_cat.jpg>');
addCat("Boba", "Sock fluff", '<img width="300" src=http://66.media.tumblr.com/d1f01bbe0150fda0c40d2151c5eaeac8/tumblr_odlqqskjj61v9cejwo1_400.jpg>');
addCat("Barnaby", "Tuna", '<img width="300" src=https://68.media.tumblr.com/88d0fcf2b84a7b098dda839130597569/tumblr_okuo4teiql1uhevdso1_1280.jpg>');
addCat("Max", "Whiskas Temptations", '<img width="300" src=http://66.media.tumblr.com/7c5784ea89369c780e782bf10c60315a/tumblr_npb0hlYwhV1u63jaco1_1280.jpg>');
};
