import React from 'react'
import { Field, reduxForm } from 'redux-form'

let PlayerForm = props => {
  const { handleSubmit } = props
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="firstPlayer">Player1</label>
        <Field name="firstPlayer" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="secondPlayer">Player2</label>
        <Field name="secondPlayer" component="input" type="text" />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

PlayerForm = reduxForm({
  form: 'player'
})(PlayerForm)

export default PlayerForm;