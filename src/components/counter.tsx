import { Component } from 'nano-jsx/esm/index.js'

export class Counter extends Component {
  didMount() {
    console.log('didMount')
  }

  updateCount(count: number) {
    const newCount = count + 1

    // we do also update the counter in the header (just because we can)
    let el = document.getElementById('counter-in-header')
    if (el) el.innerText = newCount.toString()

    // update (re-render) the component
    this.update({ count: newCount })
  }

  // we could of course use state instead of passing a prop to render()
  render({ count } = { count: 0 }) {
    return (
      <div id="count-component" style={{ backgroundColor: 'antiquewhite', padding: '8px', display: 'inline-block' }}>
        <div>
          counter: <span>{count}</span>
        </div>
        <button onClick={this.updateCount.bind(this, count)}>plus</button>
      </div>
    )
  }
}
