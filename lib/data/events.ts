import connectDB from "@/lib/mongodb";
import Event, { IEvent } from "@/database/event.model";

// Simple DB helper to fetch events for the homepage without calling internal API routes
export async function getEvents(): Promise<IEvent[]> {
  try {
    await connectDB();
    const items = await Event.find({})
      .sort({ createdAt: -1 })
      .lean<IEvent[]>();
    return items ?? [];
  } catch (e) {
    if (process.env.NODE_ENV === "development") {
      console.error("getEvents failed", e);
    }
    return [];
  }
}

export async function getEventBySlug(slug: string): Promise<IEvent | null> {
  try {
    await connectDB();
    const item = await Event.findOne({ slug }).lean<IEvent | null>();
    return item;
  } catch (e) {
    if (process.env.NODE_ENV === "development") {
      console.error("getEventBySlug failed", e);
    }
    return null;
  }
}
