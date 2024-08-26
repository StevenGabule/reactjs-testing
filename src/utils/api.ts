import { Product } from "../shared/types"

const API = 'http://localhost:4000';

export const getProducts = () => {
  return fetch(`${API}/products`).then((res) => res.json()).catch(console.log)
}

export const getOrder = (id: string) => {
  return fetch(`${API}/order/${id}`).then((res) => res.json()).catch(console.log)
}

export interface CheckoutPayload {
  products: Product[]
}

export const postCheckout = (data: CheckoutPayload) => {
  return fetch(`${API}/checkout`, {
    method: "post",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((res) => res.json()).catch(console.log)
}