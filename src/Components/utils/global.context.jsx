import { createContext, useEffect, useReducer } from "react";

export const ContextGlobal = createContext();

const initState = JSON.parse(localStorage.getItem("dentistas")) || {
  dentistaList: [],
  favList: [],
  dentista: {},
};

const themeInit = JSON.parse(localStorage.getItem("theme")) || {
  theme: false,
};

const url = "https://jsonplaceholder.typicode.com/users/";

const dentistaReducer = (state, action) => {
  switch (action.type) {
    case "GET_DENTISTAS":
      return {
        dentistaList: action.payload,
        favList: state.favList,
        dentista: state.dentista,
      };
    case "ADD_FAV":
      return {
        dentistaList: state.dentistaList,
        favList: [...state.favList, action.payload],
        dentista: state.dentista,
      };
    case "DELETE_FAV":
      return {
        dentistaList: state.dentistaList,
        favList: state.favList.filter((fav) => fav.id !== action.payload),
        dentista: state.dentista,
      };

    case "SET_DETAIL":
      return {
        dentistaList: state.dentistaList,
        favList: state.favList,
        dentista: action.payload,
      };
    default:
      return state;
  }
};

// toggle

const initialState = {
  darkMode: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      return {
        ...state,
        darkMode: !state.darkMode,
      };
    default:
      return state;
  }
};

export const ContextProvider = ({ children }) => {
  const [dentistaState, dentistaDispatch] = useReducer(
    dentistaReducer,
    initState
  );

  const [themeState, themeDispatch] = useReducer(reducer, themeInit);

  useEffect(() => {
    const fetchDentistas = async () => {
      const response = await fetch(url);
      const data = await response.json();
      dentistaDispatch({ type: "GET_DENTISTAS", payload: data });
    };

    fetchDentistas();
  }, []);

  useEffect(() => {
    localStorage.setItem("dentistas", JSON.stringify(dentistaState));
  }, [dentistaState]);

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(themeState));
  }, [themeState]);

  if (themeState.darkMode) {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }

  return (
    <ContextGlobal.Provider
      value={{
        dentistaState,
        dentistaDispatch,
        themeState,
        themeDispatch,
      }}
    >
      {children}
    </ContextGlobal.Provider>
  );
};
