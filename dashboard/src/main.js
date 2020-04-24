import App from './App.svelte'

const app = new App({
  target: document.body,
  props: {
    inspector: {
      host: 'localhost',
      port: 8082
    }
  }
})

export default app
