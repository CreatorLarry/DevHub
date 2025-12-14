'use client';

import {useState} from "react";

const BookEvent = () => {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        setTimeout(() => {
            setSubmitted(true);
        }, 1000)
    }

    return (
        <div id="book-event">
            {submitted ? (
                <p className="text-sm">
                    Thank you for booking your spot for this event!
                </p>
            ) : (
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email">Email Address</label>
                        <input type="email"
                               id="email"
                               value={email}
                               placeholder="Enter your email address"
                               onChange={(e) => setEmail(e.target.value)}/>
                    </div>

                    <button type="submit" className="button-submit">Book Your Spot</button>
                    /
                </form>
            )}
        </div>
    )
}
export default BookEvent
