"use client";

import { useState, useEffect } from "react";

export function useFetch<T>(url: string, simulateError = false) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    // Simulate API error if simulateError is true
    const fetchUrl = simulateError ? url + "/invalid" : url;

    fetch(fetchUrl)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Failed to fetch: ${res.status}`);
        }
        return res.json();
      })
      .then((json) => setData(json))
      .catch((err) => {
        setError(err.message)
         setData(null);

      })
      .finally(() => setLoading(false));
  }, [url, simulateError]);

  return { data, loading, error };
}
