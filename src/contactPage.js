import React from 'react'
import ContactForm from './form.js'

const ContactPage = () => {
    submit = values => {
        // print the form values to the console
        console.log(values)
    }
    return <ContactForm onSubmit={this.submit} />;
}