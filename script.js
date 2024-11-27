// JavaScript to redirect to home page after form submission
document.getElementById("consultation-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevents form from being submitted to a server
  window.location.href = "index.html.html"; // Redirects to the correct home page
});

function validatePromoCode() {
  const promoCode = document.getElementById('promoCode').value;
  if (promoCode === 'DISCOUNT10') { // Example validation
      window.location.href = 'promo-success.html';
  } else {
      alert('Invalid Promo Code');
  }
}
