<script>
  import { setContext } from 'svelte'
  import { build } from '@phiskills/http-client'
  import { username, products } from './store'

  import Product from './Product.svelte'
  import Checkout from './Checkout.svelte'

  export let publisher = {host: 'localhost', port: 80}

  setContext('app', {
    client: build({
      host: publisher.host,
      port: publisher.port
    })
  })
</script>

<main>
  <header>
    <h1>Phi Shop</h1>
    <label for="checkout" class="button">
      Checkout <span class="icon-cart"></span>
    </label>
  </header>
  <form>
    <label for="login">
      Your login:
    </label>
    <input
      type="text"
      id="login"
      placeholder="Username"
      bind:value={$username}
      required>
  </form>
  <div class="container">
    <div class="row">
        {#each $products as product}
          <div class="item">
            <Product product={product} />
          </div>
        {/each}
    </div>
  </div>
  <Checkout />
</main>

<style>
  main {
    padding: 1em;
    margin: 0 auto;
  }

  main header h1 {
    display: inline-block;
  }

  main header .button {
    float: right;
  }

  main .container .row .item {
    margin: 3rem auto;
  }
</style>
