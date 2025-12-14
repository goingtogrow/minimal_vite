import React, { useState } from "react";

export default function App() {
    const [items, setItems] = useState([]);
    const [loaded, setLoaded] = useState(false);

    const loadItems = async () => {
        try {
            const res = await fetch("/api/items");
            const data = await res.json();
            setItems(data);
            setLoaded(true);
        } catch (err) {
            console.error("error fetching items", err)
        }
    }

    return (
        <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
            <h1>Minimal Vite + React App</h1>
            <button onClick={loadItems} style={{ padding: "8px 12px", cursor: "pointer", marginTop: "10px" }}>
                Загрузить данные с бэкенда
            </button>


            {loaded && (
                <ul style={{ marginTop: "20px" }}>
                    {items.map((item) => (
                        <li key={item.id} style={{ marginBottom: "10px" }}>
                            <strong>{item.name}</strong>: {item.description}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}