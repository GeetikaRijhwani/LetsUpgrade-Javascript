// guys i have made it a id based application as this is how to works in real world
// there are only 2 easy to understand changes read the code carefully

// new function getProductByID() is created check it out

let products = [
    {
      id: 1,
      name: "White Tshirt",
      size: "L",
      color: "white",
      price: 1200,
      image: "product1.jpg",
      description: "Good looking white tshirt",
    },
    {
      id: 2,
      name: "Black Shirt",
      size: "M",
      color: "Black",
      price: 1500,
      image: "product2.jpg",
      description: "Good looking black shirt",
    },
  
    {
      id: 3,
      name: "Checked Shirt",
      size: "S",
      color: "White & Black",
      price: 900,
      image: "product3.jpg",
      description: "Good looking Checked Shirt",
    },
  
    {
      id: 4,
      name: "Black Female Blazer",
      size: "M",
      color: "Black",
      price: 3000,
      image: "product4.jpeg",
      description: "Beautifull Blazer",
    },
  
    {
      id: 5,
      name: "Navy Blue Top",
      size: "S",
      color: "Blue",
      price: 1300,
      image: "product5.jpg",
      description: "Good looking Top",
    },
  
    {
      id: 6,
      name: "Indian Dress",
      size: "M",
      color: "Henna",
      price: 1500,
      image: "product6.jpg",
      description: "Good looking Traditional Dress",
    },

    ///// QUESTION NO 1 SOLUTION
    {
        id: 7,
        name: "Wedding Lehenga",
        size: "L",
        color: "Maroon",
        price: 5000,
        image: "product7.jpg",
        description: "Wedding Special Off Shoulder Lehenga Chunari",
      },

      {
        id: 8,
        name: "Golden Bordered Black Saari",
        size: "XL",
        color: "Black",
        price: 3500,
        image: "product8.jpg",
        description: "Golden Bordered Black Saari with Stripped Blouse",
      },

      {
        id: 9,
        name: "Floral Top and Pants",
        size: "S",
        color: "Peach and White",
        price: 800,
        image: "product9.jpg",
        description: "Kids Wear Peach and White Colored Floral Top with Black Pants",
      },

      {
        id: 10,
        name: "Cap Jacket",
        size: "S",
        color: "Grey",
        price: 600,
        image: "product10.jpg",
        description: "Grey Cap Jacket Kids Wear",
      },

      {
        id: 11,
        name: "3 Piece Suit",
        size: "M",
        color: "Black and White",
        price: 2500,
        image: "product11.jpg",
        description: "Black Blazer and Pants with White Shirt",
      },

      {
        id: 12,
        name: "Dark Purple Shirt",
        size: "XL",
        color: "Dark Purple",
        price: 1000,
        image: "product12.jpg",
        description: "Dark Purple Shirt Pure Cotton",
      },
  ];
  
  cart = [];
  
  function displayProducts(productsData, who = "productwrapper") {
    let productsString = "";
  
    productsData.forEach(function (product, index) {
      let { id, name, image, color, description, price, size } = product;
  
      if (who == "productwrapper") {
        productsString += ` <div class="product">
          <div class="prodimg">
            <img src="${image}" width="100%" />
          </div>
          <h3>${name}</h3>
          <p>Price : ${price}$</p>
          <p>Size : ${size}</p>
          <p>Color : ${color}</p>
          <p>${description}</p>
          <p>
            <button onclick="addToCart(${id})">Add to Cart</button>
          </p>
        </div>`;
      } else if (who == "cart") {
        productsString += ` <div class="product">
          <div class="prodimg">
            <img src="${image}" width="100%" />
          </div>
          <h3>${name}</h3>
          <p>Price : ${price}$</p>
          <p>Size : ${size}</p>
          <p>Color : ${color}</p>
          <p>${description}</p>
          <p>
            <button onclick="removeFromCart(${id})">Remove from Cart</button>
          </p>
        </div>`;
      }
    });
  
    document.getElementById(who).innerHTML = productsString;
  }
  
  displayProducts(products);
  
  function searchProduct(searchValue) {
    let searchedProducts = products.filter(function (product, index) {
      let searchString =
        product.name + " " + product.color + " " + product.description;
  
      return searchString.toUpperCase().indexOf(searchValue.toUpperCase()) != -1;
    });
  
    displayProducts(searchedProducts);
  }
  
  // this is a function to get a product based on id from a particular array
  // @param 1 the array u want to get products from
  // @param 2 the id u want to search
  
  function getProductByID(productArray, id) {
    return productArray.find(function (product) {
      return product.id == id;
    });
  }
  

  let flag = 0;
  function addToCart(id) {
    flag = 0;
    let pro = getProductByID(products, id);

    cart.forEach(function(ele){
      if(ele.id == pro.id){
        flag=1;
      }
    });

    if(flag==0){
    cart.push(pro);
    displayProducts(cart, "cart");
    CountCartItems();
    }
    else
    {
      alert("This Product is already in cart");
    }
  }
  
  function removeFromCart(id) {
    // getting the index based on id
    let index = cart.findIndex(function (product) {
      return product.id == id;
    });
  
    //   removing from cart based on index
    cart.splice(index, 1);
    displayProducts(cart, "cart");
    CountCartItems();
  }

  function filterByPrice(){
      let minPrice = document.getElementById('min-price').value;
      let maxPrice = document.getElementById('max-price').value;
      let filteredProducts = products.filter(function(prod){
        return prod.price>=minPrice && prod.price<=maxPrice;

      });

      displayProducts(filteredProducts);
  }

  function CountCartItems(){
    document.getElementById("CartCount").value = cart.length;
    //console.log(c);
  }

  CountCartItems();