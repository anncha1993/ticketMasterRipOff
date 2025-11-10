import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function EventPage() {
  const { event } = useParams();
  const [attraction, setAttraction] = useState();
  const [eventInformation, setEventInformation] = useState([]);

  const getAttraction = async () => {
    const result = await fetch(
      `https://app.ticketmaster.com/discovery/v2/attractions/${event}?apikey=XscWjiN4OXyLLl2XGLNul0zmoZ8M2zAh&locale=*`
    )
      .then((response) => response.json())
      .then((data) => setAttraction(data));
    return result;
  };

  const getEvent = async () => {
    const result = await fetch(
      `https://app.ticketmaster.com/discovery/v2/events?apikey=XscWjiN4OXyLLl2XGLNul0zmoZ8M2zAh&attractionId=${event}&locale=*`
    )
      .then((response) => response.json())
      .then((data) => setEventInformation(data._embedded.events));
    return result;
  };

  console.log(attraction, eventInformation);

  useEffect(() => {
    getAttraction();
    getEvent();
  }, [event]);
  return (
    <section>
      <h1>{}</h1>

      {attraction && eventInformation ? (
        <>
          <section>
            <section>
              <h3>Sjanger:</h3>
              <ul>
                <li>{attraction?.classifications[0].segment.name}</li>
                <li>{attraction?.classifications[0].genre.name}</li>
                <li>{attraction?.classifications[0].subType.name}</li>
                <li>{attraction?.classifications[0].subGenre.name}</li>
              </ul>
            </section>
            <section>
              <h3>Følg oss på sosiale medier:</h3>
            </section>
          </section>
          <section className="flex-section">
            <h3>Festivalpass:</h3>
            {eventInformation.map((ev) => (
              <article key={ev.id} className="passcard">
                <img src={ev.images[0].url} alt={ev.name} />
                <h3>{ev.name}</h3>
                <span>{ev._embedded.venues[0].name}</span>
                <span>{ev.dates.start.localDate}</span>
                <button>Kjøp</button>
              </article>
            ))}
          </section>
          <section className="flex-section">
            <h3>Artister:</h3>
            {eventInformation?.map((ar) =>
              ar._embedded.attractions.map((artist) => (
                <article key={artist.id} className="passcard">
                  <img src={artist.images[1].url} alt={artist.name} />
                  <h3>{artist.name}</h3>
                </article>
              ))
            )}
          </section>
        </>
      ) : (
        <p>laster</p>
      )}
    </section>
  );
}
