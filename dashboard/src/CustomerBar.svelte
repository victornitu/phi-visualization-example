<script>
  import { onMount } from 'svelte'
  import Chart from 'chart.js'

  export let customers = []

  const blue = o => `rgba(0, 0, 255, ${o})`
  const green = o => `rgba(0, 255, 0, ${o})`
  const red = o => `rgba(255, 0, 0, ${o}`

  const parse = key => customers.map(c => c[key])

  onMount(async function () {
    customers.sort((a, b) => b.products - a.products)
    const ctx = document.getElementById('customerBar').getContext('2d')
    new Chart(ctx, {
      type: 'horizontalBar',
      data: {
        labels: parse('name'),
        datasets: [
          {
            label: 'Sugar',
            data: parse('Sugar'),
            backgroundColor: blue(0.5),
            borderColor: blue(1),
            borderWidth: 1
          },
          {
            label: 'Salt',
            data: parse('Salt'),
            backgroundColor: red(0.5),
            borderColor: red(1),
            borderWidth: 1
          },
          {
            label: 'Pepper',
            data: parse('Pepper'),
            backgroundColor: green(0.5),
            borderColor: green(1),
            borderWidth: 1
          }
        ]
      },
      options: {
        scales: {
          yAxes: [
            {
              stacked: true,
              ticks: {
                beginAtZero: true
              }
            }
          ],
          xAxes: [
            {
              stacked: true,
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
  <canvas id="customerBar"></canvas>
</main>
