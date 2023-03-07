import React, { useState } from "react";
import useFetch from "../hooks/useFetch";
import styles from "./TripList.module.css";

export default function TripList() {
  const [url, setUrl] = useState("http://localhost:3000/trips");
  const { data: trips, isPending, error } = useFetch(url);
  const pendingMessage = "Data is pending";

  console.log(trips);

  return (
    <div className={styles.trip_list}>
      <h2>TripList</h2>
      {isPending && <div>{pendingMessage}</div>}
      {error && <div>{error}</div>}
      <ul>
        {trips &&
          trips.map(({ title, price, id }) => (
            <li key={id}>
              <h1>{title}</h1>
              <p>{price}</p>
            </li>
          ))}
      </ul>
      <div className={styles.filters}>
        <button
          onClick={() => setUrl("http://localhost:3000/trips?loc=europe")}
        >
          European Trips
        </button>
        <button onClick={() => setUrl("http://localhost:3000/trips")}>
          All Trips
        </button>
      </div>
    </div>
  );
}
