// //objects:
let dishes = [
  {
    name: "burger",
    price: 20.99,
    category: "fast food",
    image: "./images/person1.jpg",
    ingredients: "meat, cheese, onion, bread",
  },
  {
    name: "beta",
    price: 50,
    category: "fast food",
    image: "./images/person1.jpg",
    ingredients: "meat, cheese, onion, bread",
  },
];

var mybody = document.querySelector("body");
var container = document.createElement("div");
container.className = "container";
mybody.appendChild(container);
container.innerHTML = "Restaurant Menu";


//************************************************************ */

var menu = document.createElement("div");
mybody.appendChild(menu);
menu.className = "menu";

// Get a reference to the parent div
var menu = document.querySelector(".menu");


var divsToAppend = [];
for (var i = 0; i < dishes.length; i++) {
  var menu_item = document.createElement("div");
  // menu_item.textContent = "Child Div " + (i + 1);

  //image
  var dishImage = document.createElement("img");
  dishImage.src = dishes[i].image; //                        1
  menu_item.appendChild(dishImage);
  //div for flex
  var name_And_Price_Div = document.createElement("div");
  name_And_Price_Div.className = "name_And_Price_Div";
  menu_item.appendChild(name_And_Price_Div);
  //Name
  var dish_Name = document.createElement("h2");
  dish_Name.className = "dish_Name";
  name_And_Price_Div.appendChild(dish_Name);
  dish_Name.innerHTML = "<span>Name :</span>" + " " + dishes[i].name; //            2

  //Price
  var dish_Price = document.createElement("h2");
  dish_Price.className = "dish_Price";
  name_And_Price_Div.appendChild(dish_Price);
  dish_Price.innerHTML =
    "<span>Price : </span>" + " " + dishes[i].price + " " + "$"; //           3
  //Category
  var dish_Category = document.createElement("h3");
  dish_Category.className = "dish_Category";
  menu_item.appendChild(dish_Category);
  dish_Category.innerHTML =
    "<span>Category :</span>" + " " + dishes[i].category; //           4
  //intergradiants
  var dish_intergradiants = document.createElement("h3");
  dish_intergradiants.className = "dish_intergradiants";
  menu_item.appendChild(dish_intergradiants);
  dish_intergradiants.innerHTML =
    "<span>Intergradiants :</span>" + " " + dishes[i].ingredients; //      5
    dish_intergradiants.style.fontSize="18px"

  menu_item.className = "menu_item";
  divsToAppend.push(menu_item);
}

// Append the div elements to the parent div
for (var i = 0; i < divsToAppend.length; i++) {
  menu.appendChild(divsToAppend[i]);
}



//**************-------------------------------------------------------------------------------- */





var newDish = document.createElement("button");
newDish.className = "newDish";
newDish.textContent = "New Dish";
container.appendChild(newDish);

var formDisplayed = false; // Flag to track if the form is displayed

newDish.addEventListener("click", function dataForm() {
  if (!formDisplayed) { // Check if the form is not already displayed
    var myForm = document.createElement("form");
    myForm.className = "myForm";
    myForm.style.display = "block";
    myForm.innerHTML = `
      <h2>Add New Dish</h2>
      <label for="image">Image :</label>
      <input id="image" type="text" required>

      <label for="name">Name :</label>
      <input id="name" type="text" required>

      <label for="price">Price :</label>
      <input id="price" type="number" required>

      <label for="category">Category :</label>
      <input id="category" type="text" required>

      <label for="Intergradiants">Ingredients :</label>
      <input id="Intergradiants" type="text" required>

      <input type="submit" value="Add Dish" class="addDish" required>
    `

    mybody.appendChild(myForm);
    formDisplayed = true; // Set the flag to true
    }   
// });

// Add a click event listener for the form submission
myForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the form from submitting and refreshing the page

  // Get values from the form
  var newDishImage = document.getElementById("image").value;
  var newDishName = document.getElementById("name").value;
  var newDishPrice = parseFloat(document.getElementById("price").value);
  var newDishCategory = document.getElementById("category").value;
  var newDishIngredients = document.getElementById("Intergradiants").value;

  // Create a new dish object
  var newDishObject = {
    name: newDishName,
    price: newDishPrice,
    category: newDishCategory,
    image: newDishImage,
    ingredients: newDishIngredients,
  };

  // Add the new dish object to the dishes array
  dishes.push(newDishObject);

  // Clear the form fields
  document.getElementById("image").value = "";
  document.getElementById("name").value = "";
  document.getElementById("price").value = "";
  document.getElementById("category").value = "";
  document.getElementById("Intergradiants").value = "";


  // Create a new menu item for the new dish
  var menu_item = document.createElement("div");
  menu_item.className = "menu_item";

  // Image
  var dishImage = document.createElement("img");
  dishImage.src = newDishObject.image;
  menu_item.appendChild(dishImage);

  // Div for flex
  var name_And_Price_Div = document.createElement("div");
  name_And_Price_Div.className = "name_And_Price_Div";
  menu_item.appendChild(name_And_Price_Div);

  // Name
  var dish_Name = document.createElement("h2");
  dish_Name.className = "dish_Name";
  dish_Name.innerHTML = "<span>Name :</span> " + newDishObject.name;
  name_And_Price_Div.appendChild(dish_Name);

  // Price
  var dish_Price = document.createElement("h2");
  dish_Price.className = "dish_Price";
  dish_Price.innerHTML = "<span>Price :</span> " + newDishObject.price + " $";
  name_And_Price_Div.appendChild(dish_Price);

  // Category
  var dish_Category = document.createElement("h3");
  dish_Category.className = "dish_Category";
  dish_Category.innerHTML = "<span>Category :</span> " + newDishObject.category;
  menu_item.appendChild(dish_Category);

  // Ingredients
  var dish_Ingredients = document.createElement("h3");
  dish_Ingredients.className = "dish_Ingredients";
  dish_Ingredients.innerHTML = "<span>Ingredients :</span> " + newDishObject.ingredients;
  menu_item.appendChild(dish_Ingredients);

  // Append the new menu item to the menu
  menu.appendChild(menu_item);




  // Hide the form after adding the new dish
  myForm.style.display = "none";
  formDisplayed = false; // Reset the formDisplayed flag
});

});


