import React, {
  createContext,
  useContext,
  useMemo,
  useState,
  useEffect,
} from 'react';

const DataContext = createContext();

const useData = () => {
  const context = useContext(DataContext);

  if (!context) {
    throw new Error(`useData must be used within a ProjectsProvider`);
  }

  return context;
};

const DataProvider = props => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/data/projects.json')
      .then(response => response.json())
      .then(setData);
  }, []);

  const value = useMemo(() => [data, setData], [data]);

  return <DataContext.Provider value={value} {...props} />;
};

export { DataProvider, DataContext, useData };
