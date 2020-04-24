<script>
  import { getContext } from 'svelte'
  import { username, products, cart, total, order, resetCart } from './store'

  const {client} = getContext('app')

  $: ready = $total && $username

  function buyCart () {
    const url = `v1.0/customer/${$username}/bought`
    const body = {products: $order}
    client.post(url, body).then(resetCart).catch(alert)
  }
</script>

<main>
  <input type="checkbox" id="checkout" class="modal">
  <div class="checkout">
    <div class="card">
      <label for="checkout" class="modal-close"></label>
      <h2 class="section">Checkout</h2>
      <div class="main section">
          {#if ready}
            <table>
              <tr>
                <th>Product</th>
                <th>Quantity</th>
              </tr>
                {#each $products as product}
                    {#if $cart[product.name]}
                      <tr>
                        <td data-label="product">
                            {product.name}
                        </td>
                        <td data-label="quantity" class="number">
                            {$cart[product.name]}
                        </td>
                      </tr>
                    {/if}
                {/each}
              <tr class="total">
                <td data-label="product">Total</td>
                <td data-label="quantity" class="number">
                    {$total}
                </td>
              </tr>
            </table>
          {:else if $username}
            <h3>You have no products in your shopping cart</h3>
          {:else}
            <h3>You need to log in to make an order</h3>
          {/if}
      </div>
      <footer class="section">
        <button
          disabled={!ready}
          class:secondary={ready}
          on:click={resetCart}>
          Reset
        </button>
        <button
          disabled={!ready}
          class:tertiary={ready}
          on:click={buyCart}>
          Buy
        </button>
      </footer>
    </div>
  </div>
</main>

<style>
  main .card .section {
    color: whitesmoke;
  }

  main .card h2.section {
    background-color: seagreen;
  }

  main .card footer.section {
    background-color: darkseagreen;
  }

  main .card footer.section button {
    min-width: 7rem;
  }

  main .checkout .card {
    max-width: 60%;
    max-height: 80%;
    text-align: center;
  }

  main .checkout .card .main.section {
    color: black;
    text-align: left;
  }

  main .checkout .card .main.section table tr td.number {
    text-align: right;
  }

  main .checkout .card .main.section table tr.total {
    font-weight: bold;
  }

  main .checkout .card .main.section h3 {
    text-align: center;
    vertical-align: middle;
    line-height: 10rem;
  }
</style>
