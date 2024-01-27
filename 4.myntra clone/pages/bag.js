

let bagItemsObjects;
bagSearch();
displayBagItems();
displayBagSummary();

function bagSearch(){
  console.log(bagItems);
  bagItemsObjects = bagItems.map(itemId => {
    for(let i =0 ; i< items.length ; i++){
      if(itemId == items[i].id){
        return items[i];
      }
    }
  });
  console.log(bagItemsObjects);

}

function displayBagItems(){
  let container = document.querySelector('.bag-items-container');
  let innerHTML = '';
  bagItemsObjects.forEach(product => {
   innerHTML += singleDiv(product);
});
  container.innerHTML = innerHTML;
}
function removeProductFromCart(item){
   bagItems =  bagItems.filter( bagItemsId => bagItemsId != item);
   localStorage.setItem('bagItems' , JSON.stringify(bagItems));
   bagSearch();
   displayBagItems();
   bagdisplaycount();
   displayBagSummary();
}

function singleDiv (item){
  return `<div class="bag-item-container">
  <div class="item-left-part">
  <img class="bag-item-img" src="/project/4.myntra clone/${item.image}">
  </div>
  <div class="item-right-part">
  <div class="company">${item.company}</div>
  <div class="item-name">${item.item_name}</div>
  <div class="price-container">
  <span class="current-price">Rs ${item.current_price}</span>
  <span class="original-price">Rs ${item.original_price}</span>
  <span class="discount-percentage">(${item.discount_percentage}% OFF)</span>
  </div>
  <div class="return-period">
  <span class="return-period-days">${item.return_period} days</span> return available
  </div>
  <div class="delivery-details">
  Delivery by
  <span class="delivery-details-days">${item.delivery_date}</span>
  </div>
  </div>
  <div class="remove-from-cart" onclick="removeProductFromCart(${item.id})">X</div>
  </div>
  `;
}

  

function totalDiscount(){

}
function totalamount(){

}
function displayBagSummary (){
  let summary = document.querySelector('.bag-summary')

  let price =0; ; 
   bagItemsObjects.forEach(bagItem => {price += bagItem.original_price});

   let toPay = 0;
   bagItemsObjects.forEach(bagItem => toPay += bagItem.current_price);

  summary.innerHTML = `
  <div class="bag-details-container">
  <div class="price-header">PRICE DETAILS (${bagItems.length} Items) </div>
  <div class="price-item">
  <span class="price-item-tag">Total MRP</span>
  <span class="price-item-value">Rs ${price}</span>
  </div>
  <div class="price-item">
  <span class="price-item-tag">Discount on MRP</span>
  <span class="price-item-value priceDetail-base-discount">-Rs${price - toPay}</span>
  </div>
  <div class="price-item">
  <span class="price-item-tag">Convenience Fee</span>
  <span class="price-item-value">Rs 99</span>
  </div>
  <hr>
  <div class="price-footer">
  <span class="price-item-tag">Total Amount</span>
  <span class="price-item-value">Rs ${toPay+99}</span>
  </div>
  </div>
  <button class="btn-place-order">
  <div class="css-xjhrni">PLACE ORDER</div>
  </button>
  `;
  
}