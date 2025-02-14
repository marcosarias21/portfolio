import { createContext, useState } from 'react';

const projectContext = createContext();

export const ProjectProvider = ({ children }) => {
  const [typeProject, setTypeProject] = useState('Only React');

  const data = { typeProject, setTypeProject };

  return <projectContext.Provider value={data}>{children}</projectContext.Provider>;
};

export default projectContext;
