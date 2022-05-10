import React, {useState} from 'react';

const QuestionForm = () => {
    const [inputValue, setInputValue] = useState('')

    const handleSubmit = e => {
        e.preventDefault();
        alert(`Vous avez saisi : ${inputValue}`);
    }
  return (
    <form onSubmit={handleSubmit}>
        <input type="text" name='my_input' onChange={(e)=>setInputValue(e.target.value)} value={inputValue} />
        <button type='submit'>Entrez</button>
    </form>
  )
}

export default QuestionForm