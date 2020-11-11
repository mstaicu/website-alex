import React, {
  createContext,
  useContext,
  useMemo,
  useState,
  useEffect,
} from 'react';

import { DataContext } from '../DataContext';

const FilterDataContext = createContext();

const FilterDataProvider = props => {
  const [state, setState] = useState([]);
  const value = useMemo(() => [state, setState], [state]);

  return <FilterDataContext.Provider value={value} {...props} />;
};

const useFilterDataContext = () => {
  const filterContext = useContext(FilterDataContext);

  if (!filterContext) {
    throw new Error(
      `useFilterDataContext must be used within a FilterDataProvider`,
    );
  }

  const dataContext = useContext(DataContext);

  if (!dataContext) {
    throw new Error(`useFilterDataContext must be used within a DataProvider`);
  }

  /**
   * Projects data cache
   */
  const [data] = dataContext;

  /**
   * Filtered projects data cache
   */
  const [projects, setProjects] = filterContext;

  useEffect(() => {
    setProjects(data);
  }, [data]);

  const filter = predicate => setProjects(data.filter(predicate));

  return {
    projects,
    filter,
  };
};

export { FilterDataProvider, useFilterDataContext };
