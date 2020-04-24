<script>
  import { onMount } from 'svelte'
  import Chart from 'chart.js'

  export let products = []

  const blue = o => `rgba(0, 0, 255, ${o})`
  const red = o => `rgba(255, 0, 0, ${o})`

  const parse = key => products.map(c => c[key])

  onMount(async function () {
    const ctx = document.getElementById('productBar').getContext('2d')
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: parse('name'),
        datasets: [
          {
            label: 'Watched',
            data: parse('watched'),
            backgroundColor: blue(0.5),
            borderColor: blue(1),
            borderWidth: 1
          },
          {
            label: 'Bought',
            data: parse('bought'),
            backgroundColor: red(0.5),
            borderColor: red(1),
            borderWidth: 1
          }
        ]
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              }
            }
          ]
        }
      }
    })
  })
</script>

<main>
  <canvas id="productBar"></canvas>
</main>
