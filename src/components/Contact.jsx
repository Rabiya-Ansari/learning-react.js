import React from 'react'

export default function Contact() {
    return (
        <div>

            <section className="contact-section" id="contact">
                <div className="contact-content">
                    <h2>Contact Us</h2>

                    <p>
                        Have any questions? Feel free to contact us.
                    </p>

                    <form className="contact-form">
                        <input
                            type="text"
                            placeholder="Enter your name"
                        />

                        <input
                            type="email"
                            placeholder="Enter your email"
                        />

                        <textarea
                            placeholder="Enter your message"
                            rows="5"
                        ></textarea>

                        <button type="submit">Send Message</button>
                    </form>
                </div>
            </section>
        </div>
    )
}
