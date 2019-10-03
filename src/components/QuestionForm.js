import React, { useState, useEffect } from 'react';

const formDetails = {
  id: 0,
  question: "",
  answer: ""
}
const QuestionForm = props => {
  const [questionForm, setQuestionForm] = useState(formDetails)

  const handleInputChange = (event) => {

    setQuestionForm({
      ...questionForm, [event.currentTarget.id]: event.currentTarget.value
    })
  }
  const clearForm = () => {
    event.preventDefault()
    setQuestionForm(formDetails)
  }

  const onSubmitHandler = (event) => {
    event.preventDefault()
    props.formSubmitHandler(questionForm)
    clearForm()
  }

  return(
    <form className="callout" id="question-form" onSubmit={onSubmitHandler}>
      <div>
        <label htmlFor="question">Question:</label>
        <input
          type="text"
          id="question"
          name="question"
          onChange={handleInputChange}
          value={questionForm.question}
          />
      </div>
      <div>
        <label htmlFor="answer">Answer:</label>
        <input
          type="text"
          id="answer"
          name="answer"
          onChange={handleInputChange}
          value={questionForm.answer}
          />
      </div>
      <div>
      <input type="submit" className="button" value="Submit"/>
      </div>
      <div>
      <button className="button" onClick={clearForm}>Clear</button>
      </div>
    </form>

  )
}

export default QuestionForm
