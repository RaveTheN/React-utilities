import { useEffect, useState } from "react";

const defaultOptions = { data: {}, method: "GET", headers: {} };

export const useFetch = (url, options = { ...defaultOptions }) => {
  options = { ...defaultOptions, ...options };

  const [internalUrl, setInternalUrl] = useState(url);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const update = async (_url) => {
    if (_url) {
      setInternalUrl(_url);
    }
    try {
      const response = await fetch(internalUrl, options);
      const result = await response.json();

      if (response.ok) {
        setData(result);
        setError(null);
      } else {
        setData(null);
        setError(result);
      }
    } catch (error) {
      setData(null);
      setError(error.message);
    }
  };

  useEffect(() => {
    update();
  }, []);

  return [data, error, update];
};

/*
TIPI DI CHIAMATE:
GET: quando visiti un link per ottenere dei dati
POST: inviare dati ad un link specifico per salvare quei dati
PUT: modificare dati già esistenti
PATCH: stessa cosa di PUT ma non cambia tutti i dati
DELETE: eliminare dati 

*/
