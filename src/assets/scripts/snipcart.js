function closeSnip() {
  document.addEventListener('snipcart.ready', () => {
  Snipcart.api.theme.cart.close()

  });
}