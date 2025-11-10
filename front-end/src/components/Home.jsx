import { useEffect, useState } from "react";
import EventCard from "./EventCard";

export default function Home() {
  const [mainEvents, setManinEvents] = useState([]);
  const [eventsInCity, setEventsInCity] = useState([]);

  const [city, setCity] = useState("Oslo");

  const now = new Date();
  const dato =
    new Date(
      Date.UTC(now.getFullYear(), now.getMonth(), now.getDate(), 0, 4, 0, 0)
    )
      .toISOString()
      .split(".")[0] + "Z";

  const uke =
    new Date(
      Date.UTC(now.getFullYear(), now.getMonth(), now.getDate() + 7, 0, 4, 0, 0)
    )
      .toISOString()
      .split(".")[0] + "Z";

  console.log(uke, "2025-04-20T00:04:00Z");

  const getMainEvents = async () => {
    const result = await fetch(
      `https://app.ticketmaster.com/discovery/v2/attractions?apikey=XscWjiN4OXyLLl2XGLNul0zmoZ8M2zAh&id=K8vZ917oWOV,%20K8vZ917K7fV%20,%20K8vZ917_YJf,%20K8vZ917heL0&locale=*`
    )
      .then((response) => response.json())
      .then((data) => setManinEvents(data._embedded.attractions));
  };

  const getEventsThisWeek = async () => {
    const result = await fetch(
      `https://app.ticketmaster.com/discovery/v2/events?apikey=XscWjiN4OXyLLl2XGLNul0zmoZ8M2zAh&locale=*&startDateTime=${dato}&endDateTime=${uke}&city=${city}&size=10&includeSpellcheck=yes`
    )
      .then((response) => response.json())
      .then((data) => setEventsInCity(data._embedded.events));
  };

  console.log(mainEvents, eventsInCity);

  useEffect(() => {
    getMainEvents();
    getEventsThisWeek();
  }, []);

  useEffect(() => {
    getEventsThisWeek();
  }, [city]);

  return (
    <>
      <h1>Home</h1>
      <section className="flex-section">
        <h2>Festivaler denne sommeren!</h2>
        {mainEvents?.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </section>
      <section>
        <h2>Se hva som skjer i storbyene denne mnd</h2>
        <ul>
          <li>
            <button onClick={() => setCity("Oslo")}>Oslo</button>
          </li>
          <li>
            <button onClick={() => setCity("London")}>London</button>
          </li>
          <li>
            <button onClick={() => setCity("Berlin")}>Berlin</button>
          </li>
          <li>
            <button
              onClick={() =>
                setCity("københavn s, københavn v, københavn k, københavn n")
              }
            >
              København
            </button>
          </li>
          <li>
            <button onClick={() => setCity("Stockholm")}>Stockholm</button>
          </li>
        </ul>
        <section>
          <h3>I {city} kan du oppleve:</h3>
          {eventsInCity?.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </section>
      </section>
      <section>
        <h2>For familier</h2>
      </section>
    </>
  );
}
