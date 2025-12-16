import { Suspense } from "react";
import EventDetails from "@/components/EventDetails";
import SimilarEvents from "@/components/SimilarEvents";

const EventDetailsPage = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;

  return (
    <main>
      <Suspense fallback={<div>Loading...</div>}>
        <EventDetails slug={slug} />
      </Suspense>

      <div className="flex w-full flex-col gap-4 pt-20">
        <h2>Similar Events</h2>
        <div className="events">
          <Suspense fallback={<div>Loading similar events…</div>}>
            <SimilarEvents slug={slug} />
          </Suspense>
        </div>
      </div>
    </main>
  )
}
export default EventDetailsPage