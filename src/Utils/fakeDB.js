const addToDb = (id) => {
  let jobCart = {};

  const storedCart = localStorage.getItem("shopping-cart");
  if (storedCart) {
    jobCart = JSON.parse(storedCart);
  }

  const quantity = jobCart[id];
  if (quantity) {
    const newQuantity = quantity + 1;
    jobCart[id] = newQuantity;
  } else {
    jobCart[id] = 1;
  }
  localStorage.setItem("shopping-cart", JSON.stringify(jobCart));
};

const getStoredCart = () => {
  let jobCart = {};
  const storedCart = localStorage.getItem("shopping-cart");
  if (storedCart) {
    jobCart = JSON.parse(storedCart);
  }
  return jobCart;
};

export { addToDb, getStoredCart };
