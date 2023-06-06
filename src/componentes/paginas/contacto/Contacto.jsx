import React, { useRef, useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import emailjs from '@emailjs/browser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faYoutube, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons'

export const Contacto = () => {
    const [formSend, setFormSend] = useState(false);
    const form = useRef();

    const sendEmail = () => {
        emailjs.sendForm('service_9unyiho', 'template_n4ly7fh', form.current, '_96mtxYTIA0BDQxuw')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className="login-box">
            <h2>Contacto</h2>

            <div className='socials'>

                <h6>Redes sociales:</h6>
                <ul class="redes">
                    <li class="icon facebook">
                        <span class="nombre-red">Facebook</span>
                        <a href="https://www.facebook.com/El-alma-en-un-hilo-Marionetas-y-Miniaturas--804228576283329" target="_blank">
                            <span>
                                <FontAwesomeIcon icon={faFacebookF} />
                            </span>
                        </a>
                    </li>
                    <li class="icon instagram">
                        <span class="nombre-red">Instagram</span>
                        <a href="https://www.instagram.com/elalmaenunhilo.marionetas/?hl=es" target="_blank">
                            <span>
                                <FontAwesomeIcon icon={faInstagram} />
                            </span>
                        </a>
                    </li>
                    <li class="icon youtube">
                        <span class="nombre-red">Youtube</span>
                        <a href="https://www.youtube.com/channel/UC1BkfXOrAE1IfSgi7FUKC3A" target="_blank">
                            <span>
                                <FontAwesomeIcon icon={faYoutube} />
                            </span>
                        </a>
                    </li>
                </ul>

                <p className='pt-5'>Podes enviarnos un mail completando el siguiente formulario:</p>
            </div>
            <Formik
                initialValues={{
                    from_name: '',
                    user_email: '',
                    message: ''
                }}
                validate={(values) => {
                    let errores = {}
                    if (!values.from_name) {
                        errores.from_name = 'el nombre no puede estar vacio'
                    } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.from_name)) {
                        errores.from_name = 'el nombre solo puede contener letras y espacios.'
                    }
                    if (!values.user_email) {
                        errores.user_email = 'ingresa un correo'
                    } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.user_email)) {
                        errores.user_email = 'correo invalido'
                    }
                    if (!values.message) {
                        errores.message = 'ingresa un mensaje'
                    }
                    return errores;
                }}
                onSubmit={(values, { resetForm }) => {
                    resetForm();
                    sendEmail();
                    setFormSend(true);
                    setTimeout(() => setFormSend(false), 5000);
                }}
            >
                {
                    ({ errors }) => (
                        <Form action="" ref={form}>
                            <div className="user-box">
                                <Field
                                    type="text"
                                    name="from_name"
                                    placeholder='nombre . . .'
                                />
                                <ErrorMessage name='from_name' component={() => (
                                    <div style={{ color: '#af3d3d' }}>{errors.from_name}</div>
                                )} />
                            </div>
                            <div className="user-box">
                                <Field
                                    type="email"
                                    name="user_email"
                                    placeholder='tu email . . .'
                                />
                                <ErrorMessage name='user_email' component={() => (
                                    <div style={{ color: '#af3d3d' }}>{errors.email}</div>
                                )} />
                            </div>
                            <div className="user-box">
                                <Field
                                    type="text"
                                    as="textarea"
                                    name="message"
                                    placeholder='mensaje . . .'
                                    className='text-area'
                                />
                                <ErrorMessage name='message' component={() => (
                                    <div style={{ color: '#af3d3d' }}>{errors.message}</div>
                                )} />
                            </div>
                            <div className='btn-submit'>
                                <button type="input" value="Send" className='btn'><span>Enviar</span></button>
                            </div>
                            {formSend ? <p className='text-center mt-3' style={{ color: 'rgb(102, 238, 113)' }}>Correo enviado con exito</p> : ''}
                        </Form>
                    )
                }
            </Formik>
        </div>
    )
}
