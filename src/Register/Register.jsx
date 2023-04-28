import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from '../firebase/Firebase.config';

const Register = () => {

    const auth = getAuth(app);

    //state:
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');


    const handSumbit = (event) => {

        // 1. prevent add

        event.preventDefault();
        setError('');
        setSuccess('');

        // 2. collect data

        const email = event.target.email.value;
        const password = event.target.password.value;

        if(!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)){
            setError("Please fill up the requirment")
            return;
        }



        // 3. create user in firebase

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                 
                const user = userCredential.user;
                console.log(user);  
                event.target.reset();
                setSuccess('Successfully!!!!!')
                
            })
            .catch((error) => {
                
                const errorMessage = error.message;
                console.log(errorMessage);
                setError(error.message);
                
                
            });

    }



    return (
        <div className='w-50 mt-3'>

            <Form onSubmit={handSumbit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">

                    <Form.Control type="text" name='name' placeholder="Name" />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">

                    <Form.Control type="email" name='email' placeholder="Enter email" required/>

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">

                    <Form.Control type="password" name='password' placeholder="Password" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">

                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>

            <p>{error}</p>
            <p className='text-success'>{success}</p>

            

        </div>
    );
};

export default Register;