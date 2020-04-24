<script>
  import { build } from '@phiskills/http-client'

  import ProductBar from './ProductBar.svelte'
  import ProductPie from './ProductPie.svelte'
  import CustomerBar from './CustomerBar.svelte'

  export let inspector = {host: 'localhost', port: 80}

  const client = build({
    host: inspector.host,
    port: inspector.port
  })
  const data = Promise.all([
    client.get('v1.0/product'),
    client.get('v1.0/customer')
  ])
</script>

<main>
  <h1>Dashboard</h1>
  <h2>Product Conversion Rate</h2>
    {#await data}
      <h3>Loading...</h3>
    {:then data}
      <ProductBar products={data[0].products} />
    {/await}
  <hr>
  <h2>Product Proportions</h2>
    {#await data}
      <h3>Loading...</h3>
    {:then data}
      <ProductPie products={data[0].products} />
    {/await}
  <hr>
  <h2>Customer Comparision</h2>
    {#await data}
      <h3>Loading...</h3>
    {:then data}
      <CustomerBar customers={data[1].customers} />
    {/await}
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    margin: 0 auto;
  }
</style>
