import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase/config";

export const useFetchDocument = (docCollection, idDoc) => {
  const [document, setDocument] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);
  const [cancelled, setCancelled] = useState(false);

  useEffect(() => {
    async function loadDocument() {
      if (cancelled) return;

      setLoading(true);

      try {
        const docRef = await doc(db, docCollection, idDoc);
        const docSnap = await getDoc(docRef);

        setDocument(docSnap.data());
        setLoading(false);
      } catch (error) {
        console.log(error.message);
        setError(error.message);
        setLoading(false);
      }
    }
    loadDocument();
  }, [docCollection, idDoc, cancelled]);

  useEffect(() => {
    return () => setCancelled(true);
  }, []);

  return { document, loading, error };
};
