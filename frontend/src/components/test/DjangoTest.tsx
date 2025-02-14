'use client'

import { useEffect, useState } from "react";
import axios from "axios";
import { Suspense } from "react";



export default function DjangoTest() {
    const [message, setMessage] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    // could use the axios.get().then(response => something).catch(error => something) syntax insted
    useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/hello/");  // Fetch data from Django API
        setMessage(response.data.message);  // On success, set the message
      } catch (err) {
          console.error("Error fetching data:", err);  // Log error for debugging
          setError("Failed to load data. Please try again later.");  // Display fallback error message
         }
        };

        fetchData();
        }, []);

    return (
        <div>
            <h1>Teste de Django</h1>
            <Suspense fallback="waiting...">
                {error ? <p className="text-red-500">{error}</p> : <p>{message}</p>}
            </Suspense>
        </div>
    );
}