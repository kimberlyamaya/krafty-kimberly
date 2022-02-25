import React from 'react'

function Contact({currentPage}) {
    // logic for onblur inside function
    function checkEmail (email) {
        console.log(email)

    }

    return (
        <div className='container'>
            <div className='d-flex flex-column'>
                <h2>{currentPage}</h2>
                <label htmlFor='name'>Name:</label>
                <input type='text' id='name' name='name'></input>
                {/* logic: show message if email is invalid */}
                <label htmlFor='email'>Email Address:</label>
                <input type='email' id='email' name='email' onBlur={checkEmail}></input>
                {/* logic:  show message if message is empty*/}
                <label htmlFor='message'>Message:</label>
                <textarea id='message' name='message' rows='4' cols='50'></textarea>
                {/* logic:  button should send message*/}
                <button>Submit</button>
            </div>
        </div>
    )
}

export default Contact