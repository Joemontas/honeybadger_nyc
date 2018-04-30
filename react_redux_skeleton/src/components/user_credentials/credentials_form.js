import React from 'react';

const CredentialsForm = ({ action }) => {
    return (
        <form onSubmit={action} method='POST' onSubmit={handler}>
            <input className='email-input' placeholder='email'/>
            <input className='password-input' placeholder='password' type='password'/>
            <button className='credentials-submit' type='submit'>Submit</button>
        </form>
    )
}

export default 'Credential Form'