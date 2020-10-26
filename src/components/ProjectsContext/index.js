import React, {
  createContext,
  useContext,
  useMemo,
  useState,
  useEffect,
} from 'react';

const fakeData = [
  {
    id: 1,
    name: 'Name',
    date: new Date(+new Date() - Math.floor(Math.random() * 10000000000)),
    category: '',
    subCategory: 'design',
  },
  {
    id: 2,
    name: 'Name',
    date: new Date(+new Date() - Math.floor(Math.random() * 10000000000)),
    category: '',
    subCategory: 'illustration',
  },
  {
    id: 3,
    name: 'Name',
    date: new Date(+new Date() - Math.floor(Math.random() * 10000000000)),
    category: '',
    subCategory: 'animation',
  },
  {
    id: 4,
    name: 'Name',
    date: new Date(+new Date() - Math.floor(Math.random() * 10000000000)),
    category: '',
    subCategory: 'others',
  },
  {
    id: 5,
    name: 'Name',
    date: new Date(+new Date() - Math.floor(Math.random() * 10000000000)),
    category: '',
    subCategory: 'profile',
  },
  {
    id: 6,
    name: 'Name',
    date: new Date(+new Date() - Math.floor(Math.random() * 10000000000)),
    category: '',
    subCategory: 'digitalFootprint',
  },
  {
    id: 7,
    name: 'Name',
    date: new Date(+new Date() - Math.floor(Math.random() * 10000000000)),
    category: '',
    subCategory: 'design',
  },
  {
    id: 8,
    name: 'Name',
    date: new Date(+new Date() - Math.floor(Math.random() * 10000000000)),
    category: '',
    subCategory: 'illustration',
  },
  {
    id: 9,
    name: 'Name',
    date: new Date(+new Date() - Math.floor(Math.random() * 10000000000)),
    category: '',
    subCategory: 'animation',
  },
  {
    id: 10,
    name: 'Name',
    date: new Date(+new Date() - Math.floor(Math.random() * 10000000000)),
    category: '',
    subCategory: 'others',
  },
  {
    id: 11,
    name: 'Name',
    date: new Date(+new Date() - Math.floor(Math.random() * 10000000000)),
    category: '',
    subCategory: 'profile',
  },
  {
    id: 12,
    name: 'Name',
    date: new Date(+new Date() - Math.floor(Math.random() * 10000000000)),
    category: '',
    subCategory: 'digitalFootprint',
  },
  {
    id: 13,
    name: 'Name',
    date: new Date(+new Date() - Math.floor(Math.random() * 10000000000)),
    category: '',
    subCategory: 'design',
  },
  {
    id: 14,
    name: 'Name',
    date: new Date(+new Date() - Math.floor(Math.random() * 10000000000)),
    category: '',
    subCategory: 'illustration',
  },
];

const ProjectsContext = createContext();

const useProjects = () => {
  const context = useContext(ProjectsContext);

  if (!context) {
    throw new Error(`useProjects must be used within a ProjectsProvider`);
  }

  return context;
};

const ProjectsProvider = props => {
  const [cache, setCache] = useState([]);
  const [filteredCache, setFilteredCache] = useState([]);

  useEffect(() => {
    setCache(fakeData);
    setFilteredCache(fakeData);
  }, []);

  const filter = predicate => setFilteredCache(cache.filter(predicate));

  const value = useMemo(() => [filteredCache, filter], [filteredCache]);

  return <ProjectsContext.Provider value={value} {...props} />;
};

export { ProjectsProvider, useProjects };
