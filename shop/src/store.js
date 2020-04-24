import { derived, readable, writable } from 'svelte/store'

export const username = writable(null)
export const products = readable([], function (set) {
  loadProducts().then(({ products }) => set(products))
  return function () {
    set([])
  }
})
export const cart = writable({})
export const total = derived(cart, $cart =>
  Object.values($cart).reduce((sum, value) => sum + value, 0)
)
export const order = derived(cart, $cart =>
  Object.entries($cart).reduce(
    (acc, [name, amount]) => [...acc, ...new Array(amount).fill(name)],
    []
  )
)

export function addToCart ({ name }) {
  cart.update(c => ({
    ...c,
    [name]: (c[name] || 0) + 1
  }))
}

export function resetCart () {
  cart.set({})
}

async function loadProducts () {
  const names = ['Sugar', 'Salt', 'Pepper']
  return {
    products: names.map(n => ({ name: n, url: `images/${n}.jpg` }))
  }
}
