import App from './App.svelte'

const app = new App({
  target: document.body,
  props: {
    publisher: {
      host: 'localhost',
      port: 8081
    }
  }
})

export default app
