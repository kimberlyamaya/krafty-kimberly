import React, {useState} from 'react'

function Contact({currentPage}) {
    // variables //
    const [formState, setFormState] = useState({name: '', email: '', message:''})
    const [errorMessage, setErrorMessage] = useState('')

    const { name, email, message } = formState


    // functions //
    function validateEmail(email) {
        var regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(String(email).toLowerCase())
      }

    function handleChange(e) {
                
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value)
            // isValid conditional statement
            if (!isValid) {
                setErrorMessage('Your email is invalid.')
              } else {
                  setErrorMessage('')
              }
        } else {
          if (!e.target.value.length) {
              setErrorMessage(`${e.target.name} is required.`)
            } else {
              setErrorMessage('')
          }
        }
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value })
            console.log('Handle Form', formState);
        }
      }

    function handleSubmit(e) {
        e.preventDefault();
        if (!errorMessage) {
            console.log('Submit Form', formState);
          }
    }

    // HTML //
    return (
        <div className='container'>
            <form className='d-flex flex-column' id="contact-form" onSubmit={handleSubmit}>
                <h2>{currentPage}</h2>

                <label htmlFor='name'>Name:</label>
                <input type='text' id='name' name='name' defaultValue={name} onBlur={handleChange}></input>

                {/* logic: show message if email is invalid */}
                <label htmlFor='email'>Email Address:</label>
                {/* <input type='email' id='email' name='email' onBlur={checkEmail}></input> */}
                <input type='email' id ='email' name='email' defaultValue={email} onBlur={handleChange}></input>

                {/* logic:  show message if message is empty*/}
                <label htmlFor='message'>Message:</label>
                <textarea id='message' name='message' rows='5' defaultValue={message} onBlur={handleChange}></textarea>

                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}

                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default Contact