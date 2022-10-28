//client interface

// Document ready
$(() => {
  const $popout = $('.popout-section');
  const $carousel = $('.dynamic-menu');
  const $checkout = $('.order-section');
  console.log("alert test");

  // events go here
  $carousel.on('click', '.scroll-left', leftScroll);
  $carousel.on('click', '.scroll-right', rightScroll);
  $carousel.on('click', '.expand-food', renderPopout);
  $carousel.on('click', '.expand-food', addToCart);
  $popout.on('click', '.toggle-less', decreaseQuantity);
  $popout.on('click', '.toggle-more', increaseQuantity);
  $popout.on('click', '.close', () => $('.popout-section').css("visibility", "hidden"));
  $checkout.on("click", '.remove-item', deleteItem);

  $('.checkout').on('submit', checkout);
});
// research nodemon docs
