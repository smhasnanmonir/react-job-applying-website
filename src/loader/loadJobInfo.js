import { getStoredCart } from "../Utils/fakeDB";

export const loadJobInfo = async () => {
  const jobsData = await fetch("/data.json");
  const jobs = await jobsData.json();
  console.log(jobs);
  const savedCart = getStoredCart();
  const initialCart = [];
  for (const id in savedCart) {
    const foundProduct = jobs.find((job) => job.id == id);
    if (foundProduct) {
      const quantity = savedCart[id];
      foundProduct.quantity = quantity;
      initialCart.push(foundProduct);
    }
  }
  return { jobs, initialCart };
};
