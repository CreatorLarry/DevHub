import ExploreBtn from "@/components/ExploreBtn";
import EventCard from "@/components/EventCard";
import {IEvent} from "@/database";
import {cacheLife} from "next/cache";
import {getEvents} from "@/lib/data/events";

const Page = async () => {
    'use cache'
    cacheLife('hours')
    // Query the database directly during build/runtime instead of calling internal API routes.
    // This avoids needing NEXT_PUBLIC_BASE_URL and fixes Invalid URL errors during prerender.
    const events = await getEvents();

    return (
        <section>
            <h1 className="text-center">
                Home for Every <br/> DEVELOPER Event.
            </h1>
            <p className='text-center mt-5'>Hackathons, Dev Meetups and Conferences, All in One Place</p>

            <ExploreBtn/>

            <div className="m-20 space-y-7">
                <h3>Featured Events</h3>

                <ul className="events">
                    {events && events.length > 0 && events.map((event: IEvent) => (
                        <li key={event.title} className="list-none">
                            <EventCard {...event} />
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}
export default Page
