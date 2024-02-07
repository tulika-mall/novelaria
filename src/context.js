import React, {useState, createContext, useContext} from 'react';

const BestsellerContext= createContext();

export const ApiProvider = ({children}) => {
    const[apiUrl, setapiUrl] = useState('');
    const [selectedItem, setSelectedItem] = useState(null);


const changeApiUrl = (newApiUrl) => {
    setapiUrl(newApiUrl);
  };

const setHeading=(category) =>{
    setSelectedItem(category);
};

  return (
    <BestsellerContext.Provider value={{ apiUrl, changeApiUrl , selectedItem, setHeading}}>
      {children}
    </BestsellerContext.Provider>
  );
};

export const useApi = () => {
  return useContext(BestsellerContext);
};
