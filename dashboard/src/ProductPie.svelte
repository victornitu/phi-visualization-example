<script>
  import { onMount } from 'svelte'
  import Chart from 'chart.js'

  export let products = []

  const blue = o => `rgba(0, 0, 255, ${o})`
  const green = o => `rgba(0, 255, 0, ${o})`
  const red = o => `rgba(255, 0, 0, ${o}`

  const parse = key => products.map(c => c[key])
  const sum = key => products.reduce((acc, p) => acc + p[key], 0)

  onMount(async function () {
    const ctx = document.getElementById('productPie').getContext('2d')
    new Chart(ctx, {
      type: 'pie',
      data: {
        labels: parse('name'),
        datasets: [
          {
            label: 'Watched',
            data: parse('watched').map(x => Math.round(x / sum('watched') * 100)),
            backgroundColor: [blue(0.5), red(0.5), green(0.5)],
            borderColor: [blue(1), red(1), green(1)],
            borderWidth: 1,
            weight: sum('watched') / sum('bought')
          },
          {
            label: 'Bought',
            data: parse('bought').map(x => Math.round(x / sum('bought') * 100)),
            backgroundColor: [blue(0.8), red(0.8), green(0.8)],
            borderColor: [blue(1), red(1), green(1)],
            borderWidth: 1,
            weight: 1
          }
        ]
      },
      options: {
        rotation: Math.PI,
        circumference: Math.PI,
        cutoutPercentage: 20
      }
    })
  })
</script>

<main>
  <canvas id="productPie"></canvas>
</main>
