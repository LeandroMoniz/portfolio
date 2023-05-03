import React from 'react';

import SectionTitle from '../../assets/Components/SectionTitle/SectionTitle';

import { ContactStyle } from './ContactStyles';

import Button from '../../assets/Components/Button/Button'

const Contact = () => {
    return ( 
        <ContactStyle id='contact'>
            <SectionTitle subTitle={"Vamos conversar?"} Title={"Contato"}/>

            <div className='form-box'>
                <form target="_blank" action="https://formsubmit.co/Leandromoniz55@gmail.com" method="POST">
                    <label htmlFor="name">Nome*</label>
                    <input type="text" id='name' name="name" placeholder='Escreva seu nome' required />
                    <label htmlFor="e-mail">E-mail*</label>
                    <input type="email" id='e-mail' name="e-mail" placeholder='Escreva seu e-mail' required />
                    <label htmlFor="message">Mensagem</label>
                    <textarea name="message" placeholder='Me diga, como posso te ajudar !!!' cols="30" rows="10" id='message' required></textarea>
                    <Button type="submit">Enviar</Button>
                </form>
            </div>

            <h1 className='frase'>Vamos concretizar o seu<br/>projeto na prática.</h1>
            <p className='subFrase'>Me mande uma mensagem e irei lhe reponder o mais breve possível.</p>
            <p className='subFrase_2'>E-mail: Leandromoniz55@gmail.com</p>
            <p className='subFrase_3'>WhatsApp: (19) 992310809</p>

            <div className="background"></div>
        </ContactStyle>
     );
}
 
export default Contact;