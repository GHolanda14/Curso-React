import {db} from "../firebase/config"

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
} from "firebase/auth";

import { useEffect, useState } from "react";

export const useAuthentication = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);
  const [cancelled, setCancelled] = useState(false);

  const auth = getAuth();

  function checkIfIsCancelled() {
    if (cancelled) {
      return;
    }
  }

  const createUser = async (dados) => {
    setLoading(true); 
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        dados.email,
        dados.password
      );

      await updateProfile(user, { displayName: dados.nome });
        
      setLoading(false)
      setError(null);
      return user;
    } catch (error) {
      
      let statusError = error.message;

      if(statusError.includes("Password")){
        setError("A senha deve ter no mínimo 6 caracteres!"); 
      }else if(statusError.includes("email-already")){
        setError("E-mail já cadastrado!"); 
      }else{
        setError("Ocorreu um erro, tente novamente mais tarde!");
      }
    }
    setLoading(false);
  };

  useEffect(() => {
    return () => setCancelled(true);
  }, []);

  return {
    auth,
    createUser,
    error,
    loading,
  };
};
