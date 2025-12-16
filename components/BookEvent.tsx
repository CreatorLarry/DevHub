'use client';

import {useState} from "react";
import {createBooking} from "@/lib/actions/booking.actions";
import posthog from "posthog-js";

const BookEvent = ({eventId, slug}: {eventId: string, slug: string;}) => {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const { success } = await createBooking({eventId, slug, email});

        if(success) {
            setSubmitted(true);

            posthog.capture('booking_created', {event_id: eventId, email});
        } else {
            console.error('Booking creation failed');
            posthog.captureException('Booking creation failed');
        }

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
                </form>
            )}
        </div>
    )
}
export default BookEvent
