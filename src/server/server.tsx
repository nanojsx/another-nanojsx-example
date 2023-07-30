import express from 'express'
import { renderSSR } from 'nano-jsx/esm/index.js'
import { Home } from '../components/home.js'
import compression from 'compression'

const app = express()
const port = 5454

app.use(compression())

app.use('/public', express.static('dist/server/public'))

app.get('/', (req, res) => {
  res.send(renderSSR(() => <Home />))
})

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}/`)
})
