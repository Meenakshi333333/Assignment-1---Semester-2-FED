// JavaScript to redirect to home page after form submission
document.getElementById("consultation-form").addEventListener("submit", function(event) {
  event.preventDefault();  // Prevents form from being submitted to a server
  window.location.href = "index.html";  // Redirects to home page
});
function submitPromoCode() {
  const promoCode = document.getElementById("promoCode").value;
  
  if (promoCode) {
      // You can add any logic here to check the promo code, such as validating it or applying a discount.
      alert("Promo code entered: " + promoCode);
  } else {
      alert("Please enter a promo code.");
  }

  // Redirect to the homepage (or you can replace 'index.html' with your home page URL)
  window.location.href = "index.html";  // Change to the appropriate homepage URL if needed
}
