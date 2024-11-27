// JavaScript to redirect to home page after form submission
document.getElementById("consultation-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevents form from being submitted to a server
  window.location.href = "index.html.html"; // Redirects to the correct home page
});

// Function to handle promo code submission
function submitPromoCode() {
  const promoCode = document.getElementById("promoCode").value;

  if (promoCode) {
    // Example logic for promo code handling
    alert("Promo code entered: " + promoCode);
  } else {
    alert("Please enter a promo code.");
  }

  // Redirect to the homepage
  window.location.href = "index.html.html"; // Correct file path
}
