import './style.scss'
import SubSample from './SubSample/index'

function Monitor() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button className="Button">Hello</button>
        <SubSample name="Junsoo" />
      </header>
    </div>
  )
}

export default Monitor
