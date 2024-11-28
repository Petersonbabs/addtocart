const productsEl = document.getElementById('products')
const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    description: "High-quality wireless headphones with noise cancellation.",
    price: 99.99,
    category: "Electronics",
    image: "https://example.com/images/wireless-headphones.jpg",
    stock: 25,
    rating: 4.5,
    reviews: 120,
  },
  {
    id: 2,
    name: "Smartwatch",
    description: "Stylish smartwatch with fitness tracking and notifications.",
    price: 149.99,
    category: "Wearables",
    image: "https://example.com/images/smartwatch.jpg",
    stock: 15,
    rating: 4.7,
    reviews: 85,
  },
  {
    id: 3,
    name: "Gaming Mouse",
    description: "Ergonomic gaming mouse with customizable RGB lighting.",
    price: 49.99,
    category: "Accessories",
    image: "https://example.com/images/gaming-mouse.jpg",
    stock: 50,
    rating: 4.3,
    reviews: 200,
  },
  {
    id: 4,
    name: "4K Ultra HD TV",
    description: "55-inch 4K Ultra HD TV with HDR and smart features.",
    price: 599.99,
    category: "Home Entertainment",
    image: "https://example.com/images/4k-tv.jpg",
    stock: 10,
    rating: 4.8,
    reviews: 45,
  },
  {
    id: 5,
    name: "Bluetooth Speaker",
    description: "Portable Bluetooth speaker with deep bass and waterproof design.",
    price: 39.99,
    category: "Audio",
    image: "https://example.com/images/bluetooth-speaker.jpg",
    stock: 30,
    rating: 4.6,
    reviews: 300,
  }
];


const getSingleProduct = (productId)=>{
  const theProduct = products.find((element, index) => element.id == productId)
  return theProduct
}

const cartItems = JSON.parse(localStorage.getItem("cartItems")) || []


const displayCartNum = ()=>{
  const cartNumEl = document.getElementById("cart-num")
  cartNumEl.textContent = cartItems.length
}

displayCartNum()

const addToCart = (productId) => {
  const product = getSingleProduct(productId)
  // const updatedCart = [...cartItems, product]
  cartItems.push(product)
  localStorage.setItem('cartItems', JSON.stringify(cartItems))
  displayCartNum()
}

const viewProduct = (productId)=>{
  // parameter
  window.open(`./singleProduct.html?productId=${productId}`, '_blank')
}



const display = () => {
  products.forEach(ele => {
    productsEl.innerHTML += `
            <div class="single-product">
                <h3>${ele.name}</h3>
                <button onclick='viewProduct(${ele.id})'>View Product</button>
                <button onclick='addToCart(${ele.id})'>Add to Cart</button>
            </div>
        `
  })
}

display()

