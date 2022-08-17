import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [dados, setDados] = useState(null);

  const [config, setConfig] = useState(null);
  const [method, setMethod] = useState(null);
  const [callFetch, setCallFetch] = useState(false);

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

  const httpConfig = async (dados, method) => {
    if (method === "POST") {
      setConfig({
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dados),
      });
    }
    setMethod(method);
  };

  useEffect(() => {
    const fetchData = async () => {
        setLoading(true);
        try{
            const res = await fetch(url);

      const json = await res.json();

      setDados(json);
        }
        catch(error){
            setError("Houve um erro no carregamento de dados!")
        }
      setLoading(false);
    };
    fetchData();
  }, [url,callFetch]);

  useEffect(() => {
    const httpRequest = async () => {
        if(method === "POST"){
            let fetchOptions = [url,config];

            const res = await fetch(...fetchOptions);
            
            const json = await res.json();

            setCallFetch(json);
        }
    }
    httpRequest();
  },[config,method,url]);

  return { dados, httpConfig, loading, error };
};
