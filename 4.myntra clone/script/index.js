

let innerHTMLnew = '';
let bagItemstr = localStorage.getItem('bagItems');
let bagItems = bagItemstr ? JSON.parse(bagItemstr) : [];
displayItemOnHomePage();
  bagdisplaycount();

  function addToBag(itemID){
    bagItems.push(itemID);
    localStorage.setItem('bagItems' , JSON.stringify(bagItems));
    bagdisplaycount();
  }
  function bagdisplaycount (){
   let bagitemcount = document.querySelector('.bag-item-count');
   if(bagItems.length > 0){
     bagitemcount.style.visibility = 'visible';
     bagitemcount.innerText = bagItems.length;
    }
    else {
      bagitemcount.style.visibility = 'hidden';
    }
  }
function displayItemOnHomePage (){
  let mainItem = document.querySelector('.items-container');
  if(!mainItem){
  return;
}
  items.forEach(item => {
    innerHTMLnew += `<div class="item-container">
    <img class="item-image" src="/project/4.myntra clone/${item.image}" alt="p1">
    <div class="rating">
    ${item.rating.stars} ⭐ | ${item.rating.count}
    </div>
    <div class="company-name">
    ${item.company};
    </div>
    <div class="item-name">
    ${item.item_name};
    </div>
    <div class="price">
    <span class="current-price">Rs ${item.current_price}</span>
    <span class="original-price">Rs ${item.original_price}</span>
    <span class="discount">(${item.discount_percentage}% off)</span>
    </div>
    <button class="btn-add-bag" onclick="addToBag(${item.id})"> Add to Bag</button>
    </div>`
  })
  mainItem.innerHTML = innerHTMLnew;
}