fetch("http://localhost:3000/cart")
.then((res)=>res.json())
.then((res)=>{
    let data = "";
    let total = 0;
    res.forEach((el,i)=>{
        data += `<div><img src="${el.image}" alt="${el.title}" /><br>
        <div class="details">
          <h2>${el.title}</h2><br>
          <p>₹${el.price}<span class="discount">₹${el.discount} 25% OFF</span></p>
          <label>Qty:</label>
          <input type="number" value="1" min="1" max="10" />
         
          <p class="mt-3">Size: 4-5Y</p>
          <p>Fabric: Terry</p>
        </div><hr></div>`;
        total += el.price;
    });
    document.querySelector(".product-details").innerHTML = data;
    let discount = (total.toFixed(2) * 25) / 100;
    let finalPrice = total.toFixed(2) - discount.toFixed(2);
    document.querySelector("#totalPrice").innerHTML = `₹${total.toFixed(2)}`;
    document.querySelector("#discount").innerHTML = `₹${discount.toFixed(2)}`;
    document.querySelector("#finalPrice").innerHTML = `₹${Math.round(finalPrice)}`
})