<script>
  import { getContext } from 'svelte'
  import { username, cart, addToCart } from './store'

  export let product = {name: 'N/A', url: ''}

  const wiki = `https://en.wikipedia.org/wiki/${product.name}`

  const {client} = getContext('app')

  let detailsOpened = false

  function openProductDetails () {
    detailsOpened = true
    const url = `v1.0/product/${product.name}/watched`
    const body = $username ? {visitor: $username} : {}
    client.post(url, body).catch(alert)
  }

  function closeProductDetails () {
    detailsOpened = false
  }

</script>

<main>
  <div class="card">
    <h2 class="section">
        {product.name}
        {#if $cart[product.name]}
          : {$cart[product.name]}
        {/if}
    </h2>
    <img
      src={product.url}
      alt={product.name}
      class="section media"
      on:click={openProductDetails}>
    <footer class="section">
      <button
        class="tertiary"
        on:click={() => addToCart(product)}>
        Add to Cart
      </button>
    </footer>
  </div>
  <input
    type="checkbox"
    class="modal"
    id={product.name}
    checked={detailsOpened}>
  <div class="details">
    <div class="card">
      <label
        on:click={closeProductDetails}
        class="modal-close">
      </label>
      <h2 class="section">
          {product.name}
      </h2>
      <iframe src={wiki}>
      </iframe>
    </div>
  </div>
</main>

<style>
  main .card {
    text-align: center;
  }

  main .card .section {
    color: whitesmoke;
  }

  main .card h2.section {
    background-color: steelblue;
  }

  main .card img:hover {
    opacity: 0.7;
    border: 10px solid yellow;
  }

  main .card footer.section {
    background-color: lightsteelblue;
  }

  main .card footer.section button {
    min-width: 7rem;
  }

  main .details .card {
    max-width: 80%;
    min-height: 80%;
  }

  main .details .card iframe {
    height: -webkit-fill-available;
  }
</style>
