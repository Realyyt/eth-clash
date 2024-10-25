import Image from 'next/image';

const events = [
  { name: 'Paris Blockchain Week', date: 'April 9-11, 2024', location: 'Paris, France', image: '/paris.jpeg' },
  { name: 'Devcon Week', date: 'November 9-17, 2024', location: 'TBA', image: '/devcon.png' },
  { name: 'ETH India', date: 'December 6-8, 2024', location: 'India', image: '/ethindia.png' },
];

export default function UpcomingEvents() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">Upcoming Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
          {events.map((event, index) => (
            <div key={index} className="p-6 rounded-lg overflow-hidden relative">
              {event.image && (
                <div className="mb-4 relative h-48">
                  <Image
                    src={event.image}
                    alt={event.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                    priority={index < 3}
                    loading={index < 3 ? "eager" : "lazy"}
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+F9PQAI8wNPvd7POQAAAABJRU5ErkJggg=="
                  />
                  {/* 
                  This code adds a blur placeholder for images:
                  - 'placeholder="blur"' enables the blur effect
                  - 'blurDataURL' provides a tiny, base64-encoded image
                    that's shown while the main image is loading
                  - The provided blurDataURL is a 1x1 pixel transparent PNG,
                    which creates a subtle loading effect
                  This improves perceived performance and user experience
                  by showing a placeholder instead of empty space.
                  */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white">
                    <h3 className="text-2xl font-semibold mb-2 text-center">{event.name}</h3>
                    <p className="mb-2 text-center">{event.date}</p>
                    <p className="text-center">{event.location}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
