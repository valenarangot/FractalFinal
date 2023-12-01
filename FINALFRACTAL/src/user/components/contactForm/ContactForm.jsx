import React from "react";
import styles from "./ContactForm.module.css"
import Swal from 'sweetalert2' 

export function ContactForm() {
    const headerText = "Tell us what your project is about and prepare yourself for a proposal in the next 24 hours that you can’t miss.";
    
    const submitHandler = (event) => {
        console.log("Submit")
        event.preventDefault()
        Swal.fire({
            title: 'Your message has been sent!',
            text: 'Prepare yourself for an awesome proposal',
            icon: 'success',
            confirmButtonText: 'Thanks!',
            customClass: {
              confirmButton: 'swal-button'
            }
          })
    }

    return (
        <section className={styles.section}>
            <header className={styles.header}>
                <img 
                    // src="assets\icons\Buzon.svg" 
                    src="/Buzon.svg" 
                    alt="mailbox" />
                <p>{headerText}</p>
            </header>
            <form onSubmit={submitHandler} className={styles.form}>
                <div className={styles.inputs}>
                    <input className={styles.input} type="text" placeholder="Name*"/>
                    <input className={styles.input} type="email" placeholder="E-mail*"/>
                    <div className={styles.horizontalInputs}>
                        <input className={styles.horInput} type="number" placeholder="Phone number (optional)"/>
                        <input className={styles.horInput} type="text" placeholder="Company/Organization"/>
                    </div>
                    <textarea className={styles.textarea} name="subject" id="" rows="5" placeholder="Subject"></textarea>
                </div>
                <button className={styles.button}>Send</button>
            </form>
        </section>
    )       
}