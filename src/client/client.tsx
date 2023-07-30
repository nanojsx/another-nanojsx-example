import { render } from 'nano-jsx/esm/index.js'
import { Counter } from '../components/counter.js'

window.addEventListener('load', () => {
  const el = document.getElementById('count-component')
  if (el) render(<Counter />, el)
})
