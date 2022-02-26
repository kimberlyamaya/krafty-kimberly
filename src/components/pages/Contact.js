import React, {useState} from 'react'

function Contact({currentPage}) {

    const [formState, setFormState] = useState({name: '', email: '', message:''})

    // const { name, email, message } = formState;

    function handleChange(e) {
        setFormState({...formState, [e.target.name]: e.target.value })
      }

    function handleSubmit(e) {
      e.preventDefault();
      console.log(formState);
    }

    return (
        <div className='container'>
            <form className='d-flex flex-column' id="contact-form" onSubmit={handleSubmit}>
                <h2>{currentPage}</h2>

                <label htmlFor='name'>Name:</label>
                <input type='text' id='name' name='name' defaultValue={formState.name} onChange={handleChange}></input>

                {/* logic: show message if email is invalid */}
                <label htmlFor='email'>Email Address:</label>
                {/* <input type='email' id='email' name='email' onBlur={checkEmail}></input> */}
                <input type='email' id ='email' name='email' defaultValue={formState.email} onChange={handleChange}></input>

                {/* logic:  show message if message is empty*/}
                <label htmlFor='message'>Message:</label>
                <textarea id='message' name='message' rows='5' defaultValue={formState.message} onChange={handleChange}></textarea>

                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default Contact