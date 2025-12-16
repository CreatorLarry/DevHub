import Event from "@/database/event.model";
import connectDB from "@/lib/mongodb";
import EventCard from "@/components/EventCard";
import { IEvent } from "@/database";

export const dynamic = 'force-dynamic';

const SimilarEvents = async ({ slug }: { slug: string }) => {
  try {
    await connectDB();
    const base = await Event.findOne({ slug }).lean<IEvent>();
    if (!base) return null;

    const items: IEvent[] = await Event.find({
      _id: { $ne: base._id },
      tags: { $in: base.tags },
    }).lean();

    if (!items?.length) return null;

    return (
      <>
        {items.map((ev) => (
          <EventCard key={ev.title} {...(ev as unknown as IEvent)} />
        ))}
      </>
    );
  } catch {
    return null;
  }
};

export default SimilarEvents;
