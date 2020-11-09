import React, {
  createContext,
  useContext,
  useMemo,
  useState,
  useEffect,
} from 'react';

import Projects from '../../data';

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
    setData(Projects);
  }, []);

  const value = useMemo(() => [data, setData], [data]);

  return <DataContext.Provider value={value} {...props} />;
};

export { DataProvider, DataContext, useData };
