import React, { useState } from 'react'
import data from './data'
function App() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    let amount = parseInt(count)

    if (count <= 0) {
      amount = 0
    }
    if (count > 8) {
      amount = 0
    }

    setText(data.slice(0, amount))
  }

  return (
    <section className='section-center'>
      <h3>Tired of boring Lorem Ipsum?</h3>
      <p>
        Attention to all users!!! Kindly, note that this app doesn't accept
        negative number and we are not able to generate more that eight (8)
        paragraphs at the moment.
      </p>
      <h5>Kindly, attend number of paragraph between 1 to 8. Thanks!</h5>
      <form className='lorem-form' onSubmit={handleSubmit}>
        <label htmlFor='amount'>paragraphs:</label>
        <input
          type='number'
          name='amount'
          id='amount'
          value={count}
          onChange={(e) => setCount(e.target.value)}
        ></input>
        <button type='submit' className='btn'>
          Generate
        </button>
      </form>

      <article className='lorem-text'>
        {text.map((item, index) => {
          return <p key={index}>{item}</p>
        })}
      </article>
    </section>
  )
}

export default App
