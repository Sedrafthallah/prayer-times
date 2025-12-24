import { useEffect, useState } from "react";
import DatesPrayer from "./datesPrayer";

export function CardPayer() {
  const cities = [
    { name: "Hama", value: "Hama" },
    { name: "Homs", value: "Homs" },
    { name: "Damascus", value: "Damascus" },
    { name: "Tartous", value: "Tartous" },
    { name: "Latakia", value: "Latakia" },
    { name: "Aleppo", value: "Aleppo" },
    { name: "Idlib", value: "Idlib" },
  ];

  const [city, setCity] = useState("Homs");
  const [time, setTime] = useState(null);

  useEffect(() => {
    fetch(
      `https://api.aladhan.com/v1/timingsByCity?city=${city}&country=Syria&method=2`
    )
      .then((res) => res.json())
      .then((data) => setTime(data.data.timings))
      .catch((err) => console.log("Fetch error:", err));
  }, [city]);

  return (
    <div
      style={{
        width: "500px",
        height: "420px",
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        border: "2px solid rgba(255, 255, 255, 0.2)",
        backdropFilter: "blur(10px)",
        borderRadius: "10px",
        padding: "20px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
      }}
    >
      <div
        style={{
          borderBottom: "1px solid rgba(255,255,255,0.2)",
          paddingBottom: "40px",
          marginBottom: "40px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <h3 style={{ margin: 0, color: "white" }}>City</h3>
          <select
            value={city}
            onChange={(e) => setCity(e.target.value)}
            style={{
              width: "250px",
              backgroundColor: "#dd5d3dff",
              borderRadius: "5px",
              outline: "none",
              padding: "4px",
              color: "white",
            }}
          >
            {cities.map((c) => (
              <option key={c.value} value={c.value}>
                {c.name}
              </option>
            ))}
          </select>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <h3 style={{ margin: 0, color: "white" }}>Date</h3>
          <h3 style={{ margin: 0, color: "white" }}>
            {new Date().toLocaleDateString()}
          </h3>
        </div>
      </div>

      {!time && (
        <p style={{ color: "white", textAlign: "center" }}>Loading...</p>
      )}

      {time && (
        <>
          <DatesPrayer name="Fajr" time={time.Fajr} />
          <DatesPrayer name="Dhuhr" time={time.Dhuhr} />
          <DatesPrayer name="Asr" time={time.Asr} />
          <DatesPrayer name="Maghrib" time={time.Maghrib} />
          <DatesPrayer name="Isha" time={time.Isha} />
        </>
      )}
    </div>
  );
}
