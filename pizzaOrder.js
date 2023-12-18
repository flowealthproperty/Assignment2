function submitPizzaOrder(event) {
  event.preventDefault();
  const form = document.getElementById('pizzaForm');
  const size = form.size.value;
  const toppings = form.toppings.value;
  const crust = form.crust.value;
  const payment = document.querySelector('input[name="payment"]:checked').value;

  const orderSummary = `
    <div class="bodered">
    <h2 class="reds">Order Summary:</h2>
    <p><b>Size:</b> ${size}</p>
    <p><b>Toppings:</b> ${toppings}</p>
    <p><b>Crust:</b> ${crust}</p>
    <p><b>Payment Method:</b> ${payment}</p>
    </div>
  `;
  document.getElementById('orderSummary').innerHTML = orderSummary;
}
