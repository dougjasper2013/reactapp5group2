const KEY = 'gg-cart-items';

export function readCart() {
  if (typeof window === 'undefined') return [];
  try {
    const raw = window.localStorage.getItem(KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function writeCart(items) {
  if (typeof window === 'undefined') return;
  window.localStorage.setItem(KEY, JSON.stringify(items));
}

export function addItemToCart(product) {
  const current = readCart();
  const existing = current.find((line) => line.id === product.id);
  const next = existing
    ? current.map((line) =>
        line.id === product.id
          ? { ...line, quantity: line.quantity + 1 }
          : line
      )
    : [...current, { ...product, quantity: 1 }];
  writeCart(next);
  return next;
}

export function updateCartQuantity(productId, delta) {
  const current = readCart();
  const next = current
    .map((line) =>
      line.id === productId
        ? { ...line, quantity: Math.max(0, line.quantity + delta) }
        : line
    )
    .filter((line) => line.quantity > 0);
  writeCart(next);
  return next;
}

export function removeCartItem(productId) {
  const next = readCart().filter((line) => line.id !== productId);
  writeCart(next);
  return next;
}
