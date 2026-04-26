document.addEventListener('DOMContentLoaded', () => {
  const loginDiv = document.getElementById('login');
  const productList = document.querySelector('.product-list');
  const cartDiv = document.querySelector('.cart');
  const cartLink = document.querySelector('.cart-link');
  const checkoutBtn = document.querySelector('.checkout-btn');
  const errorMsg = document.querySelector('.error-message');
  const successMsg = document.querySelector('.success-message');
  const cartItemsDiv = document.querySelector('.cart-items');
  let cart = [];

  function show(el) { el.style.display = ''; }
  function hide(el) { el.style.display = 'none'; }

  loginDiv.querySelector('button').onclick = () => {
    const username = loginDiv.querySelector('input[name="username"]').value;
    const password = loginDiv.querySelector('input[name="password"]').value;
    if ((username === 'test_user' && password === 'password123') || username === 'admin') {
      hide(loginDiv);
      show(productList);
      errorMsg.style.display = 'none';
    } else {
      errorMsg.style.display = '';
    }
  };

  productList.querySelector('.add-to-cart').onclick = () => {
    cart.push('Laptop');
  };
  productList.querySelector('.add-to-cart-typo').onclick = () => {
    cart.push('Smartphone');
  };

  cartLink.onclick = (e) => {
    e.preventDefault();
    hide(productList);
    show(cartDiv);
    cartItemsDiv.innerHTML = cart.map(item => `<div>${item}</div>`).join('');
  };

  checkoutBtn.onclick = () => {
    if (cart.length === 0) {
      alert('Your cart is empty!');
      return;
    }
    hide(cartDiv);
    show(successMsg);
  };
});
