import { Link } from "react-router-dom";

export default function EventCard({ event }) {
  return (
    <article className="eventcard">
      <img src={event?.images[3]?.url} />
      <h3>{event.name}</h3>
      <ul>
        {event.classifications[0].segment?.name !== "Undefined" ? (
          <li>{event.classifications[0].segment?.name}</li>
        ) : null}
        {event.classifications[0].subType?.name !== "Undefined" ? (
          <li>{event.classifications[0].subType?.name}</li>
        ) : null}
        {event.classifications[0].subGenre?.name !== "Undefined" ? (
          <li>{event.classifications[0].subGenre?.name}</li>
        ) : null}
      </ul>
      <Link to={event.id}>Se flere detaljer om {event.name}</Link>
    </article>
  );
}
