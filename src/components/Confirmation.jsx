import React from 'react';
import { Toast, ToastBody } from 'react-bootstrap';

export function confirmation({ toggle }) {
    return(
        <Toast onClose= {() => toggle(false)}>
            <Toast.Header>
                <strong className='mr-auto'>Good Job</strong>
                <small>Just now</small>
            </Toast.Header>
            <Toast.Body>
                Congrats!
            </Toast.Body>
        </Toast>
    )
}