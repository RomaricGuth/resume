import {createContext, useState} from "react";

const cvOptionsContextDefaultValue = {
  options: {},
  setOptions: options => {},
};

export const CvOptionsContext = createContext(cvOptionsContextDefaultValue);

export const CvOptionsContextProvider = ({children}) => {

  const [context, setContext] = useState({
    ...cvOptionsContextDefaultValue,
    setOptions: (options) => {
      setContext(prevState => {
        return {
          ...prevState,
          options
        };
      });
    },
  });

  return (
    <CvOptionsContext.Provider value={context}>
      {children}
    </CvOptionsContext.Provider>
  );
}
