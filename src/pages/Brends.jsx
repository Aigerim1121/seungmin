import React, { useState } from "react";
import "./Brends.scss";
import bdek from "../assets/image/bdek.png"
import hassion from "../assets/image/hassion.png"
import versado from "../assets/image/versado.png"
import petek from "../assets/image/petek.png"
import cosset from "../assets/image/cosset.png"
import barkli from "../assets/image/barkli.png"

const brandsData = [
  { id: 1, name: "B.D.E.K.", img: bdek, country: "Германия" },
  { id: 2, name: "HASSION", img: hassion, country: "Польша" },
  { id: 3, name: "VERSADO", img: versado, country: "Словакия" },
  { id: 4, name: "PETEK", img: petek, country: "Турция" },
  { id: 5, name: "COSSET", img: cosset, country: "Россия" },
  { id: 6, name: "BARKLI", img: barkli, country: "Россия" },
  { id: 7, name: "B.D.E.K.", img: bdek, country: "Германия" },
  { id: 8, name: "HASSION", img: hassion, country: "Польша" },
  { id: 9, name: "VERSADO", img: versado, country: "Словакия" },
  { id: 10, name: "PETEK", img: petek, country: "Турция" },
  { id: 11, name: "COSSET", img: cosset, country: "Россия" },
  { id: 12, name: "BARKLI", img: barkli, country: "Россия" },
  { id: 13, name: "B.D.E.K.", img: bdek, country: "Германия" },
  { id: 14, name: "HASSION", img: hassion, country: "Польша" },
  { id: 15, name: "VERSADO", img: versado, country: "Словакия" },
  { id: 16, name: "PETEK", img: petek, country: "Турция" },
  { id: 17, name: "COSSET", img: cosset, country: "Россия" },
  { id: 18, name: "BARKLI", img: barkli, country: "Россия" },
];

const countries = [
  "Все",
  "Германия",
  "Польша",
  "Россия",
  "Словакия",
  "США",
  "Швеция",
];

const Brends = () => {
  const [selected, setSelected] = useState("Все");

  const filtered =
    selected === "Все"
      ? brandsData
      : brandsData.filter((b) => b.country === selected);

  return (
    <div className="brands">
      <h2 className="brands__title">Бренды и производители</h2>

      <div className="brands__filters">
        {countries.map((country) => (
          <button
            key={country}
            className={`brands__filter ${
              selected === country ? "active" : ""
            }`}
            onClick={() => setSelected(country)}
          >
            {country}
          </button>
        ))}
      </div>

      <div className="brands__grid">
        {filtered.map((item) => (
          <div key={item.id} className="brand-card">
            <img src={item.img} alt="" />
            <h3>{item.name}</h3>
            <p>Производитель</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brends;
