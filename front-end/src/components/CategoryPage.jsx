import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function CategoryPage() {
  const { subcategory } = useParams();

  const [categori, setCategory] = useState();

  const getCategory = async () => {
    const results = await fetch(
      `https://app.ticketmaster.com/discovery/v2/suggest?apikey=XscWjiN4OXyLLl2XGLNul0zmoZ8M2zAh&keyword=${subcategory}&locale=*`
    )
      .then((response) => response.json())
      .then((data) => setCategory(data._embedded));
  };

  console.log("sjekk", categori);
  useEffect(() => {
    getCategory();
  }, [subcategory]);
  return (
    <section>
      <h1>{subcategory.toUpperCase()}</h1>

      <section>
        <h2>Attraksjoner</h2>
        {categori}
      </section>
      <section>
        <h2>Arrangementer (events)</h2>
      </section>
      <section>
        <h2>Spillesteder/eventsteder</h2>
      </section>
    </section>
  );
}
