import React from 'react'
import Foot from './Foot'

function Contact({currentPage}) {
    return (
        <main>
            <section>
                <div className='container'>
                    <div className='d-flex flex-column'>
                        <h2>{currentPage}</h2>
                        <label for='name'>Name:</label>
                        <input type='text' id='name' name='name'></input>
                        {/* logic: show message if email is invalid */}
                        <label for='email'>Email Address:</label>
                        <input type='email' id='email' name='email'></input>
                        {/* logic:  show message if message is empty*/}
                        <label for='message'>Message:</label>
                        <textarea id='message' name='message' rows='4' cols='50'></textarea>
                        {/* logic:  button should send message*/}
                        <button>Submit</button>
                    </div>
                </div>
            </section>
            <Foot />
        </main>
    )
}

export default Contact