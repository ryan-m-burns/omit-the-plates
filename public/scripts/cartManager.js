const addToCart = (e) => {
  const user_id = (document.cookie).replace('user_id=', '');
  const menu_id = $(e.currentTarget).closest('.add-to-order-button').find('.hidden-values').attr('id');
  const quantity = $(".order-quantity").val().trim();
  const preferences = $('#preferences-text').val();

  const postData = { quantity, menu_id, preferences, user_id };
  console.log(postData);
  $.post(`/cart/${user_id}`, postData, renderCart(user_id));
};

const generateCart = (infoInputs) => {
  console.log('infoInput', infoInputs);
  const $cartContainer = $('.order-summary');
  $cartContainer.empty();
};
const generateCartItems = (infoInput) => {
  const $cartContainer = $('.order-summary');
  const cartItem = `
    <div class="order-items">
      <div class="quantity-item">
        <div>
          <span>${infoInput.quantity}</span><span>x</span>
        </div>
        <p>${infoInput.name}</p>
      </div>
      <div class="foodpic-div">
        <img src="${infoInput.image_url}" alt="food" class="food-picture">
      </div>
      <div class="price-delete">

      <span>$${(infoInput.quantity * infoInput.price / 100).toFixed(2)}</span>
        <button type="button" class="remove-item">
        <i class="fa-solid fa-trash-can"></i>
        </button>
      </div>
    </div>`;
  $cartContainer.append(cartItem);
};

const renderCart = (id) => $.get(`/cart/${id}`, generateCart);