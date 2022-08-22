import { createContext, useReducer } from "react";

export const TitleColorContext = createContext();

const INITIAL_TITLE = {
  color: "purple",
  fontWeight: "normal",
};

const titleColorReducer = (state, action) => {
  const { type } = action;
  switch (type) {
    case "BLUE-NEG":
      return { ...state, color: "blue", fontWeight: "bold" };
    case "BLUE":
      return { ...state, color: "blue", fontWeight: "normal" };
    case "RED-NEG":
      return { ...state, color: "red", fontWeight: "bold" };
    case "RED":
      return { ...state, color: "red", fontWeight: "normal"};
    default:
      return state;
  }
};

export const TitleColorContextProvider = ({ children }) => {
  const [title, dispatchTitle] = useReducer(titleColorReducer, INITIAL_TITLE);
  return (
    <TitleColorContext.Provider value={{ ...title, dispatchTitle }}>
      {children}
    </TitleColorContext.Provider>
  );
};
