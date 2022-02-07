import './index.css'

const MyComponent = props => {
  const {myProps} = props
  const {rn, rf} = myProps

  return (
    <div className="bg-container">
      <div className="my-box">
        <h1>Random Number</h1>
        <p>Generate a random number in the range of 0 to 100</p>
        <button type="button" onClick={rf}>
          Generate
        </button>
        <p className="number">{rn}</p>
      </div>
    </div>
  )
}

export default MyComponent
