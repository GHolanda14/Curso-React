import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [dados, setDados] = useState(null);

  const [config, setConfig] = useState(null);
  const [method, setMethod] = useState(null);
  const [callFetch, setCallFetch] = useState(false);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [itemId, setItemId] = useState(null);

  const httpConfig = async (dados, method) => {
    if (method === "POST") {
      setConfig({
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dados),
      });
    } else if (method === "DELETE") {
      setConfig({
        method,
        headers: {
          "Content-Type": "application/json",
        },
      });
    }
    setMethod(method);
    setItemId(dados);
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(url);

        const json = await res.json();

        setDados(json);
      } catch (error) {
        setError("Houve um erro no carregamento de dados!");
      }
      setLoading(false);
    };
    fetchData();
  }, [url, callFetch]);

  useEffect(() => {
    const httpRequest = async () => {
        let json;
      if (method === "POST") {
        let fetchOptions = [url, config];

        const res = await fetch(...fetchOptions);

        json = await res.json();

      } else if (method === "DELETE") {
        let deleteUrl = `${url}/${itemId}`;

        const res = await fetch(deleteUrl,config);

        json = await res.json();
      }
      setCallFetch(json);
    };
    httpRequest();
  }, [config, method, url,itemId]);

  return { dados, httpConfig, loading, error };
};
