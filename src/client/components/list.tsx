import { faker } from "@faker-js/faker";
import React, { useEffect, useState } from "react";

export default function List() {
  const [cows, setCows] = useState<string[]>([]);
  useEffect(() => {
    const randomCows: string[] = [];
    fetch("/cows").then(res => {
        res.json().then(res => {
            setCows(res)
        })
    })
  }, []);

  return (
    <ul>
      {cows.map((c) => (
        <li key={c}>{c}</li>
      ))}
    </ul>
  );
}
